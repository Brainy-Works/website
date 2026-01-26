import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickOptions = [
  "I want to build an AI product",
  "I need freelance developers",
  "I have documents to process",
  "I want a cost estimate",
];

interface Message {
  role: "assistant" | "user";
  content: string;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI guide. How can I help you find the right solution for your business?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleQuickOption = (option: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: option },
      { role: "assistant", content: getResponse(option) },
    ]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: inputValue },
      { role: "assistant", content: getResponse(inputValue) },
    ]);
    setInputValue("");
  };

  const getResponse = (input: string): string => {
    const lower = input.toLowerCase();
    if (lower.includes("ai") || lower.includes("automation") || lower.includes("ml")) {
      return "Great choice! We specialize in AI solutions - from custom LLMs to intelligent automation. Would you like to schedule a free consultation to discuss your specific needs?";
    }
    if (lower.includes("freelance") || lower.includes("developer") || lower.includes("talent")) {
      return "We connect you with vetted, top-tier developers and designers. Tell me more about your project, and I'll help you find the perfect match.";
    }
    if (lower.includes("document") || lower.includes("ocr") || lower.includes("process")) {
      return "Document processing is one of our strengths! We can help with OCR, data extraction, and intelligent document workflows. Let's explore what you need.";
    }
    if (lower.includes("cost") || lower.includes("estimate") || lower.includes("price")) {
      return "For accurate pricing, I'd recommend a quick call with our team. Projects typically range based on complexity. Want me to help you schedule a no-obligation consultation?";
    }
    return "I'd love to help! Feel free to explore our services or schedule a free consultation to discuss your specific needs in detail.";
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent shadow-elevated flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? "hidden" : ""}`}
      >
        <MessageCircle className="w-6 h-6 text-accent-foreground" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-elevated border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="gradient-hero p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-display font-bold text-accent-foreground">AI</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-primary-foreground">AI Concierge</h4>
                  <p className="text-primary-foreground/70 text-xs">Here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "gradient-hero text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Options */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleQuickOption(option)}
                    className="text-xs bg-secondary hover:bg-muted text-secondary-foreground px-3 py-1.5 rounded-full transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-secondary rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button size="icon" onClick={handleSend} className="gradient-hero hover:opacity-90">
                <Send size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
