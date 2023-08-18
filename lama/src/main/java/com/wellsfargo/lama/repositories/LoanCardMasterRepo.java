package com.wellsfargo.lama.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.lama.entities.LoanCardMaster;

public interface LoanCardMasterRepo extends JpaRepository<LoanCardMaster, Integer> {
	Optional<LoanCardMaster> findByLoanId(int loanId);
	Optional<LoanCardMaster> findByLoanType(String loanType);
}
