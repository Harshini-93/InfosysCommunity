package com.infosys.module4.service;

import com.infosys.module4.info.RequestDto;
import com.infosys.module4.exception.RequestException;
import com.infosys.module4.model.Request;
import com.infosys.module4.model.Vendor;
import com.infosys.module4.repository.RequestRepository;
import com.infosys.module4.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RequestServiceHandler implements RequestService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private RequestRepository requestRepository;

    @Override
    public String sendRequest(RequestDto requestDto) throws RequestException {
        Optional<Vendor> vendorOptional = vendorRepository.findById(requestDto.getVendorId());
        if (vendorOptional.isEmpty()) {
            throw new RequestException("Vendor with ID " + requestDto.getVendorId() + " not found.");
        }
        Vendor vendor = vendorOptional.get();
        String emailBody = createRequestBody(requestDto);
        String subject = vendor.getService();
        String recipientEmail = vendor.getEmail();
        boolean isEmailSent = sendEmail(recipientEmail, emailBody, subject);

        if (isEmailSent) {
            Request newRequest = new Request();
            newRequest.setAddress(requestDto.getAddress());
            newRequest.setDescription(requestDto.getDescription());
            newRequest.setStatus("Open");
            newRequest.setVendorId(requestDto.getVendorId());

            requestRepository.save(newRequest);
            return "Request sent and saved successfully.";
        } else {
            throw new RequestException("Failed to send the email. Request not saved.");
        }
    }

    private boolean sendEmail(String toEmail, String body, String subject) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("ponakaushasri@gmail.com");
            message.setTo(toEmail);
            message.setText(body);
            message.setSubject(subject);
            javaMailSender.send(message);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private String createRequestBody(RequestDto requestDto) {
        return "Request Details:\n" +
                "Address: " + requestDto.getAddress() + "\n" +
                "Description: " + requestDto.getDescription() + "\n" +
                "Phone No: " + requestDto.getPhoneNo();
    }
}
