package com.wellsfargo.lama.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> b27c202016fce7390eb956e177cca01c70d77c54
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonBackReference;
>>>>>>> b27c202016fce7390eb956e177cca01c70d77c54
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employee_master")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
	private Date dateOfBirth;
	
	@Column(name = "date_of_joining",nullable = false)
	private Date dateOfJoining;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "employeeMaster", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
<<<<<<< HEAD
	private List<EmployeeIssueDetails> employeeIssueDetails;
=======
	List<EmployeeCardDetails> employeeCardDetails;
>>>>>>> b27c202016fce7390eb956e177cca01c70d77c54
	
}
