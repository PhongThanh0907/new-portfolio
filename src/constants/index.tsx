import Image from "next/image";
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
