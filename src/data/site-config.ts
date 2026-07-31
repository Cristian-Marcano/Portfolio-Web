import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";
import resume from "../assets/resume.svg";

export const HEADER_NAV_LINKS = [
  { name: "HOME", path: "#home", active: true },
  { name: "WORK", path: "#work", active: false },
  { name: "ABOUT", path: "#about", active: false },
  { name: "CONTACT", path: "#contact", active: false },
];

export const FOOTER_NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "2024 SITE", href: "https://cristian-marcano.github.io" },
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cristian-ram%C3%B3n-marcano-mirabal-379782278/",
    icon: linkedin,
  },
  {
    name: "Email",
    url: "mailto:cristianmm.1112@gmail.com",
    icon: email,
  },
  {
    name: "GitHub",
    url: "https://github.com/Cristian-Marcano",
    icon: github,
  },
  {
    name: "Resume",
    url: "#",
    icon: resume,
  },
];
