"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormState({
        status: "success",
        message: "Thank you! We'll be in touch soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormState({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <RevealOnScroll>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <Input
            label="Name"
            name="name"
            required
            disabled={formState.status === "loading"}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            required
            disabled={formState.status === "loading"}
          />
        </div>
        <Input
          label="Company (Optional)"
          name="company"
          disabled={formState.status === "loading"}
        />
        <Textarea
          label="Message"
          name="message"
          required
          disabled={formState.status === "loading"}
        />

        <div className="flex items-center gap-4">
          <Button
            type="submit"
            isLoading={formState.status === "loading"}
            disabled={formState.status === "loading"}
          >
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>

          {formState.status === "success" && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-green-500"
            >
              <CheckCircle className="h-5 w-5" />
              <span>{formState.message}</span>
            </motion.div>
          )}

          {formState.status === "error" && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-red-500"
            >
              <AlertCircle className="h-5 w-5" />
              <span>{formState.message}</span>
            </motion.div>
          )}
        </div>
      </form>
    </RevealOnScroll>
  );
}
