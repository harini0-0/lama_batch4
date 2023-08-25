package com.wellsfargo.lama.services.impl;

import java.time.LocalDate;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.EmployeeCardDto;
import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.Ui.EmployeeIntegrationRequest;
import com.wellsfargo.lama.entities.EmployeeCardDetails;
import com.wellsfargo.lama.entities.EmployeeIssueDetails;
import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.ItemMaster;
import com.wellsfargo.lama.entities.LoanCardMaster;
import com.wellsfargo.lama.exceptions.ItemNotFoundException;
import com.wellsfargo.lama.exceptions.ResourceAlreadyExistsException;
import com.wellsfargo.lama.repositories.EmployeeCardRepo;
import com.wellsfargo.lama.repositories.EmployeeIssueRepo;
import com.wellsfargo.lama.repositories.EmployeeMasterRepo;
import com.wellsfargo.lama.repositories.ItemMasterRepo;
import com.wellsfargo.lama.repositories.LoanCardMasterRepo;
import com.wellsfargo.lama.services.EmployeeIntegrationService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeIntegrationServiceImpl implements EmployeeIntegrationService{
	@Autowired
	private EmployeeIssueRepo employeeIssueRepo;
	@Autowired
	private LoanCardMasterRepo loanCardMasterRepo;
	@Autowired
	private EmployeeMasterRepo employeeMasterRepo;
	@Autowired
	private ItemMasterRepo itemMasterRepo;
	@Autowired
	private EmployeeCardRepo employeeCardRepo;
	
	private final ModelMapper modelMapper;
	
	public EmployeeIssueDto applyLoan(EmployeeIntegrationRequest employeeIntegrationRequest) {
		
		
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
//		EmployeeIssueDto employeeIssueDto = modelMapper.map(employeeIntegrationRequest, EmployeeIssueDto.class);
		EmployeeIssueDto employeeIssueDto = new EmployeeIssueDto(0, null, null, null, null, 0);
		
		int employeeId = employeeIntegrationRequest.getEmployeeId();
		int itemId = employeeIntegrationRequest.getItemId();
		
		EmployeeMaster employeeMaster = employeeMasterRepo.findByEmployeeId(employeeId).orElse(null);;
		if(employeeMaster != null) {
			throw new ResourceAlreadyExistsException("EmployeeMaster", "Employee Id", employeeId);
		}
	
		System.out.println(employeeMaster.getDateOfBirth());
		ItemMaster itemMaster = itemMasterRepo.findByItemId(itemId).orElseThrow(
				() -> new ItemNotFoundException("Item Master with Item Id not found", itemId));
	
		System.out.println(itemMaster.getIssueStatus());
		
		employeeIssueDto.setEmployeeMaster(employeeMaster);
		employeeIssueDto.setItemMaster(itemMaster);
		
		LocalDate currentDate = java.time.LocalDate.now();
		employeeIssueDto.setIssueDate(currentDate.toString());
		
		System.out.println(currentDate.toString());
		
		Optional<LoanCardMaster> loanObj = loanCardMasterRepo.findByLoanType(employeeIntegrationRequest.getLoanType());
		String durationInMonths = loanObj.get().getDurationInMonths();
		employeeIssueDto.setDurationInMonths(durationInMonths);
		
	
//		
		employeeIssueDto.setIsApproved(0);
//		
		EmployeeIssueDetails employeeIssueDetails = modelMapper.map(employeeIssueDto, EmployeeIssueDetails.class);
		EmployeeIssueDetails newEmployeeIssueDetails = employeeIssueRepo.save(employeeIssueDetails);
		
		EmployeeCardDto employeeCardDto = new EmployeeCardDto(0, null, null, null);
		employeeCardDto.setCardIssueDate(currentDate.toString());
		employeeCardDto.setEmployeeMaster(employeeMaster);
		employeeCardDto.setLoanCardMaster(loanObj.get());
		EmployeeCardDetails employeeCardDetails = modelMapper.map(employeeCardDto, EmployeeCardDetails.class);
		EmployeeCardDetails newEmployeeCardDetails = employeeCardRepo.save(employeeCardDetails);
//		System.out.println(newEmployeeCardDetails);
//		return modelMapper.map(newEmployeeIssueDetails, EmployeeIssueDto.class);
		return null;
	}
}
