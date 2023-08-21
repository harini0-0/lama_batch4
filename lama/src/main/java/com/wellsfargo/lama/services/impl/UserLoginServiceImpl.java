package com.wellsfargo.lama.services.impl;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wellsfargo.lama.Dto.UserLoginDto;
import com.wellsfargo.lama.entities.UserLogin;
import com.wellsfargo.lama.exceptions.PasswordNotMatchingExeption;
import com.wellsfargo.lama.exceptions.ResourceNotFoundException;
import com.wellsfargo.lama.repositories.UserLoginRepo;
import com.wellsfargo.lama.services.UserLoginService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserLoginServiceImpl implements UserLoginService, UserDetailsService{	
	
	
	@Autowired
	private UserLoginRepo UserLoginRepo;
	private ModelMapper modelMapper;
	
	

	@Override
	public UserLoginDto checkLogin(UserLoginDto userLoginDto) {
		// TODO Auto-generated method stub
		UserLogin user =  UserLoginRepo.findById(userLoginDto.getUserId()).orElse(null);
		
		String userPassword = userLoginDto.getPassword();
		
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

		if(user!=null) {
			String actualPasswordString = user.getPassword();
			if(userPassword.compareTo(actualPasswordString) ==0) {
				return modelMapper.map(user, UserLoginDto.class);
			}
			else {
				throw new PasswordNotMatchingExeption("Your password not matching");
			}
		}
		else {
			throw new ResourceNotFoundException("userLogin","userId",userLoginDto.getUserId());
		}
	}



	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		int userId = Integer.parseInt(username);
		UserLogin user = UserLoginRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("userLogin","userId",userId));
		
		return UserDetailsImpl.build(user);
	}
	
}
