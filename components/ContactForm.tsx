
"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSuccess("Please fill in all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setSuccess("Please enter a valid email address.");
      return;
    }

    setSuccess("Thank you! Your message has been submitted.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { label: "Full Name", field: "name", placeholder: "Your name" },
        { label: "Email Address", field: "email", placeholder: "Your email" },
        { label: "Subject", field: "subject", placeholder: "Message subject" },
      ].map((item) => (
        <label key={item.field} className="block text-sm font-medium">
          {item.label}
          <input
            required={item.field !== "subject"}
            value={form[item.field as keyof typeof form]}
            onChange={(e) => {
              setForm({ ...form, [item.field]: e.target.value });
              setSuccess("");
            }}
            placeholder={item.placeholder}
            className="mt-2 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-purple-500"
          />
        </label>
      ))}

      <label className="block text-sm font-medium">
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            setSuccess("");
          }}
          placeholder="Write your message..."
          className="mt-2 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-purple-500"
        />
      </label>

      {success && (
        <p className="text-sm text-purple-700">{success}</p>
      )}

      <Button type="submit">Send Message</Button>
    </form>
  );
}
