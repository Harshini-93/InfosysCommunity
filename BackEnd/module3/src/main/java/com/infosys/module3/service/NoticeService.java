package com.infosys.module3.service;



import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.NoticeInfo;
import com.infosys.module3.model.Notice;
import com.infosys.module3.response.NoticeResponse;

import java.util.List;

public interface NoticeService {
    public NoticeResponse addNoticeInfo(String jwt, NoticeInfo noticeInfo) throws Module3Exception;
    public List<Notice> getNoticeList() throws Module3Exception;
    public NoticeResponse editNotice(Long noticeId, NoticeInfo noticeInfo) throws Module3Exception;
    public NoticeResponse removeNotice(Long noticeId) throws Module3Exception;
    public Notice getNotice(Long noticeId) throws Module3Exception;
}
