package com.app.modal;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity(name = "users")
public class User {

	@Id
	private String email;

	private String password;

	private String mobileNumber;

	private String role;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String email, String password, String mobileNumber, String role) {
		super();
		this.email = email;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [email=" + email + ", password=" + password + ", mobileNumber=" + mobileNumber + ", role=" + role
				+ "]";
	}

}
