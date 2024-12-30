package com.infosys.module1.service;

import com.infosys.module1.exception.Module1Exception;
import com.infosys.module1.security.JwtProvider;
import com.infosys.module1.info.LoginInfo;
import com.infosys.module1.model.User;
import com.infosys.module1.repository.UserRepository;
import com.infosys.module1.response.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceHandler implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public AuthResponse signUp(User user) throws Module1Exception {
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            throw new Module1Exception("An account with this email address already exists.");
        }

        User newUser = new User();
        newUser.setEmail(user.getEmail());

        if (user.getPassword().length() < 7) {
            throw new Module1Exception("Password must be at least 7 characters long.");
        }

        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setRole(user.getRole());

        userRepository.save(newUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        String token = JwtProvider.generateToken(authentication);

        return new AuthResponse(token, "Registration completed successfully.");
    }

    @Override
    public AuthResponse login(LoginInfo loginDetails) throws Module1Exception {
        Authentication authentication = authenticate(loginDetails.getEmail(), loginDetails.getPassword());

        String token = JwtProvider.generateToken(authentication);

        return new AuthResponse(token, "Login successful!");
    }

    @Override
    public User getUser(String jwt) {
        String email = JwtProvider.getEmailFromJwtToken(jwt);
        return userRepository.findByEmail(email);
    }

    public Authentication authenticate(String email, String password) throws Module1Exception {
        UserDetails userDetails = getUserDetails(email);

        if (userDetails == null) {
            throw new Module1Exception("No user found with the provided email.");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new Module1Exception("Incorrect password.");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

    public UserDetails getUserDetails(String email) throws Module1Exception {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new Module1Exception("No user found associated with this email address: " + email);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        if ("admin".equals(user.getRole())) {
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        } else if ("resident".equals(user.getRole())) {
            authorities.add(new SimpleGrantedAuthority("ROLE_RESIDENT"));
        }

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }
}
