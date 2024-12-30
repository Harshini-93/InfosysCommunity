package com.infosys.module3.response;

import com.infosys.module3.model.Notice;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoticeResponse {
    private Notice notice;
    private String message;
}
