// src/data/contact.ts
export type Language = "en" | "es";

export const CONTACT_SECTION = {
  // ─── SectionHeaderBlock ───────────────────────────────
  heading: {
    es: "CONTACT",
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
    address: "CRISTIANMM.1112",
    domain: "@GMAIL.COM",
    href: "mailto:cristianmm.1112@gmail.com",
    ariaLabel: {
      es: "Enviar correo a Cristian a cristianmm.1112@gmail.com",
      en: "Email Cristian at cristianmm.1112@gmail.com",
    },
  },
};
