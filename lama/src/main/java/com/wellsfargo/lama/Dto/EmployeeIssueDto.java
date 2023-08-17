package com.wellsfargo.lama.Dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmployeeIssueDto {
	private int issueId;
	private int employeeId;
	private int itemId;
	private String issueDate;
	private String returnDate;
	private int isApproved;
}
