package com.infosys.module3.service;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.NoticeInfo;
import com.infosys.module3.info.SocietyInfo;
import com.infosys.module3.microService.Module2Microservice;
import com.infosys.module3.model.Notice;
import com.infosys.module3.repository.NoticeRepository;
import com.infosys.module3.response.NoticeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoticeServiceHandler implements NoticeService {

    @Autowired
    NoticeRepository noticeRepository;

    @Autowired
    Module2Microservice module2Microservice;

    @Override
    public NoticeResponse addNoticeInfo(String jwt, NoticeInfo noticeInfo) throws Module3Exception {
        SocietyInfo society = module2Microservice.getAdminDetails(jwt);
        Notice noticeObj = new Notice();
        noticeObj.setHeading(noticeInfo.getHeading());
        noticeObj.setContent(noticeInfo.getContent());
        noticeObj.setDatePosted(noticeInfo.getDatePosted());
        noticeObj.setNoticeImage(noticeInfo.getNoticeImage());
        noticeObj.setSocietyId(society.getSocietyId());
        Notice savedNotice = noticeRepository.save(noticeObj);
        if (savedNotice.getNoticeId() != null) {
            return new NoticeResponse(savedNotice, "Notice created successfully.");
        }
        throw new Module3Exception("Failed to create notice.");
    }

    @Override
    public List<Notice> getNoticeList() throws Module3Exception {
        return noticeRepository.findAll();
    }

    @Override
    public NoticeResponse editNotice(Long noticeId, NoticeInfo noticeInfo) throws Module3Exception {
        Optional<Notice> notice = noticeRepository.findById(noticeId);
        if (notice.isPresent()) {
            Notice existingNotice = notice.get();

            if (!existingNotice.getHeading().equals(noticeInfo.getHeading())) {
                existingNotice.setHeading(noticeInfo.getHeading());
            }
            if (!existingNotice.getContent().equals(noticeInfo.getContent())) {
                existingNotice.setContent(noticeInfo.getContent());
            }
            if (!existingNotice.getDatePosted().equals(noticeInfo.getDatePosted())) {
                existingNotice.setDatePosted(noticeInfo.getDatePosted());
            }
            if (!existingNotice.getNoticeImage().equals(noticeInfo.getNoticeImage())) {
                existingNotice.setNoticeImage(noticeInfo.getNoticeImage());
            }

            Notice updatedNotice = noticeRepository.save(existingNotice);
            if (updatedNotice.getNoticeId() != null) {
                return new NoticeResponse(updatedNotice, "Notice updated successfully.");
            }
            throw new Module3Exception("Failed to update notice.");
        }
        throw new Module3Exception("Notice not found.");
    }

    @Override
    public NoticeResponse removeNotice(Long noticeId) throws Module3Exception {
        if (!noticeRepository.existsById(noticeId)) {
            throw new Module3Exception("Notice not found.");
        }
        noticeRepository.deleteById(noticeId);
        return new NoticeResponse(null, "Notice deleted successfully.");
    }

    @Override
    public Notice getNotice(Long noticeId) throws Module3Exception {
        Optional<Notice> notice = noticeRepository.findById(noticeId);
        if (notice.isPresent()) {
            return notice.get();
        }
        throw new Module3Exception("Notice not found.");
    }
}
