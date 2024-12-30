package com.infosys.module2.repository;

import com.infosys.module2.model.Resident;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidentRepository extends JpaRepository<Resident,Long> {
    Resident findByEmail(String email);
}
