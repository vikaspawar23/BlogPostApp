package com.app.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.modal.User;
import com.app.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/user")
public class UserRestController {

	@Autowired
	private UserService userService;

	@PostMapping
	public void register(@RequestBody User user) {
		userService.register(user);
		System.err.println(user);
	}

	@GetMapping
	public ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<List<User>>(userService.getAllUsers(), HttpStatus.OK);
	}

	@PostMapping(value = "/validate")
	public ResponseEntity<User> validateUser(@RequestBody User user) {
		return new ResponseEntity<User>(userService.validate(user), HttpStatus.OK);
	}

	@GetMapping("getmyprofile/{email}")
	public ResponseEntity<User> getUserById(@PathVariable String email) {
	    Optional<User> optionalUser = userService.getUserById(email);
	    if (optionalUser.isPresent()) {
	        User user = optionalUser.get();
	        return new ResponseEntity<>(user, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}


}
