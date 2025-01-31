import React from "react";

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  floating?: boolean; // Optional prop for floating button
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phone, message, floating = false }) => {
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;

  const animation = floating ? {"data-aos":"zoom-in",
    "data-aos-delay":"100"} : null

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center gap-2 ${
        floating ? "fixed bottom-80 right-4 px-5 py-3 rounded-full shadow-lg bg-green-500 shadow-md text-lg" : "text-xs"
      }`}
      {...animation}
    >
      📲 Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
