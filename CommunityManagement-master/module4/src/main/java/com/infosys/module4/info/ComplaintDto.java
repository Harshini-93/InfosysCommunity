package com.infosys.module4.info;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ComplaintDto {
    private String personName;
    private String title;
    private String description;
}
