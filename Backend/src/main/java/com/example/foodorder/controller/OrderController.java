package com.example.foodorder.controller;

import com.example.foodorder.model.Order;
import com.example.foodorder.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000/")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // Fetch all orders
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders(); // Fetch and return all orders
    }

    // Fetch a single order by ID
    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long orderId) {
        Order order = orderService.getAllOrders().stream()
            .filter(o -> o.getId().equals(orderId))
            .findFirst()
            .orElse(null);

        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build(); // Return 404 if order not found
        }
    }

    // Create a new order
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        orderService.saveOrder(order); // Save the new order
        return ResponseEntity.status(201).body(order); // Return the created order with 201 status
    }

    // Update an existing order (with multiple fields)
    @PutMapping("/{orderId}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long orderId, @RequestBody Order order) {
        try {
            Order updatedOrder = orderService.updateOrder(orderId, order); // Update the order
            return ResponseEntity.ok(updatedOrder); // Return the updated order
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Return 404 if order not found
        }
    }

    // Update only the status of an order
    @PutMapping("/{orderId}/status")
    public Order updateOrderStatus(@PathVariable Long orderId, @RequestBody String status) {
        // Logic to update status
        return orderService.updateOrderStatus(orderId, status);
    }


    // Delete an order by ID
    @DeleteMapping("/{orderId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long orderId) {
        try {
            orderService.deleteOrder(orderId); // Delete the order
            return ResponseEntity.noContent().build(); // Return 204 status if successful
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Return 404 if order not found
        }
    }

    // Finalize an order (example: changing the status to "finalized")
    @PutMapping("/finalize/{orderId}")
    public ResponseEntity<Order> finalizeOrder(@PathVariable Long orderId) {
        try {
            orderService.finalizeOrder(orderId); // Finalize the order
            return ResponseEntity.ok().build(); // Return 200 status if successful
        } catch (Exception e) {
            return ResponseEntity.notFound().build(); // Return 404 if order not found
        }
    }
}
