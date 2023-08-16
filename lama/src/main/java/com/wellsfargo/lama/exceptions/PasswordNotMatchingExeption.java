package com.wellsfargo.lama.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class PasswordNotMatchingExeption extends RuntimeException {
	private String msg;

	
}
