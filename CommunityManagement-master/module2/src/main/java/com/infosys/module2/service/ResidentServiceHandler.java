package com.infosys.module2.service;

import com.infosys.module2.exception.Module2Exception;
import com.infosys.module2.info.ResidentDetailsInfo;
import com.infosys.module2.security.JwtProvider;
import com.infosys.module2.info.ResidentInfo;
import com.infosys.module2.microService.Module1Microservice;
import com.infosys.module2.model.Flat;
import com.infosys.module2.model.Resident;
import com.infosys.module2.model.Society;
import com.infosys.module2.repository.FlatRepository;
import com.infosys.module2.repository.ResidentRepository;
import com.infosys.module2.repository.SocietyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Pattern;

@Service
public class ResidentServiceHandler implements ResidentService {

    @Autowired
    ResidentRepository residentRepository;
    @Autowired
    Module1Microservice module1Microservice;
    @Autowired
    FlatService flatService;
    @Autowired
    SocietyService societyService;
    @Autowired
    SocietyRepository societyRepository;
    @Autowired
    FlatRepository flatRepository;

    @Override
    public String residentRegistration(ResidentInfo residentInfo, String jwt) throws Module2Exception {
        Flat flat = flatService.getFlat(residentInfo.getFlatNo());
        String email = module1Microservice.getEmailFromJWT(jwt);
        Society society = societyService.getSocietyByName(residentInfo.getSocietyName());
        Resident residentObj = new Resident();
        residentObj.setName(residentInfo.getName());

        String number = residentInfo.getPhoneNo();
        String regex = "^(\\+\\d{1,3}[- ]?)?\\d{10}$";

        Pattern pattern = Pattern.compile(regex);
        if (!pattern.matcher(number).matches()) {
            throw new Module2Exception("The provided phone number format is not valid.");
        }

        residentObj.setPhoneNo(residentInfo.getPhoneNo());
        residentObj.setFlatNo(residentInfo.getFlatNo());

        if (!society.getPostal().equals(residentInfo.getPostal())) {
            throw new Module2Exception("The postal code does not match the specified society.");
        }

        residentObj.setPostal(residentInfo.getPostal());
        residentObj.setEmail(email);
        residentObj.setSocietyId(society.getSocietyId());
        residentObj.setFlatId(flat.getFlatId());
        residentObj.setRole("Resident");

        Resident savedResident = residentRepository.save(residentObj);
        flat.setOccupied(true);
        flatRepository.save(flat);

        if (savedResident.getResidentId() == null) {
            throw new Module2Exception("Registration process failed. Please try again.");
        }

        return "Resident successfully registered.";
    }

    @Override
    public List<Resident> getResidentList() {
        return residentRepository.findAll();
    }

    @Override
    public Resident getResident(String jwt) {
        String email = JwtProvider.getEmailFromJwtToken(jwt);
        return residentRepository.findByEmail(email);
    }

    @Override
    public ResidentDetailsInfo getResidentDetails(String jwt) {
        Resident resident = getResident(jwt);
        ResidentDetailsInfo res = new ResidentDetailsInfo();

        res.setName(resident.getName());
        res.setPhoneNo(resident.getPhoneNo());
        res.setPostal(resident.getPostal());
        res.setFlatNo(resident.getFlatNo());

        Society society = societyService.getSocietyById(resident.getSocietyId());
        res.setSocietyName(society.getSocietyName());
        res.setEmail(resident.getEmail());

        return res;
    }
}
