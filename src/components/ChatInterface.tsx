import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const DEMO_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'bot',
    content: "Hi! I'm your workflow assistant. Try typing something like 'Book Sarah for 2PM tomorrow' or 'Send reminder to all clients'.",
    timestamp: new Date(),
  },
  {
    id: '2',
    type: 'user',
    content: "Book Sarah for 2PM tomorrow",
    timestamp: new Date(),
  },
  {
    id: '3',
    type: 'bot',
    content: "Perfect! I've booked Sarah for 2:00 PM tomorrow. Would you like me to send her a confirmation message?",
    timestamp: new Date(),
  },
  {
    id: '4',
    type: 'user',
    content: "Yes, send confirmation",
    timestamp: new Date(),
  },
  {
    id: '5',
    type: 'bot',
    content: "✅ Confirmation sent to Sarah! She'll receive an SMS with the appointment details.",
    timestamp: new Date(),
  },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(DEMO_MESSAGES);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "This is a demo interface. In the full app, I'd process your command and execute the workflow!",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-2xl h-[500px] flex flex-col bg-gradient-to-br from-white to-indigo-50 border-indigo-200">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.type === 'user' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 border border-gray-200'
            }`}>
              {message.type === 'user' ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>
            
            <div className={`max-w-[70%] p-3 rounded-lg ${
              message.type === 'user' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white border border-gray-200 text-gray-800'
            }`}>
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your command..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}