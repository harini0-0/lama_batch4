package com.wellsfargo.lama.Dto;

import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.ItemMaster;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminApproveDto {
	private int issueId;
	private int employeeId;
	private int itemId;
	private String issueDate;
	private String durationInMonths;
	private int isApproved;

}
