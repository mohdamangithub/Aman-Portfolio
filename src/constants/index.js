import {
  web,
  frontend,
  backend,
  fullStack,
  html,
  css,
  javascript,
  reactjs,
  redux,
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
  Mansoori_Ecommerce
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
  { name: "Redux Toolkit", icon: redux },
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
    name: "Mansoori Ecommerce",
    description:"Built a Full-stack e-commerce web application with JWT-based authentication, product management, and secure checkout. Implemented image uploads using Multer and Cloudinary, advanced product filtering, cart and order management, Razorpay and Cash on Delivery payments, user order tracking, and an admin panel for managing products and orders.",
    tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"], // 👈 raw tech array
    image: Mansoori_Ecommerce,
    alt: "personal portfolio website",
    source_code_link: "https://github.com/mohdamangithub/Mansoori-Ecommerce",
    live_link: "https://mansoori-ecommerce-frontend.vercel.app",
  },
  {
    name: "Ackshaya Dental Clinic",
    description:
      "Developed a Dental Care Clinic website for a client, featuring online appointment booking, membership plans, blogs, and additional user-focused features to enhance patient engagement and clinic visibility.",
    tech: ["ReactJs", "TailwindCSS"], // 👈 raw tech array
    image: dental,
    alt: "dental clinic website",
    source_code_link: "https://github.com/mohdamangithub/Dentist_Website",
    live_link: "https://dentist-website-chi.vercel.app",
  },
  {
    name: "Dot International India",
    description:
      "Developed a client website for Dot International, a company specializing in creating impactful exhibition experiences, highlighting its services and strong presence across India.",
    tech: ["ReactJs", "TailwindCSS"], // 👈 raw tech array
    image: dotInternational,
    alt: "dot international website",
    source_code_link: "https://github.com/mohdamangithub/Dot_International",
    live_link: "https://dot-international.vercel.app",
  },
  {
    name: "Mansoori Construction",
    description:
      "Developed a professional website for my family’s construction firm, a Public Works Department (PWD) government contractor, showcasing its expertise and trusted role in delivering government infrastructure projects.",
    tech: ["NextJs", "TailwindCSS"], // 👈 raw tech array
    image: mansooriConstruction,
    alt: "mansoori construction website",
    source_code_link:
      "https://github.com/mohdamangithub/Mansoori-Construction-Website",
    live_link: "https://mansoori-construction-website.vercel.app",
  },
  {
    name: "Uber Clone",
    description:
      "Developed a ride-hailing web application inspired by platforms like Uber, enabling users to book rides, captains to accept ride requests, and administrators to manage the platform efficiently. Implemented secure JWT-based authentication for users and captains, including signup, login, and logout functionality. Designed user-friendly interfaces with real-time ride tracking to ensure a smooth and reliable booking experience.",
    tech: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"], // 👈 raw tech array
    image: uber,
    alt: "uber clone app",
    source_code_link: "https://github.com/mohdamangithub/Uber_Clone",
    live_link: "https://uber-clone-frontend-swart.vercel.app",
  },
  {
    name: "Secret Generator",
    description:
      "Built a fully responsive Secret Generator application using React.js and Tailwind CSS, enabling users to generate secure passwords with customizable character options. Implemented automatic dark/light theme support with smooth UI transitions powered by Framer Motion animations.",
    tech: ["ReactJs", "NodeJs"], // 👈 raw tech array
    image: secretGenerator,
    alt: "secret generator app",
    source_code_link: "https://github.com/mohdamangithub/Secret-Generator",
    live_link: "https://secret-generator.vercel.app",
  },
];

export { navLinks, services, technologies, experiences, tools, projects };
