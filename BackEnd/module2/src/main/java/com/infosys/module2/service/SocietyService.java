package com.infosys.module2.service;

import com.infosys.module2.exception.Module2Exception;
import com.infosys.module2.info.AdminInfo;
import com.infosys.module2.model.Society;

import java.util.List;

public interface SocietyService {
    public String societyRegistration(AdminInfo adminInfo, String jwt) throws Module2Exception;
    public List<Society> getSocietyList();
    public Society getSocietyByName(String name) throws Module2Exception;
    public Society getSocietyById(Long id);
    public Society getAdminDetails(String jwt);
}
