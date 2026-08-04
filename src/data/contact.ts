// src/data/contact.ts
import { PERSONAL_LINKS } from "./site-config";

const emailAddressStr = PERSONAL_LINKS.email.replace("mailto:", "");
const [emailUsername, emailDomain] = emailAddressStr.split("@");

export const CONTACT_SECTION = {
  // ─── SectionHeaderBlock ───────────────────────────────
  heading: {
    es: "CONTACTO",
    en: "CONTACT",
  },

  // ─── ContactMessage ───────────────────────────────────
  message: {
    unmuteLabel: {
      es: "[ Desmutea ]",
      en: "[ Unmutes ]",
    },
    // Las palabras se guardan como array para preservar
    // la animación de entrada escalonada por palabra
    titleWords: {
      es: ["Nada", "mas", "que", "decir", ".."],
      en: ["Nothing", "from", "my", "side", ".."],
    },
    titleAriaLabel: {
      es: "Nada mas que decir ..",
      en: "Nothing more to say ..",
    },
    description: {
      es: "Siempre estoy disponible para una charla, sobre la última tecnología, filosofía de diseño, o tu próximo proyecto. Puedes contactarme en..",
      en: "I'm always up for a chat, about the latest tech, design philosophy, or your next project. You can reach me at..",
    },
  },

  // ─── ContactEmailLink ─────────────────────────────────
  email: {
    address: emailUsername.toUpperCase(), // Texto visible (display only)
    domain: `@${emailDomain.toUpperCase()}`, // Texto visible con highlight
    href: PERSONAL_LINKS.email,
    ariaLabel: {
      es: `Enviar correo a Cristian a ${emailAddressStr}`,
      en: `Email Cristian at ${emailAddressStr}`,
    },
  },
};
