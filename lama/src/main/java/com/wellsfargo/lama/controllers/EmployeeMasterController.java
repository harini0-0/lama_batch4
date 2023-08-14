package com.wellsfargo.lama.controllers;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Dto.EmployeeMasterDto;
import com.wellsfargo.lama.services.EmployeeMasterService;

@RestController
@RequestMapping("/api/v1/admin/employee")
public class EmployeeMasterController {

	@Autowired
	private EmployeeMasterService employeeMasterService;
	
	@PostMapping("/")
	public ResponseEntity<EmployeeMasterDto> createEmployee(@Valid @RequestBody EmployeeMasterDto employeeMasterDto){
		System.out.println(employeeMasterDto.getDateOfBirth());
		EmployeeMasterDto addEmployeeDt = employeeMasterService.addEmployee(employeeMasterDto);
//		EmployeeMasterDto addEmployeeDt = null;
		return new ResponseEntity<EmployeeMasterDto>(addEmployeeDt, HttpStatus.CREATED);
	}
	
	@GetMapping("/")
	public ResponseEntity<List<EmployeeMasterDto>> getAllEmployees(){
		List<EmployeeMasterDto> allEmployeeDtos = employeeMasterService.getAllEmployee();
		
		return new ResponseEntity<List<EmployeeMasterDto>>(allEmployeeDtos, HttpStatus.OK);
	}
	
	
	
}

