package com.wellsfargo.lama.controllers;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.UnsatisfiedServletRequestParameterException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.services.UserLoginService;
import com.wellsfargo.lama.entities.UserLogin;
import com.wellsfargo.lama.Dto.UserLoginDto;
import com.wellsfargo.lama.Ui.UserRequest;
import com.wellsfargo.lama.Ui.UserResponse;


@RestController
@RequestMapping("api/v1/login")
public class UserLoginController{
	
	@Autowired
	private UserLoginService userLoginService;

	private ModelMapper modelMapper = new ModelMapper();

	@PostMapping("/")
	public ResponseEntity<UserResponse> Login(@RequestBody UserRequest userRequest) {
		UserLoginDto userLoginDto = modelMapper.map(userRequest, UserLoginDto.class);
		UserLoginDto responseDto = userLoginService.checkLogin(userLoginDto);
		UserResponse userResponse = modelMapper.map(responseDto, UserResponse.class);
		return new ResponseEntity<UserResponse>(userResponse, HttpStatus.OK);
	}
	
}
