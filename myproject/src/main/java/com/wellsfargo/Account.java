package com.wellsfargo;

import java.util.Random;

public class Account {
	private String name;
	private int accountId;
	private int depositAmount;
	public Account(String name, int depositAmount) {
		this.name = name;
		this.depositAmount = depositAmount;
		Random rand = new Random();
		int rand_int = rand.nextInt(1000000);
		accountId = rand_int;
	}
	
	public static void main(String args[]) {
		Account acnt = new Account("name1", 1000);
		System.out.println(acnt.name);
		System.out.println(acnt.accountId);
		System.out.println(acnt.depositAmount);
	}
	
	
}
