package com.wellsfargo.lama.controllers;

import java.sql.Date;
import java.time.LocalDate;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Ui.EmployeeIssueRequest;
import com.wellsfargo.lama.Ui.EmployeeIssueResponse;
import com.wellsfargo.lama.services.EmployeeIssueService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/v1/employee/applyloan")
@AllArgsConstructor
public class EmployeeIssueDetails {
	@Autowired
	private EmployeeIssueService employeeIssueService;
	
	@PostMapping
	public ResponseEntity<EmployeeIssueResponse> applyLoan(@RequestBody EmployeeIssueRequest employeeIssueRequest) {
		return ResponseEntity.status(HttpStatus.CREATED).body(employeeIssueService.applyLoan(employeeIssueRequest));
	}
	
}
