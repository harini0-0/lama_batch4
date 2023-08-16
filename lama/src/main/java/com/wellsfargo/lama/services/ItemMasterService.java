package com.wellsfargo.lama.services;

import java.util.List;

import com.wellsfargo.lama.entities.ItemMaster;

public interface ItemMasterService {
	List<ItemMaster> getAllItems();
	
	ItemMaster addItems(ItemMaster item);
}
