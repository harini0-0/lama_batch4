package com.wellsfargo.lama.services;

import java.util.List;

import com.wellsfargo.lama.Dto.EmployeeItemsDto;
import com.wellsfargo.lama.Dto.ItemMasterDto;
import com.wellsfargo.lama.entities.ItemMaster;

public interface ItemMasterService {
	List<ItemMasterDto> getAllItems();
	List<EmployeeItemsDto> getEmployeeItems(int EmployeeId);
	
	ItemMasterDto getItem(int itemId);
	
	void addItems(ItemMaster item);
	
	ItemMasterDto udateItem(ItemMaster item, int itemId);
	
	void deleteItem(int itemId);
}
