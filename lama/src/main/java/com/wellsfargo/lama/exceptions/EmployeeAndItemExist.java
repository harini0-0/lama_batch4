package com.wellsfargo.lama.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeAndItemExist extends RuntimeException {
	String msg;
	int fieldId;
	
	public EmployeeAndItemExist(String msg, int fieldId) {
		super(msg + fieldId);
		
		this.msg = msg;
		this.fieldId = fieldId;
	}
}
