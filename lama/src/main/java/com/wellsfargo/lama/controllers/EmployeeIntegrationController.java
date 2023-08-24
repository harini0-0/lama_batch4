package com.wellsfargo.lama.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Ui.EmployeeIntegrationRequest;
import com.wellsfargo.lama.services.EmployeeIntegrationService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/v1/employee/applyloan")
@AllArgsConstructor
public class EmployeeIntegrationController {
	@Autowired
	private EmployeeIntegrationService employeeIntegrationService;
	
	@PostMapping
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> applyLoan(@RequestBody EmployeeIntegrationRequest employeeIntegrationRequest) {
		employeeIntegrationService.applyLoan(employeeIntegrationRequest);
		return ResponseEntity.status(HttpStatus.CREATED).body("Created Successfully");
	}
	
}
