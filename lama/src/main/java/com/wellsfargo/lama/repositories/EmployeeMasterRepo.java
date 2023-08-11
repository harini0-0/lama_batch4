package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.EmployeeMaster;

public interface EmployeeMasterRepo extends JpaRepository<EmployeeMaster, Integer> {
	
}
