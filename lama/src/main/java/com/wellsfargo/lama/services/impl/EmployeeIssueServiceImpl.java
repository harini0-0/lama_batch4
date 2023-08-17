package com.wellsfargo.lama.services.impl;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.Ui.EmployeeIssueRequest;
import com.wellsfargo.lama.Ui.EmployeeIssueResponse;
import com.wellsfargo.lama.repositories.EmployeeIssueRepo;
import com.wellsfargo.lama.services.EmployeeIssueService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class EmployeeIssueServiceImpl implements EmployeeIssueService{
	@Autowired
	private EmployeeIssueRepo employeeIssueRepo;
	@Autowired
	private LoanCardMasterRepo loanCardMasterRepo;
	
	private final ModelMapper modelMapper;
	
	public EmployeeIssueResponse applyLoan(EmployeeIssueRequest employeeIssueRequest) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		EmployeeIssueDto employeeIssueDto = modelMapper.map(employeeIssueRequest, EmployeeIssueDto.class);
		LocalDate currentDate = java.time.LocalDate.now();
		employeeIssueDto.setIssueDate(currentDate.toString());
		LocalDate returnDate = currentDate + loanCardMasterRepo.findByLoanId(employeeIssueRequest.getItemId());
	}
}
