import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";
import resume from "../assets/resume.svg";

export type Language = "en" | "es";

// ─── Personal URLs (single source of truth) ───────────────
export const PERSONAL_LINKS = {
  linkedin:
    "https://www.linkedin.com/in/cristian-ram%C3%B3n-marcano-mirabal-379782278/",
  email: "mailto:cristianmm.1112@gmail.com",
  github: "https://github.com/Cristian-Marcano",
  resume: "#", // TODO: replace with hosted PDF URL
  site2024: "https://cristian-marcano.github.io",
};

// ─── Navigation (bilingual) ───────────────────────────────
export const HEADER_NAV_LINKS = [
  {
    name: { es: "INICIO", en: "HOME" },
    path: "#home",
    active: true,
  },
  {
    name: { es: "PROYECTOS", en: "WORK" },
    path: "#work",
    active: false,
  },
  {
    name: { es: "SOBRE MÍ", en: "ABOUT" },
    path: "#about",
    active: false,
  },
  {
    name: { es: "CONTACTO", en: "CONTACT" },
    path: "#contact",
    active: false,
  },
];

export const FOOTER_NAV_LINKS = [
  {
    name: { es: "INICIO", en: "HOME" },
    href: "#home",
  },
  {
    name: { es: "PROYECTOS", en: "WORK" },
    href: "#work",
  },
  {
    name: { es: "SOBRE MÍ", en: "ABOUT" },
    href: "#about",
  },
  {
    name: { es: "WEB 2024", en: "2024 SITE" },
    href: PERSONAL_LINKS.site2024,
  },
];

// ─── Social links (icons don't change per language) ───────
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: PERSONAL_LINKS.linkedin,
    icon: linkedin,
  },
  {
    name: "Email",
    url: PERSONAL_LINKS.email,
    icon: email,
  },
  {
    name: "GitHub",
    url: PERSONAL_LINKS.github,
    icon: github,
  },
  {
    name: "Resume",
    url: PERSONAL_LINKS.resume,
    icon: resume,
  },
];
