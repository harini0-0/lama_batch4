package com.wellsfargo.lama.Dto;

import com.wellsfargo.lama.entities.EmployeeMaster;
import com.wellsfargo.lama.entities.ItemMaster;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



public class AdminApproveDto {
	private int issueId;
	private int employeeId;
	private int itemId;
	private String issueDate;
	private String durationInMonths;
	private int isApproved;
	public int getIssueId() {
		return issueId;
	}
	public void setIssueId(int issueId) {
		this.issueId = issueId;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public int getItemId() {
		return itemId;
	}
	public void setItemId(int itemId) {
		this.itemId = itemId;
	}
	public String getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}
	public String getDurationInMonths() {
		return durationInMonths;
	}
	public void setDurationInMonths(String durationInMonths) {
		this.durationInMonths = durationInMonths;
	}
	public int getIsApproved() {
		return isApproved;
	}
	public AdminApproveDto(int issueId, int employeeId, int itemId, String issueDate, String durationInMonths,
			int isApproved) {
		super();
		this.issueId = issueId;
		this.employeeId = employeeId;
		this.itemId = itemId;
		this.issueDate = issueDate;
		this.durationInMonths = durationInMonths;
		this.isApproved = isApproved;
	}
	public void setIsApproved(int isApproved) {
		this.isApproved = isApproved;
	}
	@Override
	public String toString() {
		return "AdminApproveDto [issueId=" + issueId + ", employeeId=" + employeeId + ", itemId=" + itemId
				+ ", issueDate=" + issueDate + ", durationInMonths=" + durationInMonths + ", isApproved=" + isApproved
				+ "]";
	}
	public AdminApproveDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
