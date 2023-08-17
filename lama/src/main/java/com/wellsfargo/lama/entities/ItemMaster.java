package com.wellsfargo.lama.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Getter
@Setter
@Table(name = "item_master")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ItemMaster {
	

	@Id
	@Column(nullable = false, length = 6, name = "item_id")
	private int itemId;
	
	@Column(nullable = false, length = 25, name = "item_description")
	private String itemDescription;
	
	@Column(nullable = false, name = "issue_status")
	private char issueStatus;
	
	@Column(nullable = false, length = 25, name = "item_make")
	private String itemMake;
	
	@Column(nullable = false, length = 20, name = "item_category")
	private String itemCategory;
	
	@Column(nullable = false, name = "item_valuation")
	private int itemValuation;
	
	@JsonProperty
	@JsonIgnore
	@JsonManagedReference
	@OneToMany(mappedBy = "itemMaster", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE,
			CascadeType.DETACH, CascadeType.REFRESH })
	private List<EmployeeIssueDetails> employeeIssueDetails;
}
