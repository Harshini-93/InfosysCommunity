package com.infosys.module2.controller;

import com.infosys.module2.exception.Module2Exception;
import com.infosys.module2.info.FlatInfo;
import com.infosys.module2.model.Flat;
import com.infosys.module2.service.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FlatController {

    @Autowired
    FlatService flatService;
    @PostMapping("/addFlatInfo")
    public Flat addFlatInfo(@RequestHeader("Authorization") String jwt,@RequestBody FlatInfo flatInfo){
        Flat flat=new Flat();
        flat.setFlatNo(flatInfo.getFlatNo());
        flat.setSocietyId(flatInfo.getSocietyId());
        flat.setOccupied(false);
        flat.setRent(flatInfo.getRent());
        return flatService.addFlatInfo(flat);
    }
    @GetMapping("/getFlatList")
    public List<Flat> getFlatList(){
        return flatService.getFlatList();
    }

    @GetMapping("/getFlat")
    public Flat getFlat(@RequestHeader("Authorization") String jwt,@RequestParam String flatNo) throws Module2Exception {
        return flatService.getFlat(flatNo);
    }
}
