"use client";

import React from "react";
import ContactContainer from "@/components/contact/ContactContainer";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import { sendContactForm } from "@/api/contactApi";

// Define el tipo de los datos del formulario
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const handleFormSubmit = async (formData: ContactFormData) => {
    try {
      const response : any = await sendContactForm(formData);

      if (response.message) {
        alert("Mensaje enviado exitosamente.");
      } else {
        const errorData = response.error; // Directamente accedemos a los datos de la respuesta
        alert(`Error: ${errorData.error || "No se pudo enviar el mensaje"}`);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error. Por favor, intenta nuevamente.");
    }
  };

  return (
    <ContactContainer>
      <ContactHeader />
      <ContactForm onSubmit={handleFormSubmit} />
    </ContactContainer>
  );
}
