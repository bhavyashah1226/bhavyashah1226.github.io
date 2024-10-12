import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  roost,
  homedroid,
  dps,
  lnmiit,
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
];

const experiences = [
  {
    title: "Android Developer Intern",
    company_name: "Homedroid Technologies",
    icon: homedroid,
    iconBg: "#E6DEDD",
    iconBg: "#212337",
    date: "Sep 2019 - Nov 2019",
    points: [
      "Create an app for users to place orders for any product, track delivery, track installation and any servicing related to the product",
      "Create an app for the service engineers who are assigned to different locations for installations and servicing of products",
      "An admin side application to monitor all sales, services, delivery etc",
      `Modified their existing "My Personal Assistant" app which included different components like events, reminders, document storage, 
      task reminders etc just like a personal assistant. Optimized code for maximum performance and efficiency.`,
    ],
  },
  {
    title: "Software Trainee",
    company_name: "Roost.Ai",
    icon: roost,
    iconBg: "#212337",
    date: "Jan 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Member of Technical Staff",
    company_name: "Roost.Ai",
    icon: roost,
    iconBg: "#212337",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web application using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Involved in Prompt Engineering and using nodejs to integrate ChatGPT and its features in the product",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
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
    image: carrent,
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

const education = [
  {
    title: "High School Diploma",
    company_name: "Delhi Public School, Harni ,Vadodara",
    icon: dps,
    iconBg: "#E6DEDD",
    date: "Apr 2007 - March 2018",
    points: [],
  },
  {
    title: "Bachelor of Technolofy (CCE)",
    company_name: "The LNM Institute of Information Technology, Jaipur",
    icon: lnmiit,
    iconBg: "#212337",
    date: "June 2018 - April 2022",
    points: [],
  },
];

export { technologies, experiences, projects, education };
