package com.wellsfargo.lama.Dto;

import java.util.Date;

import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

public class EmployeeMasterDto {

	@NotNull
	@Id
	private int employeeId;

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(String dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public EmployeeMasterDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public EmployeeMasterDto(@NotEmpty int employeeId,
			@NotEmpty @Size(max = 20, message = "employee's name can be maximum of 20 characters") String employeeName,
			@NotEmpty @Size(max = 25, message = "employee's designation can be maximum of 25 characters") String designation,
			@NotEmpty @Size(max = 20, message = "employee's department can be maximum of 25 characters") String department,
			@NotEmpty char gender, @NotEmpty String dateOfBirth, @NotEmpty String dateOfJoining) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.designation = designation;
		this.department = department;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.dateOfJoining = dateOfJoining;
	}

	@NotEmpty
	@Size(max = 20, message = "employee's name can be maximum of 20 characters")
	private String employeeName;
	
	@NotEmpty
	@Size(max = 25, message = "employee's designation can be maximum of 25 characters")
	private String designation;

	@NotEmpty
	@Size(max = 20, message = "employee's department can be maximum of 25 characters")
	private String department;
	
	@NotNull
	private char gender;
	
	@NotEmpty
	private String dateOfBirth;
	
	@NotEmpty
	private String dateOfJoining;
}
