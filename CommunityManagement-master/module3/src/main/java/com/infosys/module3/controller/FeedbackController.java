package com.infosys.module3.controller;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.FeedbackInfo;
import com.infosys.module3.model.Feedback;
import com.infosys.module3.response.FeedbackResponse;
import com.infosys.module3.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class FeedbackController {

    @Autowired
    FeedbackService feedbackService;
    @PostMapping("/submitFeedback/{eventId}")
    public FeedbackResponse submitFeedback(@RequestHeader("Authorization") String jwt, @RequestBody FeedbackInfo feedbackInfo, @PathVariable Long eventId) throws Module3Exception {
        return feedbackService.submitFeedback(feedbackInfo,eventId);
    }
    @GetMapping("/getFeedback/{eventId}")
    public List<Feedback> getFeedback(@RequestHeader("Authorization") String jwt,@PathVariable Long eventId) throws Module3Exception {
        return feedbackService.getFeedback(eventId);
    }
}
