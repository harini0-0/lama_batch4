package com.wellsfargo.lama.services;

import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.Ui.EmployeeIssueRequest;

public interface EmployeeIssueService {
	 EmployeeIssueDto applyLoan(EmployeeIssueRequest employeeIssueRequest);
}
