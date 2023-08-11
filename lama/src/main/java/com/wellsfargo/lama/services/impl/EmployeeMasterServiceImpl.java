package com.wellsfargo.lama.services.impl;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.EmployeeMasterDto;
import com.wellsfargo.lama.entities.Employee_master;
import com.wellsfargo.lama.repositories.EmployeeMasterRepo;
import com.wellsfargo.lama.services.EmployeeMasterService;

@Service
public class EmployeeMasterServiceImpl implements EmployeeMasterService{
	
	@Autowired
	private EmployeeMasterRepo employeeMasterRepo;
	
	private ModelMapper modelMapper;

	@Override
	public List<EmployeeMasterDto> getAllEmployee() {
		List<Employee_master> employees = employeeMasterRepo.findAll();
		
		modelMapper = new ModelMapper();
		
		List<EmployeeMasterDto> employeesDto = employees.stream().map(employee -> modelMapper.map(employee, EmployeeMasterDto.class)).collect(Collectors.toList());
		
		return employeesDto;
	}

	@Override
	public EmployeeMasterDto addEmployee(EmployeeMasterDto employeeMasterDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EmployeeMasterDto updateEmployee(EmployeeMasterDto employeeMasterDto, String employee_id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteEmployee(String employee_id) {
		// TODO Auto-generated method stub
		
	}
	
	
}
