'use client'
import React from "react";
import ContactContainer from "@/components/contact/ContactContainer";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";


export default function page() {
  const handleFormSubmit = async (formData: { name: string; email: string; message: string }) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el mensaje");
    }
  };

  return (
    <ContactContainer>
      <ContactHeader />
      <ContactForm onSubmit={handleFormSubmit} />
    </ContactContainer>
  );
};
