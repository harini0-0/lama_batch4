package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.UserLogin;

public interface UserLoginRepo extends JpaRepository<UserLogin, Integer>{
	

}
