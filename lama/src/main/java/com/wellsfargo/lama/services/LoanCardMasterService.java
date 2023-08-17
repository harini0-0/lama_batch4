package com.wellsfargo.lama.services;

import java.util.List;

import com.wellsfargo.lama.Dto.LoanCardMasterDto;

public interface LoanCardMasterService {

List<LoanCardMasterDto> getAllLoan();
	
	LoanCardMasterDto getByLoanId(int LoanId);
	
	LoanCardMasterDto addLoan(LoanCardMasterDto loanCardMasterDto);
	
	LoanCardMasterDto updateLoan(LoanCardMasterDto loanCardMasterDto, int loanId);
	
	void deleteLoan(int loanId);
}
