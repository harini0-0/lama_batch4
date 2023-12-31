package com.wellsfargo.lama.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "employee_master")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class EmployeeMaster {
	
	

	@Id
	@Column(name = "employee_id",nullable = false)
	private int employeeId;
	
	@Column(name = "employee_name",nullable = false, length = 20)
	private String employeeName;
	
	@Column(name = "designation",nullable = false, length = 25)
	private String designation;

	@Column(name = "department",nullable = false, length = 25)
	private String department;
	
	@Column(nullable = false)
	private char gender;
	
	@Column(name = "date_of_birth",nullable = false)
	private String dateOfBirth;
	
	@Column(name = "date_of_joining",nullable = false)
	private String dateOfJoining;
	
	@JsonProperty
	@JsonIgnore
	@JsonManagedReference
	@OneToMany(mappedBy = "employeeMaster", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
	private List<EmployeeIssueDetails> employeeIssueDetails;

	@JsonProperty
	@JsonIgnore
	@JsonManagedReference
	@OneToMany(mappedBy = "employeeMaster", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
	List<EmployeeCardDetails> employeeCardDetails;

	
}
