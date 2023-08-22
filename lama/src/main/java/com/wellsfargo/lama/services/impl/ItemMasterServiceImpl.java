package com.wellsfargo.lama.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.lama.Dto.ItemMasterDto;
import com.wellsfargo.lama.entities.ItemMaster;
import com.wellsfargo.lama.exceptions.ItemNotFoundException;
import com.wellsfargo.lama.exceptions.ResourceAlreadyExistsException;
import com.wellsfargo.lama.repositories.ItemMasterRepo;
import com.wellsfargo.lama.services.ItemMasterService;

@Service
public class ItemMasterServiceImpl implements ItemMasterService {
	@Autowired
	private ItemMasterRepo itemMasterRepo;
	private ModelMapper modelMapper;
	
	public List<ItemMasterDto> getAllItems() {
		List<ItemMaster> items = itemMasterRepo.findAll();
		List<ItemMasterDto> itemDtos = new ArrayList<ItemMasterDto>();
		
		for (int i = 0; i < items.size(); i++) {
//			ItemMasterDto itemDto = modelMapper.map(items.get(i), ItemMasterDto.class);
			
//			ItemMasterDto itemDto = modelMapper.map(items.get(i), ItemMasterDto.class);
//			itemDtos.add(itemDto);
//			System.out.println(itemDto);
			
			ItemMasterDto itemDto = new ItemMasterDto();
			itemDto.setIssueStatus(items.get(i).getIssueStatus());
			itemDto.setItemCategory(items.get(i).getItemCategory());
			itemDto.setItemDescription(items.get(i).getItemDescription());
			itemDto.setItemId(items.get(i).getItemId());
			itemDto.setItemMake(items.get(i).getItemMake());
			itemDto.setItemValuation(items.get(i).getItemValuation());
			itemDtos.add(itemDto);
		}
//		System.out.println(items.size());
//		System.out.println(items);
		return itemDtos;
//		return null;
	}
	
	public void addItems(ItemMaster item) {
		int itemId = item.getItemId();
		ItemMaster addItem = itemMasterRepo.findByItemId(itemId).orElse(null);
		if(addItem != null) {
			throw new ResourceAlreadyExistsException("ItemMaster", "Item Id", itemId);
		}
		
		itemMasterRepo.save(item);
	}
	
	public ItemMasterDto udateItem(ItemMaster item, int itemId) {
		ItemMaster itemMaster = itemMasterRepo.findByItemId(itemId).orElseThrow(
				() -> new ItemNotFoundException("Item Master with Item Id not found", itemId));
		itemMaster.setIssueStatus(item.getIssueStatus());
		itemMaster.setItemCategory(item.getItemCategory());
		itemMaster.setItemDescription(item.getItemDescription());
		itemMaster.setItemMake(item.getItemMake());
		itemMaster.setItemValuation(item.getItemValuation());
		
		ItemMaster updatedItemMaster = itemMasterRepo.save(itemMaster);
		
		ItemMasterDto itemDto = new ItemMasterDto();
		itemDto.setIssueStatus(itemMaster.getIssueStatus());
		itemDto.setItemCategory(itemMaster.getItemCategory());
		itemDto.setItemDescription(itemMaster.getItemDescription());
		itemDto.setItemId(itemMaster.getItemId());
		itemDto.setItemMake(itemMaster.getItemMake());
		itemDto.setItemValuation(itemMaster.getItemValuation());
		return itemDto;
	}
	
	public void deleteItem(int itemId) {
		ItemMaster itemMaster = itemMasterRepo.findByItemId(itemId).orElseThrow(() -> new ItemNotFoundException("Item Master with Item Id not found", itemId));
		itemMasterRepo.delete(itemMaster);
	}
}
