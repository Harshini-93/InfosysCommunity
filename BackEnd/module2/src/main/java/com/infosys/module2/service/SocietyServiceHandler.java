package com.infosys.module2.service;

import com.infosys.module2.exception.Module2Exception;
import com.infosys.module2.info.AdminInfo;
import com.infosys.module2.microService.Module1Microservice;
import com.infosys.module2.model.Society;
import com.infosys.module2.repository.SocietyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SocietyServiceHandler implements SocietyService {

    @Autowired
    SocietyRepository societyRepository;

    @Autowired
    Module1Microservice module1Microservice;

    @Override
    public String societyRegistration(AdminInfo adminInfo, String jwt) throws Module2Exception {
        Society societyObj = new Society();
        societyObj.setName(adminInfo.getName());
        societyObj.setPhoneNo(adminInfo.getPhoneNo());
        societyObj.setSocietyName(adminInfo.getSocietyName());
        societyObj.setSocietyAddress(adminInfo.getSocietyAddress());
        societyObj.setDistrict(adminInfo.getDistrict());
        societyObj.setPostal(adminInfo.getPostal());
        String email = module1Microservice.getEmailFromJWT(jwt);
        societyObj.setEmail(email);
        societyObj.setCity(adminInfo.getCity());
        societyRepository.save(societyObj);
        return "Society registration completed successfully.";
    }

    public List<Society> getSocietyList() {
        return societyRepository.findAll();
    }

    public Society getSocietyByName(String name) throws Module2Exception {
        Society society = societyRepository.findBySocietyName(name);
        if (society != null) {
            return society;
        }
        throw new Module2Exception("Specified society could not be located.");
    }

    public Society getSocietyById(Long id) {
        Optional<Society> society = societyRepository.findById(id);
        return society.orElse(null);
    }

    public Society getAdminDetails(String jwt) {
        String email = module1Microservice.getEmailFromJWT(jwt);
        return societyRepository.findByEmail(email);
    }
}
