package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.EmployeeIssueDetails;

public interface EmployeeIssueRepo extends JpaRepository<EmployeeIssueDetails, Integer> {
	
}
