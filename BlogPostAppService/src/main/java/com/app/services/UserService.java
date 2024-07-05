package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.app.modal.User;
import com.app.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;

	public void register(User user) {
		user.setRole("viewer");
		userRepo.save(user);
	}

	public List<User> getAllUsers() {
		return userRepo.findAll(Sort.by("email"));
	}

	
	public Optional<User> getUserById(String email) {
		return userRepo.findById(email);
	}
	
	public User validate(User user) {
		Optional<User> tempUser = userRepo.findById(user.getEmail());
		if (tempUser.isPresent()) {
			User temp = tempUser.get();
			if (temp.getPassword().equals(user.getPassword())) {
				return temp;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

}
