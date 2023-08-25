package com.wellsfargo.lama.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.AdminApproveDto;
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
	public List<AdminApproveDto> getAllIssues() {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		List<EmployeeIssueDetails> issueDetails = adminApproveRepo.findAll();
		List<AdminApproveDto> adminApproveDtoList = new ArrayList<>();
		
		for(int i=0;i<issueDetails.size(); i++) {
			EmployeeIssueDetails employeeIssueDetails = issueDetails.get(i);
			
			AdminApproveDto adminApproveDto = new AdminApproveDto();
			
			adminApproveDto.setEmployeeId(employeeIssueDetails.getEmployeeMaster().getEmployeeId());
			adminApproveDto.setItemId(employeeIssueDetails.getItemMaster().getItemId());
			adminApproveDto.setIssueId(employeeIssueDetails.getIssueId());
			adminApproveDto.setDurationInMonths(employeeIssueDetails.getDurationInMonths());
			adminApproveDto.setIssueDate(employeeIssueDetails.getIssueDate());
			adminApproveDto.setIsApproved(employeeIssueDetails.getIsApproved());
			
			adminApproveDtoList.add(adminApproveDto);
		}
		
//		System.out.println(issueDtos.get(0).getIssueDate());
//		List<EmployeeIssueDto> issueDt = new ArrayList<>();
		
		return adminApproveDtoList;
	}

	@Override
	public AdminApproveDto adminApproveLoan(AdminApproveDto employeeIssueDto) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		int employeeId = employeeIssueDto.getEmployeeId();
		int itemId = employeeIssueDto.getItemId();
//		System.out.println(employeeId + " " + itemId);
		List<EmployeeIssueDetails> employeeIssueDetails = adminApproveRepo.findByEmployeeIdAndItemId(employeeId, itemId).orElseThrow(() -> new ResourceNotFoundException("EmployeeIssueDetails", "employeeId and itemId", 0));
//		System.out.println(employeeIssueDetails.size());
		if(employeeIssueDetails.size() > 1)
			throw new ApiException("There exists multiple Entries of the same employee and item");
		EmployeeIssueDetails employeeIssue = employeeIssueDetails.get(0);
		employeeIssue.setIsApproved(employeeIssueDto.getIsApproved());
		EmployeeIssueDetails savedIssue = adminApproveRepo.save(employeeIssue);
			
		AdminApproveDto adminApproveDto = new AdminApproveDto();
		adminApproveDto.setIssueId(savedIssue.getIssueId());
		adminApproveDto.setEmployeeId(savedIssue.getEmployeeMaster().getEmployeeId());
		adminApproveDto.setItemId(savedIssue.getItemMaster().getItemId());
		adminApproveDto.setDurationInMonths(savedIssue.getDurationInMonths());
		adminApproveDto.setIssueDate(savedIssue.getIssueDate());
		adminApproveDto.setIsApproved(savedIssue.getIsApproved());
		
		return adminApproveDto;
	}

}
