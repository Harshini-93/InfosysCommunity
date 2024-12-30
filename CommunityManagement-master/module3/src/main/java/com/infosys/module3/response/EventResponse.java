package com.infosys.module3.response;

import com.infosys.module3.model.Event;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventResponse {
    private Event event;
    private String message;
}
