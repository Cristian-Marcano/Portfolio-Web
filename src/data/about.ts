export const ABOUT_SECTION = {
  // ─── SectionHeaderBlock ───────────────────────────────
  heading: {
    es: "SOBRE MÍ",
    en: "ABOUT",
  },

  // ─── AboutObjective ───────────────────────────────────
  objective: {
    label: { es: "OBJETIVO", en: "OBJECTIVE" },
    // El texto del objetivo tiene estilos HTML internos (<em>, <span>),
    // así que se maneja directamente en el componente.
    // Este objeto existe por si se necesita el aria-label traducido.
    ariaLabel: {
      es: "Trabajar de forma interdisciplinaria con distintos equipos, auditando y traduciendo requerimientos complejos en productos escalables, seguros y eficientes.",
      en: "Work cross-functionally across teams, auditing, translating complex business requirements into scalable, secure and efficient products.",
    },
  },

  // ─── AboutDescriptive ─────────────────────────────────
  descriptive: {
    label: { es: "DESCRIPCION", en: "DESCRIPTIVE" },
    intro: {
      tag1: { es: "[ intro de ready ]", en: "[ ready's intro ]" },
      age: { es: "[ 24 años ]", en: "[ 24 M ]" },
      birthplace: { es: "[ nacido ahí ]", en: "[ born there ]" },
    },
    body: {
      es: `Es Cristian Marcano [ 24 años ], Ingeniero de Software por oficio y solucionador de problemas por naturaleza. Vive en Venezuela [ nacido ahí ]. Le importan mucho las cosas que la mayoría ni notaría. A veces demasiado. Pero por eso mismo los productos que moldea se sienten naturales y tienen sentido rápidamente.\n\nCon formación en informatica y arquitectura de software, trabaja cómodamente donde la tecnología se encuentra con la creatividad — lógica de un lado, intuición del otro.\n\nAhora mismo, lidera el desarrollo web y la estrategia de ingeniería para un conjunto de aplicaciones digitales, construyendo cosas que son intuitivas para los usuarios y mantenibles para los desarrolladores.`,
      en: `He's Cristian Marcano [ 24 M ], Software Engineer by trade and professional problem-solver by nature. Lives in Venezuela [ born there ]. He cares a lot about things most people won't even notice. Sometimes a little too much. But that's also why the products he shapes feel effortless and make sense fast.\n\nWith a background in computer science and software architecture, he works comfortably where technology meets creativity — logic on one side, intuition on the other.\n\nRight now, he's leading web development & engineering strategy for a suite of digital applications, building things that are both intuitive for users and maintainable for developers.`,
    },
  },

  // ─── AboutUnderground → Hard Skills ──────────────────
  skills: {
    label: { es: "HARD SKILLS", en: "HARD SKILLS" },
    // tier: 'primary' = lenguajes/frameworks core | 'secondary' = herramientas | 'tertiary' = infra/ops
    items: [
      // Frontend
      { name: "JavaScript", tier: "primary" },
      { name: "TypeScript", tier: "primary" },
      { name: "Angular", tier: "secondary" },
      { name: "Vue", tier: "secondary" },
      { name: "React", tier: "primary" },
      { name: "Next.js", tier: "primary" },
      { name: "Payload CMS", tier: "secondary" },
      { name: "React Native", tier: "secondary" },
      // Backend
      { name: "Node.js", tier: "primary" },
      { name: "Bun", tier: "secondary" },
      { name: "Express", tier: "primary" },
      { name: "NestJS", tier: "primary" },
      { name: "Python", tier: "primary" },
      { name: "Flask", tier: "secondary" },
      { name: "Java", tier: "secondary" },
      { name: "C++", tier: "secondary" },
      // DevOps / CLI
      { name: "Bash", tier: "secondary" },
      { name: "Zsh", tier: "secondary" },
      { name: "Git", tier: "primary" },
      // Databases
      { name: "PostgreSQL", tier: "primary" },
      { name: "MySQL", tier: "secondary" },
      { name: "MongoDB", tier: "secondary" },
      // Infrastructure
      { name: "Docker", tier: "primary" },
      { name: "Nginx", tier: "secondary" },
      { name: "VPS/Coolify", tier: "tertiary" },
    ],
  },

  // ─── AboutPhotoWrapper ────────────────────────────────
  photo: {
    alt: { es: "Cristian Marcano", en: "Cristian Marcano" },
    resume: {
      ariaLabel: {
        es: "Ver el currículum de Cristian (abre en nueva pestaña)",
        en: "View Cristian's resume (opens in new tab)",
      },
      text: { es: "VER EL ", en: "VIEW CRISTIAN'S " },
      highlight: { es: "CURRÍCULUM", en: "RESUME" },
    },
  },

  // ─── AboutEnjoys ──────────────────────────────────────
  enjoys: {
    title: { es: "COSAS QUE DISFRUTA", en: "THINGS HE CURRENTLY ENJOYS" },
    items: {
      es: [
        "Peliculas y series",
        "Nier Automata",
        "HunterXHunter",
        "FullMetal Alchemist Brotherhood",
        "Tecnología & Desarrollo",
        "UI/UX Design",
        "Trotar",
        "Bailar",
      ],
      en: [
        "Films & Series",
        "Nier Automata",
        "HunterXHunter",
        "FullMetal Alchemist Brotherhood",
        "Technology & Development",
        "UI/UX Design",
        "Running",
        "Dancing",
      ],
    },
  },

  // ─── AboutHopesTo ─────────────────────────────────────
  hopesTo: {
    title: {
      es: "COSAS QUE ESPERA COMPLETAR",
      en: "THINGS HE HOPES TO COMPLETE",
    },
    goals: {
      es: [
        { text: "Carrera Ing. Informatica", done: true },
        { text: "Conseguir su 1er Empleo Estable", done: true },
        { text: "Finalizar su proyecto personal", done: false },
        { text: "Crear un proyecto open source", done: false },
        { text: "Dominar Hardening", done: false },
        { text: "Especializarse en DevSecOps", done: false },
      ],
      en: [
        { text: "Computer Engineering degree", done: true },
        { text: "Get a first stable job", done: true },
        { text: "Finish a personal side-project", done: false },
        { text: "Create an open source project", done: false },
        { text: "Master Hardening", done: false },
        { text: "Specialize in DevSecOps", done: false },
      ],
    },
  },
};
