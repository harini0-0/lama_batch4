package com.wellsfargo.lama.controllers;


import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.Ui.EmployeeIssueRequest;
import com.wellsfargo.lama.Ui.EmployeeIssueResponse;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/v1/employee/applyloan")
@AllArgsConstructor
public class EmployeeIssueDetails {
	private final ModelMapper modelMapper;
	
	@PostMapping
	public ResponseEntity<EmployeeIssueResponse> applyLoan(@RequestBody EmployeeIssueRequest employeeIssueRequest) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		EmployeeIssueDto employeeIssueDto = modelMapper.map(employeeIssueRequest, EmployeeIssueDto.class);
		return null;
	}
	
}
