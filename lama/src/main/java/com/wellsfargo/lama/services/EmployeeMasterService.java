package com.wellsfargo.lama.services;

import java.util.List;

import com.wellsfargo.lama.Dto.EmployeeMasterDto;

public interface EmployeeMasterService {
	
	
	List<EmployeeMasterDto> getAllEmployee();
	
	EmployeeMasterDto getByEmployeeId(int EmployeeId);
	
	EmployeeMasterDto addEmployee(EmployeeMasterDto employeeMasterDto);
	
	EmployeeMasterDto updateEmployee(EmployeeMasterDto employeeMasterDto, int employeeId);
	
	void deleteEmployee(int employeeId);

}
