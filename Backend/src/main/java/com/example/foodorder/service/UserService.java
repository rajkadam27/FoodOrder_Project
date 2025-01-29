package com.example.foodorder.service;

import com.example.foodorder.model.User;
import com.example.foodorder.repository.UserRepository; // Assuming you have a UserRepository for database operations
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository; // Inject the UserRepository

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Register a new user
    public User createUser (User user) {
        // You may want to add validation or checks here (e.g., check if the email already exists)
        return userRepository.save(user);
    }

    // Login user by validating credentials
    public User loginUser (String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email); // Assuming you have a method to find by email
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Validate password (you may want to hash passwords and compare)
            if (user.getPassword().equals(password)) {
                return user; // Return user if credentials are valid
            }
        }
        return null; // Return null or throw an exception if credentials are invalid
    }

    // Update an existing user
    public User updateUser (Long id, User updatedUser ) {
        // You may want to check if the user exists before updating
        updatedUser .setId(id); // Set the ID to ensure the correct user is updated
        return userRepository.save(updatedUser );
    }

    // Delete a user by ID
    public void deleteUser (Long id) {
        userRepository.deleteById(id);
    }
}