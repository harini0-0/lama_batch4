package com.wellsfargo.lama.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.services.EmployeeIntegrationService;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/dashboard")
public class DashboardController {
	@Autowired
	private EmployeeIntegrationService employeeIntegrationService;
	
	@GetMapping("/")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<Integer>> getAllRequests() {
		Integer AllRequests = employeeIntegrationService.allRequests();
		Integer approvedRequests = employeeIntegrationService.approvedRequests();
		
		List<Integer> dashboardRequests= new ArrayList<Integer>();
		dashboardRequests.add(approvedRequests);
		dashboardRequests.add(AllRequests);
		return new ResponseEntity<List<Integer>>(dashboardRequests, HttpStatus.OK);
	}
}
