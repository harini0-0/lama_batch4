package com.wellsfargo.lama.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
public class Item_master {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false, length = 6)
	private String item_id;
	
	@Column(nullable = false, length = 25)
	private String item_description;
	
	@Column(nullable = false)
	private char issue_status;
	
	@Column(nullable = false, length = 25)
	private String item_make;
	
	@Column(nullable = false, length = 20)
	private String item_category;
	
	@Column(nullable = false)
	private int item_valuation;
}
