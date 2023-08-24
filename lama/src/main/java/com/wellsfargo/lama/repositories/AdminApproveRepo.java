package com.wellsfargo.lama.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.lama.entities.EmployeeIssueDetails;

public interface AdminApproveRepo extends JpaRepository<EmployeeIssueDetails, Integer> {
	
	@Query(value = "select * from employee_issue_details u where u.employee_id = :employeeId and u.item = :itemId",nativeQuery = true)
	Optional<List<EmployeeIssueDetails>> findByEmployeeIdAndItemId(int employeeId, int itemId);
	
//	@Query(value = "select * from employee_issue_details",nativeQuery = true)
//	List<EmployeeIssueDetails> findAllIssues();
}
