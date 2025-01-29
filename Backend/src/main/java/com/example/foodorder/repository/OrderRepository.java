package com.example.foodorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.foodorder.model.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}

