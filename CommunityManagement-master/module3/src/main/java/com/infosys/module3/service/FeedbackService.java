package com.infosys.module3.service;


import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.FeedbackInfo;
import com.infosys.module3.model.Feedback;
import com.infosys.module3.response.FeedbackResponse;

import java.util.List;

public interface FeedbackService {
    public FeedbackResponse submitFeedback(FeedbackInfo feedbackInfo, Long eventId) throws Module3Exception;
    public List<Feedback> getFeedback(Long eventId) throws Module3Exception;
}
