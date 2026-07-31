import RouletteCasino from "../assets/roulette-project-window.webp";
import Pong from "../assets/pong-project.webp";
import Reporter from "../assets/ferrominera-java-swing.webp";

export type Language = "en" | "es";

export const PROJECTS = [
  {
    id: "rouletteCasino",
    title: {
      en: "CASINO ROULETTE",
      es: "RULETA DE CASINO",
    },
    description: {
      en: "A desktop application of the classic game of chance.",
      es: "Aplicación de escritorio del juego clasico de azar.",
    },
    tags: ["C++", "graphics.h", "Embarcadero"],
    image: RouletteCasino.src,
    active: true,
  },
  {
    id: "pong",
    title: {
      en: "PONG",
      es: "PING PONG",
    },
    description: {
      en: "Classic ping pong game based on the 1972 arcade game.",
      es: "Videojuego basado en el tenis de mesa clasico.",
    },
    tags: ["C++", "raylib.h"],
    image: Pong.src,
    active: false,
  },
  {
    id: "reporter",
    title: {
      en: "NEWS REPORTER",
      es: "REPORTADOR DE NOVEDADES",
    },
    description: {
      en: `Application for managing and reporting incidents 
          within the company Ferrominera Orinoco, Guayana City.`,
      es: `App de escritorio para gestionar y registrar reportes de novedades 
          que ocurren en la empresa Ferrominera Orinoco, Ciudad Guayana.`,
    },
    tags: ["Java", "Swing", "MySQL"],
    image: Reporter.src,
    active: false,
  },
  {
    id: "real-time-chat",
    title: {
      en: "REAL-TIME CHAT",
      es: "CHAT EN TIEMPO REAL",
    },
    description: {
      en: "A scalable chat application with WebSocket integration.",
      es: "Una aplicación de chat escalable con integración de WebSockets.",
    },
    tags: ["Web App", "Node.js", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    active: false,
  },
];
