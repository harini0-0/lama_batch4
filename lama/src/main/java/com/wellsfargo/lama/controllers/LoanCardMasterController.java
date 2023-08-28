package com.wellsfargo.lama.controllers;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Dto.LoanCardMasterDto;
import com.wellsfargo.lama.exceptions.ApiResponse;
import com.wellsfargo.lama.services.LoanCardMasterService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin/loan")
public class LoanCardMasterController {

	@Autowired
	private LoanCardMasterService loanCardMasterService;
	
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/")
	public ResponseEntity<LoanCardMasterDto> createLoan(@Valid @RequestBody LoanCardMasterDto loanCardMasterDto){
	//	
		LoanCardMasterDto addLoanDt = loanCardMasterService.addLoan(loanCardMasterDto);
//		EmployeeMasterDto addEmployeeDt = null;
		return new ResponseEntity<LoanCardMasterDto>(addLoanDt, HttpStatus.CREATED);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
	//@PreAuthorize("hasRole('USER')")
	@GetMapping("/")
	public ResponseEntity<List<LoanCardMasterDto>> getAllLoans(){
		List<LoanCardMasterDto> allLoanDtos = loanCardMasterService.getAllLoan();
		
		return new ResponseEntity<List<LoanCardMasterDto>>(allLoanDtos, HttpStatus.OK);
	}	
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/{loanId}")
	public ResponseEntity<LoanCardMasterDto> getLoanId(@PathVariable int loanId){
		LoanCardMasterDto byLoanId = loanCardMasterService.getByLoanId(loanId);
		return new ResponseEntity<LoanCardMasterDto>(byLoanId, HttpStatus.OK);
	}
	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/{loanId}")
	public ResponseEntity<LoanCardMasterDto> updateLoan(@Validated @RequestBody LoanCardMasterDto loanCardMasterDto, @PathVariable Integer loanId){
		LoanCardMasterDto updateLoanDto = loanCardMasterService.updateLoan(loanCardMasterDto, loanId);
		return new ResponseEntity<LoanCardMasterDto>(updateLoanDto, HttpStatus.OK);
	}
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{loanId}")
	public ApiResponse deleteLoan(@PathVariable int loanId) {
		loanCardMasterService.deleteLoan(loanId);
		return new ApiResponse("Post is successfully deleted !!", true);
	}
	
}
