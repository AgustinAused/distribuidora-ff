// components/ContactContainer.tsx
import React from "react";

interface ContactContainerProps {
  children: React.ReactNode;
}

const ContactContainer: React.FC<ContactContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">{children}</div>
    </div>
  );
};

export default ContactContainer;
