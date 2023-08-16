package com.wellsfargo.lama.services;

import java.util.Optional;

import com.wellsfargo.lama.Dto.UserLoginDto;
import com.wellsfargo.lama.entities.UserLogin;

public interface UserLoginService {
	public UserLoginDto checkLogin(UserLoginDto userLoginDto);
}
