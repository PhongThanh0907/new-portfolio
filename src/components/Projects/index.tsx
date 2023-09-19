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
import Project04 from "../../../public/project0.4.png";
import Project11 from "../../../public/project1.1.png";
import Project12 from "../../../public/project1.2.png";
import Project13 from "../../../public/project1.3.png";
import Project21 from "../../../public/project2.2.png";
import Project22 from "../../../public/project2.3.png";
import Project23 from "../../../public/project2.4.png";
import Project31 from "../../../public/project1.webp";
import TextTruncate from "../TextTruncate";
import Modal from "../Modal/Modal";

const ProjectCard = React.memo(
  ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    teamSize,
    technical,
    myRole,
    linkGithub,
    linkWeb,
  }: {
    index: number;
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: StaticImageData[];
    source_code_link: string;
    teamSize: number;
    technical: string[];
    myRole: string;
    linkGithub?: string;
    linkWeb?: string;
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
              src={image[0]}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
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
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-gray-400 text-[14px]">
              <TextTruncate text={description} />
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 absolute bottom-5">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
        {openModal && (
          <Modal
            name={name}
            description={description}
            tags={tags}
            image={image}
            source={source_code_link}
            open={openModal}
            handleClose={handleClose}
            teamSize={teamSize}
            technical={technical}
            myRole={myRole}
            linkGithub={linkGithub}
            linkWeb={linkWeb}
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
      name: "Admin E-Commerce",
      description: `${t("text-project-01")}`,
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
          name: "antd",
          color: "text-green-500",
        },
        {
          name: "tailwind",
          color: "text-purple-500",
        },
      ],
      image: [Project01, Project02, Project03, Project04],
      source_code_link: "https://github.com/PhongThanh0907/Shop-Ecommerce-V2",
      myRole: "Frontend Developer",
      teamSize: 8,
      technical: [
        "React",
        "Redux",
        "TailwindCSS",
        "Ant Design",
        "SocketIO",
        "NodeJS",
        "MySQL",
      ],
    },
    {
      name: "Human Resource Management",
      description: `${t("text-project-02")}`,
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
      ],
      image: [Project11, Project12, Project13],
      source_code_link: "https://github.com/PhongThanh0907/my-blog",
      teamSize: 8,
      myRole: "Frontend Developer",
      technical: [
        "React",
        "Redux",
        "TailwindCSS",
        "Ant Design",
        "Typescript",
        "NodeJS",
        "MySQL",
      ],
    },
    {
      name: "Admin KPI",
      description: `${t("text-project-03")}`,
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
          name: "nestjs",
          color: "text-purple-500",
        },
        {
          name: "react-query",
          color: "text-orange-500",
        },
      ],
      image: [Project21, Project22, Project23],
      source_code_link: "https://github.com/PhongThanh0907/my-blog",
      myRole: "Frontend Developer",
      teamSize: 4,
      technical: [
        "React",
        "Typescript",
        "Redux-Toolkit",
        "TailwindCSS",
        "MUI",
        "NestJS",
      ],
    },
    {
      name: "E-commerce Clone",
      description: `${t("text-project-04")}`,
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
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "redux-toolkit",
          color: "text-[#ADFF2F]",
        },
        {
          name: "nodejs",
          color: "text-purple-500",
        },
      ],
      image: [Project31],
      source_code_link: "https://github.com/PhongThanh0907/my-blog",
      myRole: "Fullstack",
      teamSize: 1,
      technical: [
        "React",
        "Typescript",
        "Redux-Toolkit",
        "TailwindCSS",
        "MUI",
        "NestJS",
      ],
      linkGithub: "https://github.com/PhongThanh0907/Shop-Ecom",
      linkWeb: "https://shop-ecom-phi.vercel.app/",
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
