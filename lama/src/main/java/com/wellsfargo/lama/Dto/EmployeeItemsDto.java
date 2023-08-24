package com.wellsfargo.lama.Dto;

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
public class EmployeeItemsDto {
	private int issueId;
	private int itemId;
	private String itemDescription;
	private char issueStatus;
	private String itemMake;
	private String itemCategory;
	private int itemValuation;
}

