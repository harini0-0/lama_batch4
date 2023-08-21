package com.wellsfargo.lama.Dto;

import java.util.Date;

import javax.persistence.Id;
import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotBlank;

import lombok.ToString;

@ToString
public class LoanCardMasterDto {

	@Id
	@Valid
	@NotNull
	private int loanId;

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}
	@NotNull
	private String loanType;
	
	@NotNull
	private String durationInMonths;

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public String getDurationInMonths() {
		return durationInMonths;
	}

	public void setDurationInMonths(String durationInMonths) {
		this.durationInMonths = durationInMonths;
	}
	
	public LoanCardMasterDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoanCardMasterDto(@NotNull int loanId, @NotNull String loanType, @NotNull String durationInMonths)
	{
		super();
		this.loanId = loanId;
		this.loanType = loanType;
		this.durationInMonths = durationInMonths;
	
	}

}
