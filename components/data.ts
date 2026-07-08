export type Project = {
  title: string;
  meta: string;
  line1: string;
  line2: string;
  tags: string[];
  sprite: string;
  pokemon: string;
  type: string;
  typeColor: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Out-of-Order Execution Simulator",
    meta: "C++ · Computer Architecture · Spring 2026",
    line1:
      "CPU simulator with Tomasulo register renaming, ROB commit, and CDB hazard resolution.",
    line2:
      "2-bit branch prediction, load/store disambiguation, and precise-exception rollback on mispredict.",
    tags: ["C++", "Tomasulo", "Branch prediction"],
    sprite: "/sprites/alakazam.png",
    pokemon: "Alakazam",
    type: "Psychic",
    typeColor: "var(--violet-500)",
  },
  {
    title: "QuadTree Graphics Editor",
    meta: "C++, Qt · Design Practices · Spring 2026",
    line1: "Polymorphic shape model with RAII single ownership and deep-copy undo/redo snapshots.",
    line2: "Quadtree spatial index brings cursor hit-testing to logarithmic time during drag/resize.",
    tags: ["C++", "Qt", "std::variant", "Quadtree"],
    sprite: "/sprites/ditto.png",
    pokemon: "Ditto",
    type: "Normal",
    typeColor: "var(--slate-400)",
  },
  {
    title: "Timber Logs Distribution Predictor",
    meta: "Python, CV, ML · ITC × ARIES · Fall 2025",
    line1: "CV pipeline: YOLO cropping, K-means segmentation, Sobel-Hough transform for log diameter counts.",
    line2: "Analytic circle-circle IoU for NMS of overlapping detections, plus texture-centroid refinement.",
    tags: ["Python", "YOLO", "OpenCV", "Hough"],
    sprite: "/sprites/tangela.png",
    pokemon: "Tangela",
    type: "Grass",
    typeColor: "#059669",
  },
  {
    title: "Implied Volatility Curve Prediction",
    meta: "Python, C++, ML · NK Securities Hackathon · 2025",
    line1: "Estimated missing implied vols in sparse option data via strike-matched nearest rows.",
    line2: "C++ KNN rewrite cut runtime 5h → 5s; spline + Savitzky-Golay smile beat SVI and XGBoost on RMSE.",
    tags: ["C++", "KNN", "Cubic spline", "Quant"],
    sprite: "/sprites/gyarados.png",
    pokemon: "Gyarados",
    type: "Water",
    typeColor: "var(--sky-500)",
  },
  {
    title: "VANTA — Vision-Augmented Task Agent",
    meta: "Python, LangGraph · Personal · Summer 2026",
    line1: "Voice-assisted desktop agent: Faster-whisper STT plans verifiable multi-step tasks with retry/rollback.",
    line2: "OmniParser vision agent maps screen elements to coordinates; DPI-aware zero-copy capture + injection.",
    tags: ["LangGraph", "Whisper", "OmniParser", "Agents"],
    sprite: "/sprites/mewtwo.png",
    pokemon: "Mewtwo",
    type: "Psychic",
    typeColor: "var(--violet-500)",
  },
  {
    title: "TaskBoard — Project Tracker",
    meta: "React, PostgreSQL · Design Practices · Spring 2026",
    line1: "Jira-style tracker with Prisma/PostgreSQL, JWT-session auth, and project-level RBAC guards.",
    line2: "Kanban as a workflow transition graph with WIP limits, WebSocket real-time sync, activity timelines.",
    tags: ["React", "PostgreSQL", "WebSockets", "RBAC"],
    sprite: "/sprites/eevee.png",
    pokemon: "Eevee",
    type: "Normal",
    typeColor: "var(--slate-400)",
  },
  {
    title: "LevelDB Storage-Engine Extensions",
    meta: "C++ · Design Practices · Spring 2026",
    line1: "Extended Google's LSM-tree engine with range Scan and DeleteRange over memtable + SSTable iterators.",
    line2: "ForceFullCompaction primitive merges all levels into one, reclaiming space from deleted keys.",
    tags: ["C++", "LevelDB", "LSM-tree"],
    sprite: "/sprites/snorlax.png",
    pokemon: "Snorlax",
    type: "Normal",
    typeColor: "var(--slate-400)",
  },
  {
    title: "Road Fighter — FPGA Arcade Game",
    meta: "Verilog, FPGA · Digital Design · Fall 2025",
    line1: "Verilog arcade game on a Basys FPGA driving VGA with ROM-based sprites and a scrolling road.",
    line2: "LFSR random rival spawning, real-time collision detection, and a hardware finite state machine.",
    tags: ["Verilog", "FPGA", "VGA"],
    sprite: "/sprites/rapidash.png",
    pokemon: "Rapidash",
    type: "Fire",
    typeColor: "var(--red-400)",
  },
];

export type Achievement = {
  stat: string;
  title: string;
  detail: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  { stat: "TOP 5", title: "IMC Low Latency Challenge", detail: "Among all undergraduate teams, conducted by IMC Trading (2025)" },
  { stat: "TOP 8", title: "Citadel India Terminal", detail: "Optimized AI strategy for Terminal vs top-tier IIT teams (2025)" },
  { stat: "1%", title: "NSEP — Physics Olympiad", detail: "Top 1% of 40,000+ students, first stage of IPhO (2023)" },
  { stat: "WIN", title: "Atlassian Fastrack", detail: "Won a relay sprint debugging an unfamiliar codebase under time pressure (2025)" },
  { stat: "50", title: "Winter School, AI & Finance", detail: "Selected among 50 students across India, IIITH × Alphagrep (2025)" },
  { stat: "#10", title: "State Talent Search Exam", detail: "Rank 10 among 20,000+ candidates (2022)" },
];

export const SKILL_TAGS = [
  "C++",
  "Python",
  "OOP",
  "Deep learning",
  "RAG",
  "AI agents",
  "Time-series",
  "Linux",
  "Git",
  "Verilog",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "WebSockets",
  "PostgreSQL",
];
