package com.wellsfargo.lama.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@Table(name ="employee_issue_details")
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeIssueDetails {
	@Id
	@Column(nullable = false, name = "issue_id")
	private int issueId;
	
	@JsonProperty
	@JsonIgnore
	@JsonBackReference
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "employee_id")
	private EmployeeMaster employeeMaster;
	
	@JsonProperty
	@JsonIgnore
	@JsonBackReference
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "item_id")
	private ItemMaster itemMaster;
	
	@Column(nullable = false, name = "issue_date")
	private Date issueDate;
	
	@Column(nullable = false, name = "return_date")
	private Date returnDate;
	
	@Column(nullable = false, name = "is_approved")
	private int isApproved;
}
