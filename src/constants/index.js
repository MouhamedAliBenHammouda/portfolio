import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  SwiftCode,
  RelaySky,
  bs,
  Htsoft,
  Award,
  travel,
  iphone,
  jobit,
  tripguide,
  threejs,
  kamel,
  oussama,
  rim,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Back-End Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Business Soccer",
    icon: bs,
    iconBg: "#fcfcfcff",
    date: "Nov 2024 - Present",
    points: [
      "Designed and developed end-to-end features using React (TypeScript) on the front-end and Laravel on the back-end, deployed in a Docker environment. ",
      "Integrated Stripe for seamless subscription payments, including the setup of Stripe webhooks to handle payment confirmations, renewals, and cancellations.",
      "Implemented CI/CD pipelines for automated testing and deployment, ensuring code quality and rapid releases.",
      "Integrated RESTful APIs and Stripe payment solutions to streamline the subscription process and enhance user experience.",
    ],
  },
  {
    title: "Odoo Developer ",
    company_name: "Relay Sky",
    icon: RelaySky,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Nov 2024",
    points: [
      "Developed a custom Odoo CRM module for call center operations, enabling direct call initiation from customer records.",
      "Integrated Odoo with Asterisk via SIP for real-time call management (call creation, tracking, recordings).",
      "Configured Nginx with WebSocket to ensure real-time, bidirectional communication between Odoo (Python) and the Asterisk server.",
      "Customized front-end components using JavaScript, XML/QWeb, and Python on the back-end.",
    ],
  },
  {
    title: "Full-stack Developer Internship",
    company_name: "Htsoft",
    icon: Htsoft,
    iconBg: "#ffffffff",
    date: "Jan 2024 - May 2024",
    points: [
      "Designed and developed an innovative website for managing ISO standards, audit results, and non-conformity statistics, facilitating the centralization and efficient management of quality data.",
      "Developed a general function that allows the creation of multiple tables in a reduced time, thus optimizing data processing and improving operational efficiency.",
      "Translated the website into eight languages, making the site accessible to an international audience and facilitating global adoption.",
    ],
  },
  {
    title: "Full-stack Developer Internship",
    company_name: "SwiftCode",
    icon: SwiftCode,
    iconBg: "#000000ff",
    date: "Jan 2023 - Present",
    points: [
      "Developed a comprehensive banking application, including account management and transaction history. ",
      "Integrated a financial management dashboard that allows users to track, manage, and analyze their financial activities with real-time data visualization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:"Mohamed consistently demonstrated excellent professionalism and strong competence in  his responsibilities",
    name: "Kamel Mouelhi",
    designation: "CEO",
    company: "Busines Soccer",
    image: kamel,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mohamed Ali.",
    name: "Oussama Mellouli",
    designation: "CTO",
    company: "Htsoft",
    image: oussama,
  },
  {
    testimonial:"I thought it was impossible to make a website as beautiful as our product, but ali proved me wrong.",
    name: "Rim Ben Hamed",
    designation: "RAM",
    company: "Relay Sky",
    image: rim,
  },
];

const projects = [
  {
    name: "Redefin Landing Page",
    description:
      "I designed and developed a fully animated landing page using React.js, Tailwind CSS, and GSAP. The goal was to create a modern, interactive, and visually engaging website that delivers an immersive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Award,
    source_code_link: "https://github.com/MouhamedAliBenHammouda/Award/tree/main",
  },
  {
    name: "iPhone 15 Landing Page",
    description:
      "I recreated the Apple iPhone 15 Pro website by combining smooth GSAP animations with Three.js 3D effects. The project features custom animations and animated 3D models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
                  {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },

    ],
    image: iphone,
    source_code_link: "https://github.com/MouhamedAliBenHammouda/iphone",
  },
  {
    name: "Travel App Landing Page",
    description:
      "I built a modern travel application using Next.js 13, React.js, and Tailwind CSS, focusing on delivering a sleek and responsive user interface. The app follows mobile-first best practices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/MouhamedAliBenHammouda/Travel",
  },
];

export { services, technologies, experiences, testimonials, projects };