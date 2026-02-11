"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      toast({
        title: "Message sent!",
        description: `Thanks ${name}, I'll get back to you soon.`,
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses = cn(
    "w-full px-4 py-3 rounded-xl border border-border bg-background",
    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
    "transition-all duration-200",
    "placeholder:text-muted-foreground/60",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-foreground/80"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSending}
          className={inputClasses}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-foreground/80"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSending}
          className={inputClasses}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-foreground/80"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSending}
          rows={5}
          className={cn(inputClasses, "resize-none")}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl",
            "bg-primary text-primary-foreground font-medium",
            "hover:bg-primary/90 transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isSending ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </motion.button>
      </motion.div>
    </form>
  );
}
