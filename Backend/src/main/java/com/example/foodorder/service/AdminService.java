package com.example.foodorder.service;

import com.example.foodorder.model.Admin;
import com.example.foodorder.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository; // Assuming you have an AdminRepository to interact with the database

    // Method to authenticate the admin using email and password
    public boolean authenticateAdmin(String email, String password) {
        // Fetch the admin from the database by email
        Admin admin = adminRepository.findByEmail(email);
        
        if (admin != null && admin.getPassword().equals(password)) {
            // You may want to hash the password and compare, using a secure approach
            return true;
        }
        
        return false;
    }

    // Method to get the role of the admin
    public String getAdminRole(String email) {
        Admin admin = adminRepository.findByEmail(email);
        
        if (admin != null) {
            // Return the role of the admin
            return admin.getRole(); // Assuming the Admin entity has a 'role' field
        }
        
        return null; // Return null or throw an exception if admin is not found
    }
}