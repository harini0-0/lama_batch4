package com.wellsfargo.lama.services.impl;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.UserLoginDto;
import com.wellsfargo.lama.entities.UserLogin;
import com.wellsfargo.lama.repositories.UserLoginRepo;
import com.wellsfargo.lama.services.UserLoginService;

@Service
class UserLoginServiceImpl implements UserLoginService{
	
	@Autowired
	private UserLoginRepo UserLoginRepo;
	private ModelMapper modelMapper= new ModelMapper();

	@Override
	public UserLoginDto checkLogin(UserLoginDto userLoginDto) {
		// TODO Auto-generated method stub
		Optional<UserLogin>optional =  UserLoginRepo.findById(userLoginDto.getUserId());
		UserLogin user = optional.get();

		if(user!=null) {
			if(user.getPassword() == userLoginDto.getPasswordString()) {
				return modelMapper.map(user, UserLoginDto.class);
			}
		}
		return modelMapper.map(user, UserLoginDto.class);
	}
	
}
