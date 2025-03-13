import React, { useState } from "react";
import { motion } from "framer-motion";
// import "./Career.css"; // Import CSS for career styling
import "./Chatbot.css"; // Import CSS for chatbot styling
interface ChatbotProps {
  onClose: () => void;
}

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! How can I help you today?", isBot: true },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, isBot: false };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot response (in a real app, you would make an API call here)
    setTimeout(() => {
      const botResponse = { 
        text: "Thanks for your message! Our team will get back to you shortly.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg z-20 flex flex-col h-96 border border-gray-300">
      <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-medium">IBI Support</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          &times;
        </button>
      </div>
      
      <div className="flex-1 p-3 overflow-y-auto">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`mb-2 p-2 rounded-lg ${
              msg.isBot 
                ? "bg-gray-100 text-black text-left" 
                : "bg-blue-100 text-black ml-auto"
            }`}
            style={{ maxWidth: "80%" }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSendMessage} className="border-t p-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
