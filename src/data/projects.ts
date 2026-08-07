import RouletteCasino from "../assets/roulette-project-window.webp";
import Pong from "../assets/pong-project.webp";
import Reporter from "../assets/ferrominera-java-swing.webp";

export const WORK_SECTION = {
  title: {
    es: "PROYECTOS",
    en: "WORKS",
  },
  description: {
    es: "Una colección de los trabajos seleccionados de Cristian. Elige uno para verlo.",
    en: "A collection of Cristian's curated works. Choose one below to view.",
  },
};

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
    url: "https://github.com/Cristian-Marcano/Roulette-Casino-Simulator",
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
    url: "https://github.com/Cristian-Marcano/Pong",
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
    url: "https://github.com/Cristian-Marcano/FerromineraReport",
    active: false,
  },
];
