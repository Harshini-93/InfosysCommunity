package com.infosys.module3.service;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.EventInfo;
import com.infosys.module3.info.SocietyInfo;
import com.infosys.module3.microService.Module2Microservice;
import com.infosys.module3.model.Event;
import com.infosys.module3.repository.EventRepository;
import com.infosys.module3.response.EventResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceHandler implements EventService {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    Module2Microservice module2Microservice;

    @Override
    public EventResponse addEventInfo(String jwt, EventInfo eventInfo) throws Module3Exception {
        SocietyInfo society = module2Microservice.getAdminDetails(jwt);
        Event eventObj = new Event();
        eventObj.setEventName(eventInfo.getEventName());
        eventObj.setEventDate(eventInfo.getEventDate());
        eventObj.setEventDetails(eventInfo.getEventDetails());
        eventObj.setEventImage(eventInfo.getEventImage());
        eventObj.setSocietyId(society.getSocietyId());
        Event savedEvent = eventRepository.save(eventObj);
        if (savedEvent.getEventId() != null) {
            return new EventResponse(savedEvent, "Event has been successfully created.");
        }
        throw new Module3Exception("Failed to create the event.");
    }

    @Override
    public List<Event> getEventList() {
        return eventRepository.findAll();
    }

    @Override
    public EventResponse editEvent(Long eventId, EventInfo eventInfo) throws Module3Exception {
        Optional<Event> event = eventRepository.findById(eventId);
        if (event.isPresent()) {
            Event existingEvent = event.get();

            if (!existingEvent.getEventName().equals(eventInfo.getEventName())) {
                existingEvent.setEventName(eventInfo.getEventName());
            }
            if (!existingEvent.getEventDate().equals(eventInfo.getEventDate())) {
                existingEvent.setEventDate(eventInfo.getEventDate());
            }
            if (!existingEvent.getEventDetails().equals(eventInfo.getEventDetails())) {
                existingEvent.setEventDetails(eventInfo.getEventDetails());
            }
            if (!existingEvent.getEventImage().equals(eventInfo.getEventImage())) {
                existingEvent.setEventImage(eventInfo.getEventImage());
            }
            Event updatedEvent = eventRepository.save(existingEvent);
            if (updatedEvent.getEventId() != null) {
                return new EventResponse(updatedEvent, "Event has been successfully updated.");
            }
            throw new Module3Exception("Failed to update the event.");
        }
        throw new Module3Exception("Event not found for updating.");
    }

    @Override
    public EventResponse removeEvent(Long eventId) throws Module3Exception {
        if (!eventRepository.existsById(eventId)) {
            throw new Module3Exception("Event could not be found.");
        }
        eventRepository.deleteById(eventId);
        return new EventResponse(null, "Event has been successfully deleted.");
    }

    @Override
    public Event getEvent(Long eventId) throws Module3Exception {
        Optional<Event> event = eventRepository.findById(eventId);
        if (event.isPresent()) {
            return event.get();
        }
        throw new Module3Exception("Specified event does not exist.");
    }
}
