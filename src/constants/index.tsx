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
  