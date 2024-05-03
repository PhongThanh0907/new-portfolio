import React, { useCallback, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import { useTranslation } from "@/providers/TranslateProvider";

import GitHub from "../../../public/github.png";
import TextLight from "../TextLight";
import Project01 from "../../../public/project0.1.png";
import Project02 from "../../../public/project0.2.png";
import Project03 from "../../../public/project0.3.png";
import Project11 from "../../../public/project1.1.png";
import Project12 from "../../../public/project1.2.png";
import Project13 from "../../../public/project1.3.png";
import Project21 from "../../../public/project2.2.png";
import Project22 from "../../../public/project2.3.png";
import Project23 from "../../../public/project2.4.png";
import Project31 from "../../../public/project3.1.png";
import Project32 from "../../../public/project3.2.png";
import Project33 from "../../../public/project3.3.png";
import Project41 from "../../../public/project4.1.png";
import Project42 from "../../../public/project4.2.png";
import Project43 from "../../../public/project4.3.png";
import TextTruncate from "../TextTruncate";
import Modal from "../Modal/Modal";

const ProjectCard = React.memo(
  ({
    index,
    title,
    description,
    tags,
    img,
    team,
    technology,
    role,
  }: {
    index: number;
    title: string;
    description: string;
    functionRole: string;
    technology: string[];
    role: string;
    team: number;
    img: StaticImageData[];
    tags: {
      name: string;
      color: string;
    }[];
  }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleClose = useCallback(() => {
      setOpenModal(false);
    }, []);

    return (
      <motion.div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[460px] relative hover:cursor-pointer"
        >
          <div
            onClick={() => setOpenModal(!openModal)}
            className="relative w-full h-[230px]"
          >
            <Image
              src={img[0]}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() =>
                  window.open("https://github.com/PhongThanh0907", "_blank")
                }
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={GitHub}
                  alt="SourceCode"
                  className="w-1/2 h-1/2 object-contain bg-white rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-gray-400 text-[14px]">
              <TextTruncate text={description} />
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 absolute bottom-5">
            {tags.map((tag) => (
              <p
                key={`${title}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
        {openModal && (
          <Modal
            name={title}
            description={description}
            tags={tags}
            image={img}
            open={openModal}
            handleClose={handleClose}
            teamSize={team}
            technical={technology}
            myRole={role}
          />
        )}
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

const ProjectMemo = () => {
  const slideRef = useRef<HTMLDivElement | any>(null);
  const { t } = useTranslation();

  const projects = [
    {
      title: "OMS Hasaki",
      description:
        "This is the order management system of Hasaki, managing orders from partners such as Shopee, Lazada, and TikTok. It allows for order adjustments and integration with the WMS system to manage inventory, packaging, delivery, returns and more.",
      functionRole:
        "This is the human resource management website of Hasaki Company. The website offers a wide range of functionalities such as order CRUD (Create, Read, Update, Delete), report order, report payment, among others.",
      technology: [
        "ReactJS",
        "Typescript",
        "Zustand",
        "Ant Design",
        "TailwindCSS",
      ],
      role: "Frontend Developer",
      team: 8,
      img: [Project31, Project32, Project33],
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
          name: "MUI",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "react-query",
          color: "text-orange-500",
        },
        {
          name: "zustand",
          color: "text-yellow-500",
        },
      ],
    },
    {
      title: "OMS-WMS Integration Project",
      description:
        "A project to integrate the Order Management System with the Warehouse Management System",
      functionRole:
        "This is the administration website of Anpha Petrol company. The website has a wide range of functionalities such as VoIP, CRUD products, Debt management, Invoice creation, Order creation, User role management and more.",
      technology: [
        "ReactJS",
        "Javascript",
        "Redux-Toolkit",
        "Ant Design",
        "SocketIO",
        "TailwindCSS",
      ],
      role: "Frontend Developer",
      team: 8,
      img: [Project01, Project02, Project03],
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "javascript",
          color: "text-[#00FFFF]",
        },
        {
          name: "socket-io",
          color: "text-[#ADFF2F]",
        },
        {
          name: "redux-toolkit",
          color: "text-yellow-500",
        },
        {
          name: "antd",
          color: "text-green-500",
        },
        {
          name: "tailwind",
          color: "text-purple-500",
        },
      ],
    },

    {
      title: "Human Resource Management",
      description:
        "A project to manage the human resources of the company, including employee information, salary, contract, attendance, and more.",
      functionRole:
        "This is the human resource management website of Anphapetrol Company. The website offers a wide range of functionalities such as employee CRUD (Create, Read, Update, Delete), contract management, appointments, dismissals, department management, commendations, and resignations, among others.",
      technology: [
        "ReactJS",
        "Typescript",
        "Redux-Toolkit",
        "Ant Design",
        "TailwindCSS",
      ],
      role: "Frontend Developer",
      team: 4,
      img: [Project11, Project12, Project13],
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
          name: "antd",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "redux-toolkit",
          color: "text-yellow-500",
        },
      ],
    },

    {
      title: "Admin KPI",
      description:
        "This is a website used to create company strategies for each stage.",
      functionRole:
        "This is administration website of BSC Company. This website features functions such as creating company strategies, generating KPIs for each department and individual, and assigning specific tasks to each department, individual and more.",
      technology: [
        "ReactJS",
        "Typescript",
        "Redux-Toolkit",
        "MUI",
        "SocketIO",
        "TailwindCSS",
      ],
      role: "Fullstack Developer",
      team: 4,
      img: [Project21, Project22, Project23],
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
          name: "MUI",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "redux-toolkit",
          color: "text-yellow-500",
        },
        {
          name: "nestjs",
          color: "text-purple-500",
        },
        {
          name: "react-query",
          color: "text-orange-500",
        },
      ],
    },

    {
      title: "CDP Hasaki",
      description:
        "A Customer Data Platform (CDP) is a software system designed to consolidate and manage customer data from various sources. Its primary purpose is to organize customer data in a structured and unified manner to provide detailed and comprehensive insights into customer behavior and preferences for marketing, sales, and service strategies.",
      functionRole:
        "This is the human resource management website of Hasaki Company. The website offers a wide range of functionalities such as customer CRUD (Create, Read, Update, Delete), rule segment, among others.",
      technology: ["ReactJS", "Typescript", "Zustand", "MUI", "TailwindCSS"],
      role: "Frontend Developer",
      team: 8,
      img: [Project41, Project42, Project43],
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
          name: "MUI",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "react-query",
          color: "text-orange-500",
        },
      ],
    },
  ];

  const scrollLeft = () => {
    if (slideRef.current?.scrollLeft && slideRef.current?.scrollLeft >= 0) {
      return (slideRef.current.scrollLeft -= 400);
    }
  };
  const scrollRight = () => {
    if (slideRef.current?.scrollLeft || slideRef.current.scrollLeft >= 0) {
      return (slideRef.current.scrollLeft += 400);
    }
  };
  return (
    <div
      id="project"
      className="max-w-7xl mx-auto lg:h-screen relative px-6 lg:px-0 py-10"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-gray-400 text-md lg:text-lg mb-2">{t("my-work")}</p>
        <TextLight title={t("project")} />
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{
            x: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-gray-400 tracking-wider mt-4 text-[17px] leading-[30px]"
        >
          {t("text-project")}
        </motion.p>
      </div>
      <button className="hidden lg:flex p-2 m-2 rounded-full absolute  bottom-52 -left-16 text-gray-500 hover:text-white duration-200">
        <ChevronLeftIcon className="h-10 w-10" onClick={() => scrollLeft()} />
      </button>
      <button className="hidden lg:flex  p-2 m-2 rounded-full absolute  bottom-52  -right-16 text-gray-500 hover:text-white duration-200">
        <ChevronRightIcon className="h-10 w-10" onClick={() => scrollRight()} />
      </button>

      <div
        className="mt-4 grid grid-cols-1 lg:flex lg:py-10 gap-7 overflow-x-auto max-w-7xl scrollbar-hide overflow-hidden"
        ref={slideRef}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              y: 300,
              opacity: 0,
            }}
            transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="hidden lg:flex"
          >
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </motion.div>
        ))}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              y: 300,
              opacity: 0,
            }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:hidden"
          >
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
const Project = React.memo(ProjectMemo);

export default Project;
