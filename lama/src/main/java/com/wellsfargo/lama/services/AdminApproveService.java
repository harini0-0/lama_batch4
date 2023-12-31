package com.wellsfargo.lama.services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.AdminApproveDto;
import com.wellsfargo.lama.Dto.EmployeeIssueDto;


public interface AdminApproveService{
	List<AdminApproveDto> getAllIssues();
	List<AdminApproveDto> getUnapprovedIssueDetails();
	
	AdminApproveDto adminApproveLoan(AdminApproveDto employeeIssueDto);
}
