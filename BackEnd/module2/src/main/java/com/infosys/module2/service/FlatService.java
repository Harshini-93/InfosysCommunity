package com.infosys.module2.service;

import com.infosys.module2.exception.Module2Exception;
import com.infosys.module2.model.Flat;

import java.util.List;

public interface FlatService {
    Flat addFlatInfo(Flat flat);
    Flat getFlat(String flatNo) throws Module2Exception;
    List<Flat> getFlatList();
}
