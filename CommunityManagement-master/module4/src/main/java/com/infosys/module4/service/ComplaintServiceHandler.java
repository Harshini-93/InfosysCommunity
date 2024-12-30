package com.infosys.module4.service;

import com.infosys.module4.info.ComplaintDto;
import com.infosys.module4.info.ResidentDto;
import com.infosys.module4.exception.ComplaintException;
import com.infosys.module4.microService.Module2Microservice;
import com.infosys.module4.model.Complaint;
import com.infosys.module4.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComplaintServiceHandler implements ComplaintService{
    @Autowired
    Module2Microservice module2Microservice;
    @Autowired
    ComplaintRepository complaintRepository;
    @Override
    public Complaint addComplaint(String jwt, ComplaintDto complaintDto) throws ComplaintException {
        ResidentDto resident= module2Microservice.getResidentByJWT(jwt);
        Complaint newComplaint=new Complaint();
        newComplaint.setTitle(complaintDto.getTitle());
        newComplaint.setPersonName(complaintDto.getPersonName());
        newComplaint.setDescription(complaintDto.getDescription());
        newComplaint.setResidentId(resident.getResidentId());
        newComplaint.setFlatNo(resident.getFlatNo());
        newComplaint.setStatus("Open");
        newComplaint.setSocietyId(resident.getSocietyId());
        Complaint savedComplaint=complaintRepository.save(newComplaint);
        if (savedComplaint.getComplaintId()!=null){
            return savedComplaint;
        }
        throw new ComplaintException("Unable To Register Complaint");
    }

    @Override
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    @Override
    public Complaint closeComplaint(Long complaintId) {
        Optional<Complaint> complaint=complaintRepository.findById(complaintId);
        if (complaint.isPresent()){
            Complaint c=complaint.get();
            c.setStatus("Closed");
            return complaintRepository.save(c);
        }
        throw new ComplaintException("Complaint Not found");
    }

}
