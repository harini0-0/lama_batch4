package com.wellsfargo.lama.Dto;

import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.LoanCardMaster;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ItemMasterDto {
	private int itemId;
	private String itemDescription;
	private char issueStatus;
	private String itemMake;
	private String itemCategory;
	private int itemValuation;
}
