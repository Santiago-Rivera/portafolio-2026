import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "593995303033"; // Cambia por tu número con código de país
const WHATSAPP_MESSAGE = "¡Hola! Vi tu portafolio y me gustaría hablar contigo.";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl"
  >
    <MessageCircle size={28} fill="white" strokeWidth={0} />
  </a>
);

export default WhatsAppButton;
