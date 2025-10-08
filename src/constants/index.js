import {
  web,
  frontend,
  backend,
  fullStack,
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  mongoose,
  git,
  github,
  vscode,
  ChatGPT,
  chrome,
  mongodbCompass,
  postman,
  nextjs,
  dental,
  dotInternational,
  mansooriConstruction,
  uber,
  secretGenerator,
  portfolio,

} from "../assets";

const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "React Js Developer", icon: frontend },
  { title: "Next Js Developer", icon: web },
  { title: "Node Js Developer", icon: backend },
  { title: "Full Stack Developer", icon: fullStack },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: nextjs },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: expressjs },
  { name: "MongoDB", icon: mongodb },
  { name: "Mongoose", icon: mongoose },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
];

const tools = [
  { name: "VS Code", icon: vscode },
  { name: "ChatGPT", icon: ChatGPT },
  { name: "Chrome", icon: chrome },
  { name: "Mongodb Compass", icon: mongodbCompass },
  { name: "Postman", icon: postman },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Campaigning Source Solutions, Ghaziabad, U.P",
    icon: frontend,
    iconBg: "#383E56",
    date: "September 2024 - December 2024",
    points: [
      "Hands-on expertise in React.js for building responsive and dynamic user interfaces.",
      "Developed and maintained scalable RESTful APIs with Node.js and Express.js.",
      "Worked with MongoDB for designing and optimizing database schemas.",
      "Implemented reusable UI components to improve development speed and maintainability.",
      "Optimized application performance and ensured cross-browser compatibility.",
      "Contributed to deployment and hosting workflows using Netlify and other cloud platforms.",
      "Actively collaborated with senior developers to learn and implement industry best practices.",
      "Continuously improving skills in MERN stack and exploring modern libraries & tools for full-stack development.",
    ],
  },
  
];

  const projects = [
    {
      name: "Dentist Clinic Website",
      description:"I Created this website for a client and this website is of a dental care clinic, you can book your appointment, check memberships plan and blogs.",
      tech: ["ReactJs", "TailwindCSS"], // 👈 raw tech array
      image: dental,
      alt: 'dental clinic website',
      source_code_link: "https://github.com/mohdamangithub/Dentist_Website",
      live_link: "https://dentistvikas.com"
    },
    {
      name: "Dot International",
      description:
        "I Created this website for a client, At Dot International, we specialize in creating unforgettable exhibition experiences. a presence in India.",
      tech: ["ReactJs", "TailwindCSS"], // 👈 raw tech array
      image: dotInternational,
      alt: 'dot international website',
      source_code_link: "https://github.com/mohdamangithub/Dot_International",
      live_link: "https://dot-international.vercel.app"
    },
    {
      name: "Mansoori Construction",
      description:
        "I built this website for my family's construction firm, Public Works Department Government Contractor Trusted Partner for Government Infrastructure Projects.",
      tech: ["NextJs", "TailwindCSS"], // 👈 raw tech array
      image: mansooriConstruction,
      alt: 'mansoori construction website',
      source_code_link: "https://github.com/mohdamangithub/Mansoori-Construction-Website",
      live_link: "https://mansoori-construction-website.vercel.app"   
    },
    {
      name: "Uber Clone",
      description:
        "In this App is a platform that mimics the functionality of ride-hailing apps like Uber, allowing users to book rides, to accept requests, and administrators to manage the platform. Key features include user-friendly interfaces, real-time tracking and Created an Authentication for sign up the user, login the user and logout the user and also sign up the captain, login the captain and logout the captain using JWT token.",
      tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"], // 👈 raw tech array
      image: uber,
      alt: 'uber clone app',
      source_code_link: "https://github.com/mohdamangithub/Uber_Clone",
      live_link: "https://uber-clone-frontend-swart.vercel.app"
    },
    {
      name: "Secret Generator",
      description:"I built a fully responsive Secret Generator App using React.js and Tailwind CSS. It allows users to generate secure passwords with options for uppercase, lowercase, numbers, and special characters — all within a smooth, minimal UI and This app also adapts automatically to system dark/light themes with seamless transitions powered by Framer Motion animations.",
      tech: ["ReactJs", "NodeJs"], // 👈 raw tech array
      image: secretGenerator,
      alt: 'secret generator app',
      source_code_link: "https://github.com/mohdamangithub/Secret-Generator",
      live_link: "https://secret-generator.vercel.app"
    },
    {
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built using React, Node.js, and MongoDB with animations and responsive design. I focus on creating seamless user experiences with clean code, accessibility, and optimized performance across devices.",
      tech: ["ReactJs", "TailwindCSS"], // 👈 raw tech array
      image: portfolio,
      alt: 'personal portfolio website',
      source_code_link: "https://github.com/mohdamangithub/Aman-Portfolio",
      live_link: "https://aman-portfolio-psi-ten.vercel.app"
    },
  ];

export {
  navLinks,
  services,
  technologies,
  experiences,
  tools,
  projects
};
