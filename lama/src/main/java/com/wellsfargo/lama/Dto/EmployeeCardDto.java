package com.wellsfargo.lama.Dto;

import java.util.Date;

import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.ItemMaster;
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
public class EmployeeCardDto {
	private int id;
	private String cardIssueDate;
	private EmployeeMaster employeeMaster;
	private LoanCardMaster loanCardMaster;
}
