import Image from "next/image";
import Anpha from "../../public/logoanpha.jpg";
import ANTD from "../../public/technologies/antd.png";
import GIT from "../../public/technologies/git.png";
import JAVASCRIPT from "../../public/technologies/javascript.png";
import MONGO from "../../public/technologies/mongodb.png";
import NEXT from "../../public/technologies/nextjs.png";
import NODE from "../../public/technologies/nodejs.png";
import REACT from "../../public/technologies/reactjs.png";
import REDUX from "../../public/technologies/redux.png";
import TAILWIND from "../../public/technologies/tailwind.png";
import TYPESCRIPT from "../../public/technologies/typescript.png";
import MU from "../../public/technologies/mui.png";
import R from "../../public/technologies/reactquery.png";
import Zustand from "../../public/technologies/zustand.png";
import Nest from "../../public/technologies/nestjs.png";
import Mysql from "../../public/technologies/mysql.png";

import Project1 from "../../public/project1.webp";
import Project2 from "../../public/project2.jpg";
import Project3 from "../../public/project3.jpg";
import Project01 from "../../public/project0.1.png";
import Project02 from "../../public/project0.2.png";
import Project03 from "../../public/project0.3.png";
import Project04 from "../../public/project0.4.png";

export const MENU_HEADER = [
  { title: "About", id: "#overview", delay: "200" },
  { title: "Work Experience", id: "#workexperience", delay: "300" },
  { title: "Skills", id: "#technologies", delay: "400" },
  { title: "Project", id: "#project", delay: "500" },
  { title: "Contact", id: "#contact", delay: "600" },
];

export const TECHNOLOGIES = [
  { name: "NextJS", icon: <Image src={NEXT} alt="icon" /> },
  { name: "Typescript", icon: <Image src={TYPESCRIPT} alt="icon" /> },
  { name: "Javascript", icon: <Image src={JAVASCRIPT} alt="icon" /> },
  { name: "React", icon: <Image src={REACT} alt="icon" /> },
  { name: "Tailwind", icon: <Image src={TAILWIND} alt="icon" /> },
  { name: "MUI", icon: <Image src={MU} alt="icon" /> },
  { name: "Ant Design", icon: <Image src={ANTD} alt="icon" /> },
  { name: "Redux", icon: <Image src={REDUX} alt="icon" /> },
  { name: "React Query", icon: <Image src={R} alt="icon" /> },
  { name: "Zustand", icon: <Image src={Zustand} alt="icon" /> },
  { name: "Git", icon: <Image src={GIT} alt="icon" /> },
  { name: "NestJS", icon: <Image src={Nest} alt="icon" /> },
  { name: "MongoDB", icon: <Image src={MONGO} alt="icon" /> },
  { name: "MySQL", icon: <Image src={Mysql} alt="icon" /> },
  { name: "NodeJS", icon: <Image src={NODE} alt="icon" /> },
];

export const projects = [
  {
    name: "Admin E-Commerce",
    description:
      "This is the administration website of Anpha Petrol company. The website has a wide range of functionalities such as VoIP, CRUD products, debt management, invoice creation, order creation, user role management, and more",
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
