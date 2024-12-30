package com.infosys.module4.microService;

import com.infosys.module4.info.ResidentDto;
import com.infosys.module4.info.SocietyDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;


@FeignClient(name = "module2")
public interface Module2Microservice {
    @GetMapping("/api/getResidentByJWT")
    ResidentDto getResidentByJWT(@RequestHeader("Authorization") String jwt);
    @GetMapping("/api/get-admin")
    SocietyDto getAdminDetails(@RequestHeader("Authorization") String jwt);
}


