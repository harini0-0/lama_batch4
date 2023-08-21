package com.wellsfargo.lama.Ui;

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
public class EmployeeIntegrationRequest {
	private int employeeId;
	private int itemId;
	private String loanType;
}
