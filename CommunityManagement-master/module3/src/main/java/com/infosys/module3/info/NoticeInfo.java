package com.infosys.module3.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoticeInfo {
    private String heading;
    private String content;
    private Date datePosted;
    private String noticeImage;
}
