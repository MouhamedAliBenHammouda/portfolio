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
  tesla,
  Htsoft,
  Award,
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
    name: "Award-Winning Landing Page",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Award,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };