"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";  // Correct import for the toast hook
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactCard() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();  // Initialize the toast hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully.",
          variant: "default",
        });
      } else {
        toast({
          title: "Failed to Send!",
          description: "There was an issue with your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }

    // Reset form after submission
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-white"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-white"
          />
          <Textarea
            name="message"
            placeholder="Message"
            value={formState.message}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-white resize-none h-[60px]"
          />
          <Button type="submit" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
