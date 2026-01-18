
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from '../constants';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Aurelia. I am your coastal concierge. How may I assist you this evening?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Create a new instance right before making an API call
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `You are the Aurelia AI Concierge. Aurelia is a high-end Mediterranean restaurant in Charleston, SC.
Executive Chef: Marco Santorini.
Atmosphere: Elegant, waterfront, coastal inspired by Italy and Greece.
Menu Data: ${JSON.stringify(MENU_ITEMS.map(i => ({ name: i.name, price: i.price, desc: i.description })))}
Hours: Tue-Sun 5pm-10pm, Sat-Sun Brunch 11am-3pm. Closed Mondays.
Policies: Smart casual dress code, complimentary valet parking available, 24h cancellation for reservations.
Contact: jamescharles7724@gmail.com, Telegram: https://t.me/jamescharles7724
Tone: Polite, sophisticated, welcoming, and concise.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: systemInstruction,
        },
      });

      const botText = response.text || "I apologize, I am experiencing a temporary disconnect from the coast. How else can I help?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm sorry, I'm unable to process your request at the moment. Please email us at jamescharles7724@gmail.com or call (843) 555-0123." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[calc(100vw-2rem)] sm:w-[400px] h-[70vh] sm:h-[550px] max-h-[600px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-primary/10 reveal active mb-4">
          {/* Header */}
          <div className="bg-primary p-4 sm:p-6 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <Bot className="text-accent" size={24} />
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold">Aurelia Concierge</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Online • AI Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:text-accent transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-4 bg-sand/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 sm:p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-charcoal shadow-sm rounded-tl-none border border-primary/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-primary/5 shadow-sm">
                  <Loader2 className="animate-spin text-accent" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 sm:p-4 border-t border-primary/5 bg-white flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="How can I help you?"
              className="flex-grow bg-sand/50 p-3 rounded-xl text-sm outline-none focus:ring-1 focus:ring-accent transition-all font-body"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white p-3 rounded-xl hover:bg-accent transition-colors disabled:opacity-50 flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}

      {/* Chat Bubble Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-accent transition-all duration-300 group ${!isOpen ? 'reveal active' : 'bg-accent'}`}
        aria-label={isOpen ? "Close chat" : "Open AI Concierge"}
      >
        {isOpen ? (
          <X size={28} className="transition-transform" />
        ) : (
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;
