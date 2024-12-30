package com.infosys.module4.service;

import com.infosys.module4.info.VendorDto;
import com.infosys.module4.model.Vendor;

import java.util.List;

public interface VendorService {
    public Vendor addVendor(String jwt,VendorDto vendorDto);
    public List<Vendor> getAllVendors();
}
