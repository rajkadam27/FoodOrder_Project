package com.example.foodorder.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {

    @Id
    private Long id;
    private String email;
    private String password;
    private String role; // admin, superadmin, etc.

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
