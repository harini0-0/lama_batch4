package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{

}
