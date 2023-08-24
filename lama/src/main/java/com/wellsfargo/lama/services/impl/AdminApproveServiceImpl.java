package com.wellsfargo.lama.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.EmployeeIssueDto;
import com.wellsfargo.lama.Dto.EmployeeMasterDto;
import com.wellsfargo.lama.entities.EmployeeIssueDetails;
import com.wellsfargo.lama.exceptions.ApiException;
import com.wellsfargo.lama.exceptions.ResourceNotFoundException;
import com.wellsfargo.lama.repositories.AdminApproveRepo;
import com.wellsfargo.lama.services.AdminApproveService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminApproveServiceImpl implements AdminApproveService{
	@Autowired
	private AdminApproveRepo adminApproveRepo;
	
	private ModelMapper modelMapper;
	
	@Override
	public List<EmployeeIssueDto> getAllIssues() {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		List<EmployeeIssueDetails> issueDetails = adminApproveRepo.findAll();
		List<EmployeeIssueDto> issueDtos = issueDetails.stream().map(issueDetail -> modelMapper.map(issueDetail, EmployeeIssueDto.class)).collect(Collectors.toList());
		
		
		return issueDtos;
	}

	@Override
	public EmployeeIssueDto adminApproveLoan(EmployeeIssueDto employeeIssueDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		int employeeId = employeeIssueDto.getEmployeeMaster().getEmployeeId();
		int itemId = employeeIssueDto.getItemMaster().getItemId();
		List<EmployeeIssueDetails> employeeIssueDetails = adminApproveRepo.findByEmployeeIdAndItemId(employeeId, itemId).orElseThrow(() -> new ResourceNotFoundException("EmployeeIssueDetails", "employeeId and itemId", employeeIssueDto.getIssueId()));
		
		if(employeeIssueDetails.size() > 1)
			throw new ApiException("There exists multiple Entries of the same employee and item");
		EmployeeIssueDetails employeeIssue = employeeIssueDetails.get(0);
		employeeIssue.setIsApproved(employeeIssueDto.getIsApproved());
		EmployeeIssueDetails savedIssue = adminApproveRepo.save(employeeIssue);
		
		EmployeeIssueDto ret = modelMapper.map(savedIssue, EmployeeIssueDto.class);
		return ret;
	}

}
