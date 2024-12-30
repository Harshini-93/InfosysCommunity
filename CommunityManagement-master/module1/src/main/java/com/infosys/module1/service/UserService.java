package com.infosys.module1.service;

import com.infosys.module1.exception.Module1Exception;
import com.infosys.module1.info.LoginInfo;
import com.infosys.module1.model.User;
import com.infosys.module1.response.AuthResponse;

public interface UserService {
    public AuthResponse signUp(User user) throws  Module1Exception;
    public AuthResponse login(LoginInfo loginData) throws  Module1Exception;
    public User getUser(String jwt);

}
