package com.wellsfargo.lama.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.entities.ItemMaster;
import com.wellsfargo.lama.repositories.ItemMasterRepo;
import com.wellsfargo.lama.services.ItemMasterService;

@Service
public class ItemMasterServiceImpl implements ItemMasterService {
	@Autowired
	private ItemMasterRepo itemMasterRepository;
	
	public List<ItemMaster> getAllItems() {
		List<ItemMaster> items = itemMasterRepository.findAll();
		return items;
	}
	
	public ItemMaster addItems(ItemMaster item) {
		ItemMaster saveItem = itemMasterRepository.save(item);
		return saveItem;
	}
}
