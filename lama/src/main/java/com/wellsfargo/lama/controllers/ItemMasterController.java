package com.wellsfargo.lama.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.AfterDomainEventPublication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.Dto.ItemMasterDto;
import com.wellsfargo.lama.entities.ItemMaster;
import com.wellsfargo.lama.exceptions.ApiResponse;
import com.wellsfargo.lama.services.ItemMasterService;

@RestController
@RequestMapping("api/v1/admin/items")
public class ItemMasterController {
	@Autowired
	private ItemMasterService itemMasterService;
	
	@GetMapping
	public ResponseEntity<List<ItemMasterDto>> getAllItems() {
		List<ItemMasterDto> allItems = itemMasterService.getAllItems();
//		System.out.println(allItems.size());
//		System.out.println(allItems);
//		allItems = null;
//		modelMapper.map()
//		return null;
		return new ResponseEntity<List<ItemMasterDto>>(allItems,HttpStatus.OK);
	}
	
	@PostMapping
	public ApiResponse createItems(@RequestBody ItemMaster item) {
		itemMasterService.addItems(item);
		return new ApiResponse("Post is successfully posted !!", true);
	}
	
	@PutMapping("/{itemId}")
	public ResponseEntity<ItemMasterDto> updateItem(@Validated @RequestBody ItemMaster item, @PathVariable Integer itemId) {
		return ResponseEntity.status(HttpStatus.OK).body(itemMasterService.udateItem(item, itemId));
	}
	
	@DeleteMapping("/{itemId}")
	public ApiResponse deleteItem(@PathVariable int itemId) {
		itemMasterService.deleteItem(itemId);
		return new ApiResponse("Post is successfully deleted !!", true);
	}
	
}
