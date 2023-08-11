package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.Employee_master;

public interface EmployeeMasterRepo extends JpaRepository<Employee_master, Integer> {

}
