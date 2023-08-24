package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.lama.entities.EmployeeIssueDetails;

public interface EmployeeIssueRepo extends JpaRepository<EmployeeIssueDetails, Integer> {
	@Query(value = "select count(*) from Employee_Issue_Details empIss where empIss.employee_Id = :empId and empIss.item_Id = :itemId",
			nativeQuery = true)

	int employeeItemQuery(int empId, int itemId);
	
	
}
