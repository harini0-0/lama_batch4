package com.wellsfargo.lama.Dto;

import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.ItemMaster;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeIssueDto {
	private int issueId;
	private EmployeeMaster employeeMaster;
	private ItemMaster itemMaster;
	private String issueDate;
	private String durationInMonths;
	private int isApproved;
}
