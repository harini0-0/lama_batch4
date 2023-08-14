package com.wellsfargo.lama.services;

import java.util.List;

import com.wellsfargo.lama.Dto.EmployeeMasterDto;

public interface EmployeeMasterService {
	
	
	List<EmployeeMasterDto> getAllEmployee();
	
	EmployeeMasterDto addEmployee(EmployeeMasterDto employeeMasterDto);
	
	EmployeeMasterDto updateEmployee(EmployeeMasterDto employeeMasterDto, Integer employee_id);
	
	void deleteEmployee(String employee_id);

}
