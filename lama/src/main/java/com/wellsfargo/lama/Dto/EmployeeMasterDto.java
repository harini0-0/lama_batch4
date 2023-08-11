package com.wellsfargo.lama.Dto;

import java.util.Date;

import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeMasterDto {

	@NotEmpty
	@Id
	private int employeeId;

	@NotEmpty
	@Size(max = 20, message = "employee's name can be maximum of 20 characters")
	private String employeeName;
	
	@NotEmpty
	@Size(max = 25, message = "employee's designation can be maximum of 25 characters")
	private String designation;

	@NotEmpty
	@Size(max = 20, message = "employee's department can be maximum of 25 characters")
	private String department;
	
	@NotEmpty
	private char gender;
	
	@NotEmpty
	private Date dateOfBirth;
	
	@NotEmpty
	private Date dateOfJoining;
}
