package com.wellsfargo.lama.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.UnsatisfiedServletRequestParameterException;

import java.rmi.ServerException;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.wellsfargo.lama.services.UserLoginService;
import com.wellsfargo.lama.services.impl.UserDetailsImpl;

import lombok.AllArgsConstructor;

import com.wellsfargo.lama.Dto.UserLoginDto;
import com.wellsfargo.lama.Ui.JwtResponse;
import com.wellsfargo.lama.Ui.UserRequest;
import com.wellsfargo.lama.Ui.UserResponse;
import com.wellsfargo.lama.entities.ERole;
import com.wellsfargo.lama.entities.Role;
import com.wellsfargo.lama.entities.UserLogin;
import com.wellsfargo.lama.exceptions.ApiException;
import com.wellsfargo.lama.exceptions.ApiResponse;
import com.wellsfargo.lama.exceptions.ResourceNotFoundException;
import com.wellsfargo.lama.repositories.RoleRepository;
import com.wellsfargo.lama.repositories.UserLoginRepo;
import com.wellsfargo.lama.security.jwt.JwtUtils;


@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/auth")
@AllArgsConstructor
public class UserLoginController{
	
	@Autowired
	private UserLoginService userLoginService;

	private ModelMapper modelMapper;
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserLoginRepo userLoginRepo;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@CrossOrigin("*")
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody UserRequest loginRequest) {
		
		try {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUserId(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());
		
		
//		Set<Role> roles_add = new HashSet<>();
//		
//		Role userRole = roleRepository.findByName(ERole.ROLE_USER).orElseThrow(() -> new ResourceNotFoundException("ROLE_USER", "Role Name", 0));
//		roles_add.add(userRole);
//		
		int userId = loginRequest.getUserId();
		
		UserLogin userLogin = userLoginRepo.findById(userId).orElse(null);
		System.out.println(userLogin.getRoles());
//		userLogin.setRoles(roles_add);
//		userLoginRepo.save(userLogin);

		return ResponseEntity.ok(
				new JwtResponse(jwt, userDetails.getUserId(), roles));
		}
		catch(Exception e) {
			throw new ApiException("Invalid User Id or Password");
		}
	}


//	@PostMapping("/")
//	public ResponseEntity<UserResponse> Login(@RequestBody UserRequest userRequest) {
//		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
//		UserLoginDto userLoginDto = modelMapper.map(userRequest, UserLoginDto.class);
//		UserLoginDto responseDto = userLoginService.checkLogin(userLoginDto);
//		UserResponse userResponse = modelMapper.map(responseDto, UserResponse.class);
//		return new ResponseEntity<UserResponse>(userResponse, HttpStatus.OK);
//	}
	
}
