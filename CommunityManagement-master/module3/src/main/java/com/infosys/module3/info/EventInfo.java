package com.infosys.module3.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventInfo {
    private String eventName;
    private Date eventDate;
    private String eventDetails;
    private String eventImage;
}
