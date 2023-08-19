package com.wellsfargo.lama.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.lama.entities.ItemMaster;
import com.wellsfargo.lama.services.ItemMasterService;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/admin/items")
public class ItemMasterController {
	@Autowired
	private ItemMasterService itemMasterService;
	
	@GetMapping
	public ResponseEntity<List<ItemMaster>> getAllItems() {
		return new ResponseEntity<List<ItemMaster>>(itemMasterService.getAllItems(), HttpStatus.OK);
	}
	
	@PostMapping
	public ItemMaster createItems(@RequestBody ItemMaster item) {

		return itemMasterService.addItems(item);
	}
	
}
