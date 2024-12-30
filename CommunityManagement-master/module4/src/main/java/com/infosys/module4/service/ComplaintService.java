package com.infosys.module4.service;

import com.infosys.module4.info.ComplaintDto;
import com.infosys.module4.exception.ComplaintException;
import com.infosys.module4.model.Complaint;

import java.util.List;

public interface ComplaintService {
    Complaint addComplaint(String jwt, ComplaintDto complaintDto) throws ComplaintException;
    List<Complaint> getAllComplaints();
    Complaint closeComplaint(Long complaintId);
}
