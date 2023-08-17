package com.wellsfargo.lama.services.impl;

import java.time.LocalDate;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.Ui.EmployeeIssueRequest;
import com.wellsfargo.lama.Ui.EmployeeIssueResponse;
import com.wellsfargo.lama.entities.EmployeeIssueDetails;
import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.ItemMaster;
import com.wellsfargo.lama.entities.LoanCardMaster;
import com.wellsfargo.lama.repositories.EmployeeIssueRepo;
import com.wellsfargo.lama.repositories.EmployeeMasterRepo;
import com.wellsfargo.lama.repositories.ItemMasterRepo;
import com.wellsfargo.lama.repositories.LoanCardMasterRepo;
import com.wellsfargo.lama.services.EmployeeIssueService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeIssueServiceImpl implements EmployeeIssueService{
	@Autowired
	private EmployeeIssueRepo employeeIssueRepo;
	@Autowired
	private LoanCardMasterRepo loanCardMasterRepo;
	@Autowired
	private EmployeeMasterRepo employeeMasterRepo;
	@Autowired
	private ItemMasterRepo itemMasterRepo;
	
	private final ModelMapper modelMapper;
	
	public EmployeeIssueDto applyLoan(EmployeeIssueRequest employeeIssueRequest) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
//		EmployeeIssueDto employeeIssueDto = modelMapper.map(employeeIssueRequest, EmployeeIssueDto.class);
		EmployeeIssueDto employeeIssueDto = new EmployeeIssueDto(0, null, null, null, null, 0);
		
		int employeeId = employeeIssueRequest.getEmployeeId();
		int itemId = employeeIssueRequest.getItemId();
		
		EmployeeMaster employeeMaster = employeeMasterRepo.findByEmployeeId(employeeId).orElse(null);
	
//		System.out.println(employeeMaster.getDateOfBirth());
		ItemMaster itemMaster = itemMasterRepo.findByItemId(itemId).orElse(null);
		
//		System.out.println(itemMaster);
		
		employeeIssueDto.setEmployeeMaster(employeeMaster);
		employeeIssueDto.setItemMaster(itemMaster);
		
		LocalDate currentDate = java.time.LocalDate.now();
		employeeIssueDto.setIssueDate(currentDate.toString());
		
//		System.out.println(currentDate.toString());
		
		Optional<LoanCardMaster> loanObj = loanCardMasterRepo.findByLoanType(employeeIssueRequest.getLoanType());
		String durationInMonths = loanObj.get().getDurationInMonths();
		employeeIssueDto.setDurationInMonths(durationInMonths);
		
		employeeIssueDto.setIsApproved(0);
//		
		EmployeeIssueDetails employeeIssueDetails = modelMapper.map(employeeIssueDto, EmployeeIssueDetails.class);
		EmployeeIssueDetails newEmployeeIssueDetails = employeeIssueRepo.save(employeeIssueDetails);
		return modelMapper.map(newEmployeeIssueDetails, EmployeeIssueDto.class);
//		return null;
	}
}
