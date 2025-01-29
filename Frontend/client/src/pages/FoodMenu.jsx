import React from 'react';
import Card from './Card';
import './FoodMenu.css'; // Import the CSS file for styling

const FoodMenu = () => {
  return (
    <div className="menu-container">
      <Card 
        image="https://tse3.mm.bing.net/th?id=OIP.9nl2eFOD4SKNC_FIn0bSqQHaFj&pid=Api&P=0&h=180" 
        name="Pizza" 
        price="$100" 
        description="Delicious cheese pizza with crispy crust"
      />
      <Card 
        image="https://tse2.mm.bing.net/th?id=OIP.bso0W6RUjvIhDlp5Y4TkxAHaE8&pid=Api&P=0&h=180" 
        name="Burger" 
        price="$50" 
        description="Juicy beef burger with fresh veggies"
      />
      <Card 
        image="https://tse1.mm.bing.net/th?id=OIP.pDr8PmdOPz4EskXbxBuR6wHaFj&pid=Api&P=0&h=180" 
        name="Pasta"
        price="$80"  
        description="Creamy pasta with parmesan cheese"
      />
      <Card 
        image="https://tse3.mm.bing.net/th?id=OIP.9nl2eFOD4SKNC_FIn0bSqQHaFj&pid=Api&P=0&h=180" 
        name="Pizza" 
        price="$100" 
        description="Delicious cheese pizza with crispy crust"
      />
      <Card 
        image="https://tse2.mm.bing.net/th?id=OIP.bso0W6RUjvIhDlp5Y4TkxAHaE8&pid=Api&P=0&h=180" 
        name="Burger"
        price="$70"  
        description="Juicy beef burger with fresh veggies"
      />
      <Card 
        image="https://tse1.mm.bing.net/th?id=OIP.pDr8PmdOPz4EskXbxBuR6wHaFj&pid=Api&P=0&h=180" 
        name="Pasta" 
        price="$50" 
        description="Creamy pasta with parmesan cheese"
      />
    </div>
  );
};

export default FoodMenu;
