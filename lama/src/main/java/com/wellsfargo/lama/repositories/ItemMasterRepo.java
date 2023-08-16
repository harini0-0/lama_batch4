package com.wellsfargo.lama.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.ItemMaster;

public interface ItemMasterRepo extends JpaRepository<ItemMaster, Integer> {
	
	Optional<ItemMaster> findByItemId(int itemId);
}
