package com.wellsfargo.lama.exceptions;


public class ApiException extends RuntimeException{

	public ApiException() {
		super();
	}

	public ApiException(String message) {
		super(message);
	}
}
