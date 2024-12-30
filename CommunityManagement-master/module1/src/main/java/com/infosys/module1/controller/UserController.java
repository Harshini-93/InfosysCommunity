package com.infosys.module1.controller;

import com.infosys.module1.exception.Module1Exception;
import com.infosys.module1.security.JwtProvider;
import com.infosys.module1.info.LoginInfo;
import com.infosys.module1.model.User;
import com.infosys.module1.response.AuthResponse;
import com.infosys.module1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/auth/signup")
    public AuthResponse signUp(@RequestBody User user) throws Module1Exception {
        return userService.signUp(user);
    }

    @PostMapping("/auth/login")
    public AuthResponse login(@RequestBody LoginInfo loginInfo) throws Module1Exception {
        return userService.login(loginInfo);
    }
    @GetMapping("api/getEmail")
    public String getEmail(@RequestHeader("Authorization") String jwt){
        return JwtProvider.getEmailFromJwtToken(jwt);
    }
    @GetMapping("api/getUser")
    public User getUser(@RequestHeader ("Authorization") String jwt){
        return userService.getUser(jwt);
    }
}
