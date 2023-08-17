package com.wellsfargo.lama.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.entities.ItemMaster;
import com.wellsfargo.lama.exceptions.ResourceAlreadyExistsException;
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
		int itemId = item.getItemId();
		ItemMaster addItem = itemMasterRepository.findByItemId(itemId).orElse(null);
		if(addItem != null) {
			throw new ResourceAlreadyExistsException("ItemMaster", "Item Id", itemId);
		}
		
		ItemMaster saveItem = itemMasterRepository.save(item);
		return saveItem;
	}
}
