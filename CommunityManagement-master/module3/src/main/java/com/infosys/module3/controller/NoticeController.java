package com.infosys.module3.controller;

import com.infosys.module3.exception.Module3Exception;
import com.infosys.module3.info.NoticeInfo;
import com.infosys.module3.model.Notice;
import com.infosys.module3.response.NoticeResponse;
import com.infosys.module3.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NoticeController {
    @Autowired
    NoticeService noticeService;
    @PostMapping("/addNoticeInfo")
    public NoticeResponse addNoticeInfo(@RequestHeader("Authorization") String jwt, @RequestBody NoticeInfo noticeInfo) throws  Module3Exception {
        return noticeService.addNoticeInfo(jwt, noticeInfo);
    }

    @GetMapping("/getNoticeList")
    public List<Notice> getNoticeList(@RequestHeader("Authorization") String jwt) throws Module3Exception{
        return noticeService.getNoticeList();
    }

    @PutMapping("/editNotice/{noticeId}")
    public NoticeResponse editNotice(@RequestHeader("Authorization") String jwt, @RequestBody NoticeInfo noticeInfo, @PathVariable Long noticeId) throws Module3Exception {
        return noticeService.editNotice(noticeId, noticeInfo);
    }

    @DeleteMapping("/removeNotice/{noticeId}")
    public NoticeResponse removeNotice(@RequestHeader("Authorization") String jwt,@PathVariable Long noticeId) throws Module3Exception {
        return noticeService.removeNotice(noticeId);
    }

    @GetMapping("/getNotice/{noticeId}")
    public Notice getNotice(@RequestHeader("Authorization") String jwt,@PathVariable Long noticeId) throws Module3Exception {
        return noticeService.getNotice(noticeId);
    }
}
