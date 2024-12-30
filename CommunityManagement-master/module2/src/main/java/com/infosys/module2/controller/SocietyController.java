package com.infosys.module2.controller;

import com.infosys.module2.exception.Module2Exception;
import com.infosys.module2.info.AdminInfo;
import com.infosys.module2.model.Society;
import com.infosys.module2.service.SocietyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SocietyController {

    @Autowired
    SocietyService societyService;
    @PostMapping("/societyRegister")
    public String residentRegistration(@RequestHeader("Authorization") String jwt, @RequestBody AdminInfo adminInfo) throws Module2Exception {
        return societyService.societyRegistration(adminInfo,jwt);

    }

    @GetMapping("/getSocietyList")
    public List<Society> getSocietyList(@RequestHeader("Authorization") String jwt){
        return societyService.getSocietyList();
    }

    @GetMapping("/getAdminDetails")
    public Society getAdminDetails(@RequestHeader("Authorization") String jwt){
        return societyService.getAdminDetails(jwt);
    }
}
