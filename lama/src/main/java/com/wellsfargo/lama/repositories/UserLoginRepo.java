package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.User_login;

public interface UserLoginRepo extends JpaRepository<User_login, Integer>{
	

}
