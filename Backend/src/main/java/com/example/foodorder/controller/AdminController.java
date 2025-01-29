package com.example.foodorder.controller;

import com.example.foodorder.model.Admin;
import com.example.foodorder.service.AdminService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000/")

public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Admin request) {
        try {
            boolean isValid = adminService.authenticateAdmin(request.getEmail(), request.getPassword());

            if (isValid) {
                // Get the role of the admin
                String role = adminService.getAdminRole(request.getEmail());

                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful");
                response.put("role", role); // Add role to the response

                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
            }
        } catch (Exception e) {
            e.printStackTrace(); // Log the error
            return ResponseEntity.status(500).body(Map.of("message", "An error occurred."));
        }
    }
}