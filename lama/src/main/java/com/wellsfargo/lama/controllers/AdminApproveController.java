package com.wellsfargo.lama.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Dto.AdminApproveDto;
import com.wellsfargo.lama.Dto.EmployeeCardDto;
import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.services.AdminApproveService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@CrossOrigin("*")
@Getter
@Setter
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/admin/issues")
public class AdminApproveController {
	@Autowired
	private AdminApproveService adminApproveService;
	
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/")
	public ResponseEntity<AdminApproveDto> approveLoan(@RequestBody AdminApproveDto employeeIssueDto){
		AdminApproveDto adminApproveLoan = adminApproveService.adminApproveLoan(employeeIssueDto);
		return new ResponseEntity<AdminApproveDto>(adminApproveLoan, HttpStatus.OK);
	}
	
	@GetMapping("/")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<AdminApproveDto>> getAllIssueDetails(){
		List<AdminApproveDto> allIssues = adminApproveService.getAllIssues();
		System.out.println(allIssues.get(0).getIssueDate());
//		List<EmployeeIssueDto> allIssu = new ArrayList<>();
		return new ResponseEntity<List<AdminApproveDto>>(allIssues, HttpStatus.OK);
	}
}
