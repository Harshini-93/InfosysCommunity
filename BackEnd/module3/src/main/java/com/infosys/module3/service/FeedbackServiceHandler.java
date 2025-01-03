package com.infosys.module3.service;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.FeedbackInfo;
import com.infosys.module3.model.Feedback;
import com.infosys.module3.repository.FeedbackRepository;
import com.infosys.module3.response.FeedbackResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackServiceHandler implements FeedbackService {

    @Autowired
    FeedbackRepository feedbackRepository;

    @Override
    public FeedbackResponse submitFeedback(FeedbackInfo feedbackInfo, Long eventId) throws Module3Exception {
        Feedback feedbackObj = new Feedback();
        feedbackObj.setContent(feedbackInfo.getContent());
        feedbackObj.setEventId(eventId);
        Feedback savedFeedback = feedbackRepository.save(feedbackObj);
        if (savedFeedback.getFeedbackId() != null) {
            return new FeedbackResponse(savedFeedback, "Feedback submitted successfully.");
        }
        throw new Module3Exception("Failed to add feedback.");
    }

    @Override
    public List<Feedback> getFeedback(Long eventId) throws Module3Exception {
        return feedbackRepository.findByEventId(eventId);
    }
}
