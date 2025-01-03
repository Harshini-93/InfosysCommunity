package com.infosys.module2.service;


import com.infosys.module2.exception.Module2Exception;
import com.infosys.module2.model.Flat;
import com.infosys.module2.repository.FlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlatServiceHandler implements FlatService{
    @Autowired
    FlatRepository flatRepository;

    @Override
    public Flat addFlatInfo(Flat flat) {
        return flatRepository.save(flat);
    }

    @Override
    public Flat getFlat(String flatNo) throws Module2Exception {
        Flat flat=flatRepository.findByFlatNo(flatNo);
        if (flat!=null){
            return flat;
        }
        throw new Module2Exception("Error: Flat does not exist");
    }

    @Override
    public List<Flat> getFlatList() {
        return flatRepository.findAll();
    }
}
