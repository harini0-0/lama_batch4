package com.wellsfargo.lama.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemNotFoundException extends RuntimeException {
	String msg;
	int fieldId;
	
	public ItemNotFoundException(String msg, int fieldId) {
		super(msg + ": " + Integer.toString(fieldId));
		this.msg = msg;
		this.fieldId = fieldId;
	}
}
