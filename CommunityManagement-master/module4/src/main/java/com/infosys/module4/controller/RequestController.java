package com.infosys.module4.controller;

import com.infosys.module4.info.RequestDto;
import com.infosys.module4.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class RequestController {

    @Autowired
    RequestService requestService;
    @PostMapping("/sendRequest")
    public String sendRequest(@RequestHeader("Authorization") String jwt,@RequestBody RequestDto requestDto){
        return requestService.sendRequest(requestDto);
    }
}
