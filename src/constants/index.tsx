import Image from 'next/image';
import Anpha from '../../public/logoanpha.jpg'
import ANTD from '../../public/technologies/antd.png'
import CSS from '../../public/technologies/css.png'
import GIT from '../../public/technologies/git.png'
import HTML from '../../public/technologies/html.png'
import JAVASCRIPT from '../../public/technologies/javascript.png'
import MONGO from '../../public/technologies/mongodb.png'
import NEXT from '../../public/technologies/nextjs.png'
import NODE from '../../public/technologies/nodejs.png'
import REACT from '../../public/technologies/reactjs.png'
import REDUX from '../../public/technologies/redux.png'
import TAILWIND from '../../public/technologies/tailwind.png'
import TYPESCRIPT from '../../public/technologies/typescript.png'
import Project1 from '../../public/project1.webp'
import Project2 from '../../public/project2.jpg'
import Project3 from '../../public/project3.jpg'

export const MENU_HEADER = [
    { title: "About", id: "#overview", delay: "200" },
    { title: "Work Experience", id: "#workexperience", delay: "300" },
    { title: "Skills", id: "#technologies", delay: "400" },
    { title: "Project", id: "#project", delay: "500" },
    { title: "Contact", id: "#contact", delay: "600" },
  ];

  export const TECHNOLOGIES = [
    {
      name: "HTML 5",
      icon: <Image src={HTML} alt="icon" />,
    },
    {
      name: "CSS 3",
      icon: <Image src={CSS} alt="icon" />,
    },
    {
      name: "JavaScript",
      icon: <Image src={JAVASCRIPT} alt="icon" />,
    },
    {
      name: "TypeScript",
      icon: <Image src={TYPESCRIPT} alt="icon" />,
    },
    {
      name: "React JS",
      icon: <Image src={REACT} alt="icon" />,
    },
    {
      name: "Next JS",
      icon: <Image src={NEXT} alt="icon" />,
    },
    {
      name: "Redux Toolkit",
      icon: <Image src={REDUX} alt="icon" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Image src={TAILWIND} alt="icon" />,
    },
    {
      name: "Ant Design",
      icon: <Image src={ANTD} alt="icon" />,
    },
    {
      name: "Node JS",
      icon: <Image src={NODE} alt="icon" />,
    },
    {
      name: "MongoDB",
      icon: <Image src={MONGO} alt="icon" />,
    },
  
    {
      name: "git",
      icon: <Image src={GIT} alt="icon" />,
    },
  ];
  
  export const projects = [
    {
      name: "Shop Card",
      description:
        "Build user UX/UI, show products, search by brands, type, price and sort, shopping cart, others...",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-[#00FFFF]",
        },
        {
          name: "nodejs",
          color: "text-[#ADFF2F]",
        },
        {
          name: "mongodb",
          color: "text-green-500",
        },
        {
          name: "tailwind",
          color: "text-purple-500",
        },
      ],
      image: Project1,
      source_code_link: "https://github.com/PhongThanh0907/Shop-Ecommerce-V2",
    },
    {
      name: "Porfolio",
      description: "Build UX/UI, Animation, Show information",
      tags: [
        {
          name: "nextjs",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-[#00FFFF]",
        },
        {
          name: "three",
          color: "text-[#ADFF2F]",
        },
        {
          name: "framer-motion",
          color: "text-green-500",
        },
        {
          name: "tailwind",
          color: "text-purple-500",
        },
      ],
      image: Project2,
      source_code_link: "https://github.com/PhongThanh0907/my-blog",
    },
    {
      name: "CineClone",
      description: "Build UX/UI, Login, Register",
      tags: [
        {
          name: "reactjs",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-[#00FFFF]",
        },
        {
          name: "nodejs",
          color: "text-[#ADFF2F]",
        },
        {
          name: "mongoDB",
          color: "text-green-500",
        },
        {
          name: "tailwind",
          color: "text-purple-500",
        },
      ],
      image: Project3,
      source_code_link: "https://github.com/PhongThanh0907/my-blog",
    },
  ];