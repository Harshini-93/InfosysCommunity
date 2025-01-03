package com.infosys.module3.repository;

import com.infosys.module3.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
    public List<Feedback> findByEventId(Long eventId);
}
