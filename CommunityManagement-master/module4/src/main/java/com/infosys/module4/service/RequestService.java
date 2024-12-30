package com.infosys.module4.service;

import com.infosys.module4.info.RequestDto;
import com.infosys.module4.exception.RequestException;

public interface RequestService {
    public String sendRequest(RequestDto requestDto) throws RequestException;
}
