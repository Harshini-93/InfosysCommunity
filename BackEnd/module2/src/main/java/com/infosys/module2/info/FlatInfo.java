package com.infosys.module2.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlatInfo {
    private String flatNo;
    private Long societyId;
    private Long rent;
}
