package com.infosys.module3.controller;


import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.EventInfo;
import com.infosys.module3.model.Event;
import com.infosys.module3.response.EventResponse;
import com.infosys.module3.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class EventController {

    @Autowired
    EventService eventService;
    @PostMapping("/addEventInfo")
    public EventResponse addEventInfo(@RequestHeader("Authorization") String jwt,@RequestBody EventInfo eventInfo) throws Module3Exception {
        return eventService.addEventInfo(jwt, eventInfo);
    }

    @GetMapping("/getEventList")
    public List<Event> getEventList(@RequestHeader("Authorization") String jwt) throws Module3Exception {
        return eventService.getEventList();
    }

    @PutMapping("editEvent/{eventId}")
    public EventResponse editEvent(@RequestHeader("Authorization") String jwt, @RequestBody EventInfo eventInfo, @PathVariable Long eventId) throws Module3Exception {
        return eventService.editEvent(eventId, eventInfo);
    }

    @DeleteMapping("/removeEvent/{eventId}")
    public EventResponse removeEvent(@RequestHeader("Authorization") String jwt,@PathVariable Long eventId) throws Module3Exception {
        return eventService.removeEvent(eventId);
    }

    @GetMapping("/getEvent/{eventId}")
    public Event getEvent(@RequestHeader("Authorization") String jwt,@PathVariable Long eventId){
        try {
            return eventService.getEvent(eventId);
        } catch (com.infosys.module3.exception.Module3Exception e) {
            throw new RuntimeException(e);
        }
    }
}
