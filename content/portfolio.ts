export type SocialLinks = {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  org?: string;
  link?: string;
  tech?: string[];
  image?: string; // optional preview image path under /public, e.g., "/projects/foo.png"
};

export type Position = {
  role: string;
  org: string;
  details?: string[];
};

export const portfolio = {
  profile: {
    name: "Mridul Chhipa",
    tagline: "CS Undergrad @ IIT Delhi • AI, Low‑Latency Systems, and Web",
    summary:
      "I build efficient, low‑latency systems and ML solutions — from real‑time web apps to performance‑critical workloads — and enjoy competitive programming and modern web development.",
  },
  socials: {
    email: "cs1240411@iitd.ac.in",
    phone: "+91 9057751414",
    github: "https://github.com/mridulChhipa",
    linkedin: "https://www.linkedin.com/in/mridul-chhipa-9761a12a9/",
  } as SocialLinks,
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Technology, Delhi (IIT Delhi)",
    period: "2024 – 2028",
    cgpa: "9.24/10",
  } as Education,
  achievements: [
    "JEE Advanced 2024: AIR 974 (out of >150k qualified)",
    "JEE Mains 2024: AIR 1146 (out of 1.3M)",
    "National Standard Examination in Physics 2023: National Top 1% (IAPT)",
    "IMC Low‑Latency Challenge: Top 5 among 300 IITD undergrads; prize INR 5000",
  ],
  skills: {
    programming: [
      "C++",
      "Python",
      "Rust",
      "OOP",
      "Problem Solving",
      "Competitive Programming (CF max 1625)",
      "Performance Optimization",
      "Concurrency",
      "Low‑Latency Design",
    ],
    ai: [
      "Regression",
      "Neural Networks (CNNs, RNNs, LSTMs)",
      "RAG",
      "LLMs",
      "Time Series Forecasting",
      "Image Processing",
    ],
    hardware: ["Verilog (HDL)", "FPGAs", "Digital Logic Design", "AutoCAD"],
    courses: [
      "Data Structures & Algorithms",
      "Probability & Stochastic Processes",
      "Digital Logic & System Design",
      "Discrete Mathematical Structures",
      "Calculus",
      "Linear Algebra and Differential Equations",
      "Intro to Computer Science",
      "Intro to Electrical Engineering",
    ],
  },
  projects: [
    {
      id: "iv-curve",
      title: "Implied Volatility Curve Prediction",
      description:
        "Leveraged the Volatility Smile pattern as the core of the strategy to model IV curves.",
      tech: ["Python", "Time Series", "ML"],
      image: "/projects/iv-curve.svg",
    },
    {
      id: "timber-logs-distribution-predictor",
      title: "Timber Logs Distribution Predictor",
      org: "ARIES IIT Delhi",
      description:
        "Built a model to estimate the distribution of timber logs loaded onto a truck based on diameter.",
      tech: ["Python", "Pandas", "Regression"],
      image: "/projects/timber-logs.svg",
    },
    {
      id: "git-inspired-vcs",
      title: "A Git-inspired Version Control System",
      org: "COL106 Course - IIT Delhi",
      description:
        "Lightweight VCS in C++ from scratch, mimicking commit/add/log with custom data structures.",
      tech: ["C++", "Data Structures"],
      image: "/projects/octocat.svg", // Place your Octocat SVG/PNG here
    },
    {
      id: "the-trust-gambit",
      title: "The Trust Gambit Website",
      org: "IGTS IIT Delhi",
      description: "Official real‑time event website built using Next.js and WebSockets with a focus on low‑latency interactions.",
      tech: ["Next.js", "WebSockets"],
      image: "/projects/TheTrustGambit.png",
    },
    {
      id: "verilog-road-fighter",
      title: "Verilog Road Fighter Game",
      description:
        "A classic Road Fighter arcade-style game implemented in Verilog (HDL), designed to run on FPGA hardware.",
      tech: ["Verilog", "FPGA", "Digital Logic"],
    },
  ] as Project[],
  positions: [
    { role: "Executive", org: "Algorithms and Coding Club, IITD" },
    { role: "Research Executive", org: "Artificial Intelligence Society (ARIES), IITD" },
    { role: "Tech Executive", org: "Indian Game Theory Society (IGTS), IITD" },
  ] as Position[],
};

export type Portfolio = typeof portfolio;
