package com.wellsfargo.lama.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.EmployeeMaster;

public interface EmployeeMasterRepo extends JpaRepository<EmployeeMaster, Integer> {
	Optional<EmployeeMaster> findByEmployeeId(int employeeId);
}
