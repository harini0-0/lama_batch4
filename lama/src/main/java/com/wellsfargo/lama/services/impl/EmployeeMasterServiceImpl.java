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

import com.wellsfargo.lama.Dto.EmployeeMasterDto;
import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.repositories.EmployeeMasterRepo;
import com.wellsfargo.lama.services.EmployeeMasterService;

@Service
public class EmployeeMasterServiceImpl implements EmployeeMasterService{
	
	@Autowired
	private EmployeeMasterRepo employeeMasterRepo;
	
	
	private ModelMapper modelMapper;

	@Override
	public List<EmployeeMasterDto> getAllEmployee() {
		List<EmployeeMaster> employees = employeeMasterRepo.findAll();
//		employees.forEach(p -> System.out.println(p.getDateOfBirth()));		
		
		modelMapper = new ModelMapper();
		
		List<EmployeeMasterDto> employeesDto = employees.stream().map(employee -> modelMapper.map(employee, EmployeeMasterDto.class)).collect(Collectors.toList());
		
		return employeesDto;
	}

	@Override
	public EmployeeMasterDto addEmployee(EmployeeMasterDto employeeMasterDto) {
		
		modelMapper = new ModelMapper();
		
		EmployeeMaster employeeMaster = modelMapper.map(employeeMasterDto, EmployeeMaster.class);
		
		EmployeeMaster newEmployeeMaster = employeeMasterRepo.save(employeeMaster);
		
		return modelMapper.map(newEmployeeMaster, EmployeeMasterDto.class);

	}

	@Override
	public EmployeeMasterDto updateEmployee(EmployeeMasterDto employeeMasterDto, Integer employee_id) {
//		Optional<EmployeeMaster> opt = employeeMasterRepo.findById(employee_id);
//		EmployeeMaster employeeMaster = opt.get();
//		
//		employeeMaster.setEmployeeId(employeeMasterDto.getEmployeeId());
//		employeeMaster.setEmployeeName(employeeMasterDto.getEmployeeName());
//		employeeMaster.setDesignation(employeeMasterDto.getDesignation());
//		employeeMaster.setDepartment(employeeMasterDto.getDepartment());
//		employeeMaster.setGender(employeeMasterDto.getGender());
//		employeeMaster.setDateOfBirth(employeeMasterDto.getDateOfBirth());
//		employeeMaster.setDateOfJoining(employeeMasterDto.getDateOfJoining());
		
		
		
		
		
		return null;
	}

	@Override
	public void deleteEmployee(String employee_id) {
		// TODO Auto-generated method stub
		
	}
	
	
}
