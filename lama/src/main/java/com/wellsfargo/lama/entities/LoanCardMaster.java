package com.wellsfargo.lama.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "loan_card_master")
public class LoanCardMaster {
	@Id
	@Column(name = "loan_id", nullable = false, unique = true)
	private int loanId;
	
	@Column(name = "loan_type", nullable = false)
	private String loanType;
	
	@Column(name = "duration_in_months", nullable = false)
	private Date durationInMonths;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "loanCardMaster", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
	private List<EmployeeCardDetails> employeeCardDetails;
}
