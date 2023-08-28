package com.wellsfargo.lama.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wellsfargo.lama.entities.EmployeeIssueDetails;

public interface EmployeeIssueRepo extends JpaRepository<EmployeeIssueDetails, Integer> {
	@Query("Select t from EmployeeIssueDetails t where t.employeeMaster.employeeId=?1")
	Optional<List<EmployeeIssueDetails>> findEmployeeItems(int employeeId);
	@Query(value = "select count(*) from Employee_Issue_Details empIss where empIss.employee_Id = :empId and empIss.item_Id = :itemId",
			nativeQuery = true)

	int employeeItemQuery(int empId, int itemId);
	
	
}
