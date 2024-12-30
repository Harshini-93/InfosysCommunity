package com.infosys.module3.microService;

import com.infosys.module3.info.FlatInfo;
import com.infosys.module3.info.SocietyInfo;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="module2")
@Component
public interface Module2Microservice {
    @GetMapping("/api/getAdminDetails")
    public SocietyInfo getAdminDetails(@RequestHeader("Authorization") String jwt);
    @GetMapping("/api/getFlat")
    public FlatInfo getFlat(@RequestHeader("Authorization") String jwt, @RequestParam("flatNo") String flatNo);
}
