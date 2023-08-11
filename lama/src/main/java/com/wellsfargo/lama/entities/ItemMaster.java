package com.wellsfargo.lama.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
}
