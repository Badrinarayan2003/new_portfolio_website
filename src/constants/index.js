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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lexe_logo,
  lexe_logo_1,
  Bootstrap,
  github1
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
    title: "Mobile App Developer",
    icon: creator,
  },
  {
    title: "React Native",
    icon: mobile,
  },
  {
    title: "React js",
    icon: web,
  },
  {
    title: "Node js",
    icon: backend,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "github",
    icon: github1,
  },
  {
    name: "git",
    icon: git,
  },

  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Junior Mobile App Developer",
    company_name: "Lexmetech systems pvt. ltd.",
    icon: lexe_logo,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Developing and maintaining both Mobile and web applications using React Native and React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ganesh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ganesh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ganesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media App",
    description:
      "Developed a cross-platform Social Media App with React Native, featuring user profiles, posts, comments, likes, and messaging. Focused on performance, accessibility, and user privacy for a seamless and secure experience.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
    ],
    image: 'https://i.ibb.co/nzRfRj7/project-1.png',
    source_code_link: "https://github.com/",
  },
  {
    name: "Betting WebApp",
    description:
      "Developed the frontend of a betting web app using HTML, CSS, JavaScript, and Bootstrap. Collaborated with the backend team using PHP to create a responsive and dynamic user interface, ensuring seamless functionality and cross-device compatibility.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: 'https://i.ibb.co/Ny22tvP/project-2.png',
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommmerce Website",
    description:
      "Developed the frontend of an e-commerce website using React, creating dynamic and responsive user interfaces. Implemented features like product listings, shopping carts, and user authentication, ensuring a seamless and engaging shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://i.ibb.co/JdXXpwF/project-3.png',
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
