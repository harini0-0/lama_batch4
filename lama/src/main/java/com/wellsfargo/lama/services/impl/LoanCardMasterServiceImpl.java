package com.wellsfargo.lama.services.impl;

import java.util.ArrayList;

import java.util.Arrays;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.internal.util.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wellsfargo.lama.Dto.EmployeeMasterDto;
import com.wellsfargo.lama.Dto.LoanCardMasterDto;
import com.wellsfargo.lama.entities.EmployeeCardDetails;
import com.wellsfargo.lama.entities.EmployeeIssueDetails;
import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.LoanCardMaster;
import com.wellsfargo.lama.exceptions.ResourceAlreadyExistsException;
import com.wellsfargo.lama.exceptions.ResourceNotFoundException;
import com.wellsfargo.lama.repositories.EmployeeMasterRepo;
import com.wellsfargo.lama.repositories.LoanCardMasterRepo;
import com.wellsfargo.lama.services.LoanCardMasterService;

import lombok.Getter;
import lombok.Setter;


@Service
public class LoanCardMasterServiceImpl implements LoanCardMasterService{
	@Autowired
	private LoanCardMasterRepo loanCardMasterRepo;
	
	
	private ModelMapper modelMapper;

	@Override
	public List<LoanCardMasterDto> getAllLoan() {
		
		List<LoanCardMaster> loans = loanCardMasterRepo.findAll();
//		employees.forEach(p -> System.out.println(p.getDateOfBirth()));		
		
		modelMapper = new ModelMapper();
		
		List<LoanCardMasterDto> loansDto = loans.stream().map(loan -> modelMapper.map(loan, LoanCardMasterDto.class)).collect(Collectors.toList());
		
		return loansDto;
	}

	@Override
	public LoanCardMasterDto addLoan(LoanCardMasterDto loanCardMasterDto) {
		
		modelMapper = new ModelMapper();
		
		int loanId = loanCardMasterDto.getLoanId();
		
		LoanCardMaster existedLoanMaster = loanCardMasterRepo.findByLoanId(loanId).orElse(null);
		if(existedLoanMaster != null) {
			throw new ResourceAlreadyExistsException("LoanCardMaster", "Loan Id", loanId);
		}
		
		LoanCardMaster loanCardMaster = modelMapper.map(loanCardMasterDto, LoanCardMaster.class);
		
		LoanCardMaster newLoanCardMaster = loanCardMasterRepo.save(loanCardMaster);
		
		return modelMapper.map(newLoanCardMaster, LoanCardMasterDto.class);

	}

	@Override
	public LoanCardMasterDto updateLoan(LoanCardMasterDto loanCardMasterDto, int loanId) {
		
		modelMapper = new ModelMapper();
		
		LoanCardMaster loanCardMaster = loanCardMasterRepo.findByLoanId(loanId).orElseThrow(() -> new ResourceNotFoundException("LoanCardMaster", "Loan Id", loanId));
		
		
		loanCardMaster.setLoanId(loanCardMasterDto.getLoanId());
		loanCardMaster.setLoanType(loanCardMasterDto.getLoanType());
		loanCardMaster.setDurationInMonths(loanCardMasterDto.getDurationInMonths());
		
		LoanCardMaster updatedLoanCardMaster = loanCardMasterRepo.save(loanCardMaster);

//		return null;
		return modelMapper.map(updatedLoanCardMaster, LoanCardMasterDto.class);
	}

	@Override
	public void deleteLoan(int loanId) {

		LoanCardMaster loanCardMaster = loanCardMasterRepo.findByLoanId(loanId).orElseThrow(() -> new ResourceNotFoundException("LoanCardMaster", "Loan Id", loanId));
		
		loanCardMasterRepo.delete(loanCardMaster);
		
	}

	@Override
	public LoanCardMasterDto getByLoanId(int LoanId) {
		modelMapper = new ModelMapper();
	LoanCardMaster loanCardMaster = loanCardMasterRepo.findByLoanId(LoanId).orElseThrow(() -> new ResourceNotFoundException("LoanId", "Loan Id", LoanId));
		
		return modelMapper.map(loanCardMaster, LoanCardMasterDto.class);
	}
	


}
