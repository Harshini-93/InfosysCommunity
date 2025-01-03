package com.infosys.module3.service;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.EventInfo;
import com.infosys.module3.model.Event;
import com.infosys.module3.response.EventResponse;

import java.util.List;

public interface EventService {
    public EventResponse addEventInfo(String jwt, EventInfo eventInfo) throws Module3Exception;
    public List<Event> getEventList() throws Module3Exception;
    public EventResponse editEvent(Long eventId, EventInfo eventInfo) throws Module3Exception;
    public EventResponse removeEvent(Long eventId) throws Module3Exception;
    public Event getEvent(Long eventId) throws Module3Exception;
}
