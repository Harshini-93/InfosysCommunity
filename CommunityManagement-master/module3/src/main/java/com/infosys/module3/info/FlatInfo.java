package com.infosys.module3.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlatInfo {
    private Long flatId;
    private String flatNo;
    private boolean occupied;
    private Long rent;
    private Long societyId;
}
