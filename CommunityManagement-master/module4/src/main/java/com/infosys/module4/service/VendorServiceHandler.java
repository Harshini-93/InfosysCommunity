package com.infosys.module4.service;

import com.infosys.module4.info.SocietyDto;
import com.infosys.module4.info.VendorDto;
import com.infosys.module4.exception.VendorException;
import com.infosys.module4.microService.Module2Microservice;
import com.infosys.module4.model.Vendor;
import com.infosys.module4.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorServiceHandler implements VendorService{
    @Autowired
    VendorRepository vendorRepository;
    @Autowired
    Module2Microservice module2Microservice;
    @Override
    public Vendor addVendor(String jwt,VendorDto vendorDto) {
        SocietyDto society= module2Microservice.getAdminDetails(jwt);
        Vendor newVendor=new Vendor();
        newVendor.setName(vendorDto.getName());
        newVendor.setCompany(vendorDto.getCompany());
        newVendor.setService(vendorDto.getService());
        newVendor.setPhoneNo(vendorDto.getPhoneNo());
        newVendor.setEmail(vendorDto.getEmail());
        newVendor.setSocietyId(society.getSocietyId());
        Vendor savedVendor=vendorRepository.save(newVendor);
        if (savedVendor.getVendorId()!=null){
            return savedVendor;
        }
        throw new VendorException("unable to add vendor");
    }

    @Override
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }
}
