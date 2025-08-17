import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const DEMO_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'bot',
    content: "Hi! I'm your AI workflow assistant. Try typing something like 'Book Sarah for highlights at 2PM tomorrow' or 'Send reminder to all clients'.",
    timestamp: new Date(),
  },
  {
    id: '2',
    type: 'user',
    content: "Book Sarah for highlights at 2PM tomorrow",
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

const SUGGESTED_COMMANDS = [
  "Book appointment for tomorrow",
  "Send invoice to John",
  "Remind clients about Friday",
  "Generate monthly report"
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(DEMO_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('book') || input.includes('appointment')) {
      return "✅ Appointment booked successfully! I've sent a confirmation to your client. Would you like me to add a reminder?";
    } else if (input.includes('invoice') || input.includes('bill')) {
      return "📄 Invoice generated and sent! The payment link has been delivered to your client's email.";
    } else if (input.includes('remind') || input.includes('reminder')) {
      return "🔔 Reminders scheduled! All clients will receive notifications 24 hours before their appointments.";
    } else if (input.includes('report') || input.includes('analytics')) {
      return "📊 Here's your monthly report: 45 appointments, $2,340 revenue, 98% client satisfaction. Need anything specific?";
    } else {
      return "I understand you want to automate something! In the full app, I'd process your command and execute the workflow. What else can I help you with?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestedCommand = (command: string) => {
    setInputValue(command);
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-2xl h-[500px] flex flex-col bg-gradient-to-br from-white to-indigo-50 border-indigo-200 shadow-2xl">
      {/* Header */}
      <div className="p-4 border-b border-indigo-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold">AI Workflow Assistant</h3>
            <p className="text-xs text-indigo-100">Always online • Ready to help</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        id="chat-messages"
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 animate-fade-in ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.type === 'user'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'bg-white border border-indigo-200 shadow-sm'
            }`}>
              {message.type === 'user' ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4 text-indigo-600" />
              )}
            </div>

            <div className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
              message.type === 'user'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'bg-white border border-indigo-200 text-gray-800'
            }`}>
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-start gap-3 animate-fade-in">
            <div className="w-8 h-8 bg-white border border-indigo-200 rounded-full flex items-center justify-center shadow-sm">
              <Bot className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="bg-white border border-indigo-200 rounded-lg p-3 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Commands */}
      <div className="px-4 py-3 border-t border-indigo-200 bg-indigo-50/50">
        <p className="text-xs text-indigo-600 mb-2 font-medium">Try these commands:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_COMMANDS.map((command, index) => (
            <button
              key={index}
              onClick={() => handleSuggestedCommand(command)}
              className="text-xs bg-white border border-indigo-200 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors cursor-pointer"
            >
              {command}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-indigo-200 bg-white rounded-b-lg">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your automation command..."
            className="flex-1 border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400"
          />
          <Button 
            onClick={handleSendMessage} 
            size="icon"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}