package com.wellsfargo.lama.controllers;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Dto.EmployeeMasterDto;
import com.wellsfargo.lama.exceptions.ApiResponse;
import com.wellsfargo.lama.services.EmployeeMasterService;

@RestController
@RequestMapping("/api/v1/admin/employee")
public class EmployeeMasterController {

	@Autowired
	private EmployeeMasterService employeeMasterService;
	
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/")
	public ResponseEntity<EmployeeMasterDto> createEmployee(@Validated @RequestBody EmployeeMasterDto employeeMasterDto){
//		System.out.println(employeeMasterDto.getDateOfBirth());
		EmployeeMasterDto addEmployeeDt = employeeMasterService.addEmployee(employeeMasterDto);
//		EmployeeMasterDto addEmployeeDt = null;
		return new ResponseEntity<EmployeeMasterDto>(addEmployeeDt, HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<EmployeeMasterDto>> getAllEmployees(){
		List<EmployeeMasterDto> allEmployeeDtos = employeeMasterService.getAllEmployee();
		
		return new ResponseEntity<List<EmployeeMasterDto>>(allEmployeeDtos, HttpStatus.OK);
	}
	
	@GetMapping("/{employeeId}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<EmployeeMasterDto> getEmployeeId(@PathVariable int employeeId){
		EmployeeMasterDto byEmployeeId = employeeMasterService.getByEmployeeId(employeeId);
		return new ResponseEntity<EmployeeMasterDto>(byEmployeeId, HttpStatus.OK);
	}
	
	@PutMapping("/{employeeId}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<EmployeeMasterDto> updateEmployee(@Validated @RequestBody EmployeeMasterDto employeeMasterDto, @PathVariable Integer employeeId){
		EmployeeMasterDto updateEmployeeDto = employeeMasterService.updateEmployee(employeeMasterDto, employeeId);
		return new ResponseEntity<EmployeeMasterDto>(updateEmployeeDto, HttpStatus.OK);
	}
	
	@DeleteMapping("/{employeeId}")
	@PreAuthorize("hasRole('ADMIN')")
	public ApiResponse deleteEmployee(@PathVariable int employeeId) {
		employeeMasterService.deleteEmployee(employeeId);
		return new ApiResponse("Post is successfully deleted !!", true);
	}
	
}

