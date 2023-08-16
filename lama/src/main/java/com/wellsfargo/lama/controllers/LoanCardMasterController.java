package com.wellsfargo.lama.controllers;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Dto.LoanCardMasterDto;
import com.wellsfargo.lama.services.LoanCardMasterService;

@RestController
@RequestMapping("/api/v1/admin/loan")
public class LoanCardMasterController {

	@Autowired
	private LoanCardMasterService loanCardMasterService;
	
	@PostMapping("/")
	public ResponseEntity<LoanCardMasterDto> createLoan(@Valid @RequestBody LoanCardMasterDto loanCardMasterDto){
	//	System.out.println(employeeMasterDto.getDateOfBirth());
		LoanCardMasterDto addLoanDt = loanCardMasterService.addLoan(loanCardMasterDto);
//		EmployeeMasterDto addEmployeeDt = null;
		return new ResponseEntity<LoanCardMasterDto>(addLoanDt, HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<LoanCardMasterDto>> getAllEmployees(){
		List<LoanCardMasterDto> allLoanDtos = loanCardMasterService.getAllLoan();
		
		return new ResponseEntity<List<LoanCardMasterDto>>(allLoanDtos, HttpStatus.OK);
	}	
	
}
