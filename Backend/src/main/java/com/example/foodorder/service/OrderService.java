package com.example.foodorder.service;

import com.example.foodorder.model.Order;
import com.example.foodorder.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();  // Fetch all orders
    }

    public void saveOrder(Order order) {
        orderRepository.save(order);  // Save the order to the database
    }

    // Method to update an order with multiple fields
    public Order updateOrder(Long orderID, Order order) {
        Optional<Order> existingOrder = orderRepository.findById(orderID);
        
        if (existingOrder.isPresent()) {
            Order updatedOrder = existingOrder.get();
            updatedOrder.setStatus(order.getStatus()); // Example: Update status
            updatedOrder.setFoodName(order.getFoodName()); // Update food name
            updatedOrder.setQuantity(order.getQuantity()); // Update quantity

            // Add any other fields you want to update here

            orderRepository.save(updatedOrder); // Save the updated order to the database
            return updatedOrder; // Return the updated order
        } else {
            throw new RuntimeException("Order not found with ID: " + orderID); // Handle order not found
        }
    }

    // Method to update just the status of an order
    public Order updateOrderStatus(Long orderId, String newStatus) {
        // Find the order by its ID
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));

        // Update only the status
        order.setStatus(newStatus);

        // Save the order back to the database (only status is changed)
        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);  // Delete the order
    }

    public void finalizeOrder(Long orderId) throws Exception {
        Optional<Order> orderOptional = orderRepository.findById(orderId);
        if (!orderOptional.isPresent()) {
            throw new Exception("Order not found");
        }

        Order order = orderOptional.get();
        order.setStatus("Finalized");  // Finalize the order by setting the status
        orderRepository.save(order); // Save the updated order
    }
}
