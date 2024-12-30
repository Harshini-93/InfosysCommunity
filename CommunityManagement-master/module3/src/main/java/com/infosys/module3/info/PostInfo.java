package com.infosys.module3.info;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostInfo {
    private String content;
    private String title;
    private String postImage;
}
