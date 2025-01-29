package com.example.foodorder.controller;

import com.example.foodorder.model.User;
import com.example.foodorder.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000/") // Allow requests from frontend
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping
	public List<User> getAllUsers() {
	    return userService.getAllUsers();
	}

	// User login (validate user credentials)
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
	    // Extract email and password from the user object
	    String email = user.getEmail();
	    String password = user.getPassword();
	    return userService.loginUser(email, password); // Pass email and password to the service method
	}

	// Register a new user
	@PostMapping("/register")
	public User createUser(@RequestBody User user) {
	    return userService.createUser(user);
	}

	@PutMapping("/{id}")
	public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
	    return userService.updateUser(id, updatedUser);
	}

	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable Long id) {
	    userService.deleteUser(id);
	    return "User with id " + id + " has been deleted successfully.";
	}
}
