package com.infosys.module2.repository;

import com.infosys.module2.model.Flat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlatRepository extends JpaRepository<Flat,Long> {
    Flat findByFlatNo(String flatNo);
}
