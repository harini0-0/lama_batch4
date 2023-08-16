package com.wellsfargo.lama.services;

import java.util.List;

import com.wellsfargo.lama.Dto.LoanCardMasterDto;

public class LoanCardMasterService {
List<LoanCardMasterDto> getAllLoan();
	
	LoanCardMasterDto addLoan(LoanCardMasterDto loanCardMasterDto);
	
	LoanCardMasterDto updateLoan(LoanCardMasterDto loanCardMasterDto, Integer loan_id);
	
	void deleteLoan(String loan_id);
}
