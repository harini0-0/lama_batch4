package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.EmployeeCardDetails;

public interface EmployeeCardRepo extends JpaRepository<EmployeeCardDetails, Integer> {

}
