// src/components/WhatsAppButton.jsx

import { FaWhatsapp } from 'react-icons/fa';
import './w.css'; // We'll define styles here

const WhatsAppButton = () => {
  const whatsappNumber = "+918500545536"; // Replace with your number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
