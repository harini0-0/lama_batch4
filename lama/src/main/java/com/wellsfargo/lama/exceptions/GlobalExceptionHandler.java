package com.wellsfargo.lama.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse> resourceNotFoundExceptionHandler(ResourceNotFoundException ex) {
		String message = ex.getMessage();
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(ResourceAlreadyExistsException.class)
	public ResponseEntity<ApiResponse> resourceAlreadyExistsException(ResourceAlreadyExistsException ex){
		String messageString = ex.getMessage();
		ApiResponse apiResponse = new ApiResponse(messageString, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(PasswordNotMatchingExeption.class)
	public ResponseEntity<ApiResponse> PasswordNotMatchingException(PasswordNotMatchingExeption ex){
		String messageString = ex.getMsg();
		ApiResponse apiResponse = new ApiResponse(messageString, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.CONFLICT);
	}
}
