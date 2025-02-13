package com.infosys.module4.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VendorDto {
    private String name;
    private String service;
    private String company;
    private String phoneNo;
    private String email;
}
