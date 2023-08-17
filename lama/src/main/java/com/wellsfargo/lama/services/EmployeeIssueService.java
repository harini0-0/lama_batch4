package com.wellsfargo.lama.services;

import com.wellsfargo.lama.Ui.EmployeeIssueRequest;
import com.wellsfargo.lama.Ui.EmployeeIssueResponse;

public interface EmployeeIssueService {
	 EmployeeIssueResponse applyLoan(EmployeeIssueRequest employeeIssueRequest);
}
