package com.wellsfargo.lama.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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

@Entity
@Table(name = "employee_card_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeCardDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "card_issue_date", nullable = false)
	private Date cardIssueDate;
	
	
//	Dropped the previously made employee master table, added the jsonbackreferences and built the code
	@JsonProperty
	@JsonIgnore
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH,
			CascadeType.REFRESH })
	@JoinColumn(name = "employee_id")
	private EmployeeMaster employeeMaster;
	
//	Dropped the previously made loan_card_master table, added the jsonbackreferences and built the code
	@JsonProperty
	@JsonIgnore
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH,
			CascadeType.REFRESH })
	@JoinColumn(name = "loan_id")
	private LoanCardMaster loanCardMaster;
}
