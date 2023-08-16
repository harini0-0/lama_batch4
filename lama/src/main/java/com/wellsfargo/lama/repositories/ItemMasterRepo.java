package com.wellsfargo.lama.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.ItemMaster;

public interface ItemMasterRepo extends JpaRepository<ItemMaster, Integer> {

}
