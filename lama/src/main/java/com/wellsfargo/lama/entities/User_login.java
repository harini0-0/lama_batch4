package com.wellsfargo.lama.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "user_login")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User_login {
	
	@Id
	@Column(unique = true, name = "user_id", nullable = false)
	private int userId;
	
	@Column(nullable = false)
	private String password;
	
	private int role;
}

