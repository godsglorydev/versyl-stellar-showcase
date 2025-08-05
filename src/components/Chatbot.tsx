import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Versyl's AI assistant. How can I help you today? I can answer questions about our services, pricing, or schedule a consultation for you.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    "services": "We offer 5 main services: Branding, Web Design & Development, Advertising Campaigns, SEO, and Marketing Automations. Each service is designed to help your business grow and succeed in the digital landscape.",
    "pricing": "Our Premium Plan is $2,999/month (normally $4,999 - Save 40%!) and includes all our services plus priority support. We also offer individual service packages. Would you like me to connect you with our team for a custom quote?",
    "contact": "You can reach us at hello@versyl.com or call +1 (555) 123-4567. Our office hours are Monday-Friday, 9AM-6PM EST. Would you like me to schedule a consultation for you?",
    "premium": "Our Premium Plan includes: Complete Branding, Web Design & Development, Advertising Campaigns, SEO, Marketing Automations, 24/7 Priority Support, Monthly Strategy Sessions, and a Dedicated Account Manager. All for $2,999/month (40% off regular price)!",
    "consultation": "I'd be happy to help you schedule a free consultation! Please provide your email address and preferred time, and our team will reach out to you within 24 hours.",
    "default": "That's a great question! For detailed information about that topic, I'd recommend speaking with one of our specialists. Would you like me to connect you with our team, or is there something specific about our services I can help you with?"
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return predefinedResponses.services;
    }
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return predefinedResponses.pricing;
    }
    if (message.includes('contact') || message.includes('reach') || message.includes('phone')) {
      return predefinedResponses.contact;
    }
    if (message.includes('premium') || message.includes('plan') || message.includes('package')) {
      return predefinedResponses.premium;
    }
    if (message.includes('consultation') || message.includes('meeting') || message.includes('schedule')) {
      return predefinedResponses.consultation;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to Versyl. I'm here to help you learn about our marketing services and how we can help grow your business. What would you like to know?";
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="hero"
          size="lg"
          className="rounded-full w-14 h-14 shadow-glow animate-glow-pulse"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-40 animate-scale-in">
          <Card className="h-full bg-background border-border shadow-elegant">
            <CardHeader className="pb-3 bg-gradient-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="flex items-center text-lg">
                <Bot className="w-5 h-5 mr-2" />
                Versyl Assistant
              </CardTitle>
              <p className="text-primary-foreground/80 text-sm">
                Ask me anything about our services!
              </p>
            </CardHeader>
            
            <CardContent className="p-0 flex flex-col h-full">
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-primary' : 'bg-accent'}`}>
                          {message.sender === 'user' ? 
                            <User className="w-4 h-4 text-primary-foreground" /> : 
                            <Bot className="w-4 h-4 text-accent-foreground" />
                          }
                        </div>
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                          <Bot className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="border-t border-border p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    variant="default"
                    size="sm"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;