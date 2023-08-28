package com.wellsfargo.lama.services.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.EmployeeMasterDto;
import com.wellsfargo.lama.entities.ERole;
import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.Role;
import com.wellsfargo.lama.entities.UserLogin;
import com.wellsfargo.lama.exceptions.ResourceAlreadyExistsException;
import com.wellsfargo.lama.exceptions.ResourceNotFoundException;
import com.wellsfargo.lama.repositories.EmployeeMasterRepo;
import com.wellsfargo.lama.repositories.RoleRepository;
import com.wellsfargo.lama.repositories.UserLoginRepo;
import com.wellsfargo.lama.services.EmployeeMasterService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class EmployeeMasterServiceImpl implements EmployeeMasterService{
	
	@Autowired
	private EmployeeMasterRepo employeeMasterRepo;
	
	@Autowired
	private UserLoginRepo userLoginRepo;
	
	@Autowired
	private RoleRepository roleRepository;
	
	private PasswordEncoder passwordEncoder;
	
	private ModelMapper modelMapper;

	@Override
	public List<EmployeeMasterDto> getAllEmployee() {
		
		List<EmployeeMaster> employees = employeeMasterRepo.findAll();
//		employees.forEach(p -> System.out.println(p.getDateOfBirth()));		
		
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		List<EmployeeMasterDto> employeesDto = employees.stream().map(employee -> modelMapper.map(employee, EmployeeMasterDto.class)).collect(Collectors.toList());
		
		
		return employeesDto;
	}

	@Override
	public EmployeeMasterDto addEmployee(EmployeeMasterDto employeeMasterDto) {
		
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		int employeeId = employeeMasterDto.getEmployeeId();
		
		EmployeeMaster existedEmployeeMaster = employeeMasterRepo.findByEmployeeId(employeeId).orElse(null);
		if(existedEmployeeMaster != null) {
			throw new ResourceAlreadyExistsException("EmployeeMaster", "Employee Id", employeeId);
		}
		
		EmployeeMaster employeeMaster = modelMapper.map(employeeMasterDto, EmployeeMaster.class);
		
		EmployeeMaster newEmployeeMaster = employeeMasterRepo.save(employeeMaster);
		
		String defaultPassword = passwordEncoder.encode("123456");
		Set<Role> roles_add = new HashSet<>();
		
		Role userRole = roleRepository.findByName(ERole.ROLE_USER).orElseThrow(() -> new ResourceNotFoundException("ERole", "Role Name", 0));
		roles_add.add(userRole);
		
		UserLogin userLogin = new UserLogin();
		userLogin.setUserId(employeeId);
		userLogin.setPassword(defaultPassword);
		userLogin.setRoles(roles_add);
		
		userLoginRepo.save(userLogin);
		
		return modelMapper.map(newEmployeeMaster, EmployeeMasterDto.class);

	}

	@Override
	public EmployeeMasterDto updateEmployee(EmployeeMasterDto employeeMasterDto, int employeeId) {
		
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		EmployeeMaster employeeMaster = employeeMasterRepo.findByEmployeeId(employeeId).orElseThrow(() -> new ResourceNotFoundException("EmployeeMaster", "Employee Id", employeeId));
		
		
		employeeMaster.setEmployeeId(employeeMasterDto.getEmployeeId());
		employeeMaster.setEmployeeName(employeeMasterDto.getEmployeeName());
		employeeMaster.setDesignation(employeeMasterDto.getDesignation());
		employeeMaster.setDepartment(employeeMasterDto.getDepartment());
		employeeMaster.setGender(employeeMasterDto.getGender());
		employeeMaster.setDateOfBirth(employeeMasterDto.getDateOfBirth());
		employeeMaster.setDateOfJoining(employeeMasterDto.getDateOfJoining());
		
		EmployeeMaster updatedEmployeeMaster = employeeMasterRepo.save(employeeMaster);

//		return null;
		return modelMapper.map(updatedEmployeeMaster, EmployeeMasterDto.class);
	}

	@Override
	public void deleteEmployee(int employeeId) {

		EmployeeMaster employeeMaster = employeeMasterRepo.findByEmployeeId(employeeId).orElseThrow(() -> new ResourceNotFoundException("EmployeeMaster", "Employee Id", employeeId));
		
		employeeMasterRepo.delete(employeeMaster);
		
	}

	@Override
	public EmployeeMasterDto getByEmployeeId(int EmployeeId) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		EmployeeMaster employeeMaster = employeeMasterRepo.findByEmployeeId(EmployeeId).orElseThrow(() -> new ResourceNotFoundException("EmployeeId", "Employee Id", EmployeeId));
		
		return modelMapper.map(employeeMaster, EmployeeMasterDto.class);
	}
	
	
}
