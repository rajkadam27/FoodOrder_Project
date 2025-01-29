import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [answer, setAnswer] = useState("");

  const questions = [
    "What's the menu?",
    "What is the price of pizza?",
    "How can I place an order?",
    "Do you offer delivery?",
    "What are your working hours?",
    "Can I cancel my order?",
    "Do you accept credit cards?",
    "Do you offer vegan options?",
    "How do I track my order?",
    "Can I change my order?",
    "How do I provide feedback?",
    "Is there a minimum order amount?",
    "Do you offer discounts?",
    "Can I order food online?",
    "Do you have a mobile app?",
    "What is your delivery time?",
    "How do I contact customer support?",
    "What if my order is wrong?",
    "Do you offer refunds?",
    "Can I order in advance?",
    "Do you have any gluten-free options?"
  ];

  const responses = {
    "What's the menu?": "Our menu includes pizza, burgers, sushi, pasta, and more!",
    "What is the price of pizza?": "The price of a pizza starts at $8.",
    "How can I place an order?": "You can place an order directly on our website or app.",
    "Do you offer delivery?": "Yes, we offer fast delivery to your doorstep!",
    "What are your working hours?": "We are open from 9 AM to 11 PM every day.",
    "Can I cancel my order?": "You can cancel your order within 15 minutes of placing it.",
    "Do you accept credit cards?": "Yes, we accept all major credit cards.",
    "Do you offer vegan options?": "Yes, we have a variety of vegan options available.",
    "How do I track my order?": "You can track your order in real-time via our website or app.",
    "Can I change my order?": "You can modify your order within the first 10 minutes.",
    "How do I provide feedback?": "You can leave feedback on our website or through the app.",
    "Is there a minimum order amount?": "Yes, the minimum order amount is $15.",
    "Do you offer discounts?": "We offer seasonal discounts. Stay tuned for updates!",
    "Can I order food online?": "Yes, you can order food online via our platform.",
    "Do you have a mobile app?": "Yes, we have a mobile app available for download.",
    "What is your delivery time?": "Our average delivery time is 30-45 minutes.",
    "How do I contact customer support?": "You can contact customer support via phone or email.",
    "What if my order is wrong?": "If your order is wrong, please contact customer support for assistance.",
    "Do you offer refunds?": "Yes, we offer refunds for orders with issues or mistakes.",
    "Can I order in advance?": "Yes, you can place orders in advance for a later time.",
    "Do you have any gluten-free options?": "Yes, we offer gluten-free options on select items.",
  };

  const handleIconClick = () => {
    setShowChatbot(!showChatbot);
  };

  const handleInputClick = () => {
    setShowQuestionList(true);
  };

  const handleQuestionClick = (question) => {
    setShowQuestionList(false);
    setAnswer(responses[question]);
  };

  return (
    <>
      {/* Floating Chatbot Icon */}
      <div className="chatbot-icon" onClick={handleIconClick}>
        💬
      </div>

      {/* Chatbot Box */}
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat with FoodOrder Bot</h3>
            <button className="close-btn" onClick={handleIconClick}>✖</button>
          </div>
          <div className="chatbot-messages">
            {answer && <div className="chatbot-message bot">{answer}</div>}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Click here to ask a question..."
              onClick={handleInputClick}
            />
            {showQuestionList && (
              <div className="questions-list">
                {questions.map((question, index) => (
                  <button
                    key={index}
                    className="question-button"
                    onClick={() => handleQuestionClick(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
