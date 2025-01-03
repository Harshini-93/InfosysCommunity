package com.infosys.module2.microService;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name="module1")
@Component
public interface Module1Microservice {
    @GetMapping("/api/getEmail")
    public String getEmailFromJWT(@RequestHeader("Authorization") String jwt);

}