package com.wellsfargo.lama.services;

import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.Ui.EmployeeIntegrationRequest;

public interface EmployeeIntegrationService {
	 EmployeeIssueDto applyLoan(EmployeeIntegrationRequest employeeIntegrationRequest);
}
