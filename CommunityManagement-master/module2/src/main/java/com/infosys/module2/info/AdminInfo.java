package com.infosys.module2.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminInfo {
    private String name;
    private String phoneNo;
    private String postal;
    private String societyName;
    private String societyAddress;
    private String city;
    private String district;
}
