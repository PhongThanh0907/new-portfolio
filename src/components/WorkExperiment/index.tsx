"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

import TextLight from "../TextLight";
import Anpha from "../../../public/logoanpha.jpg";
import { useTranslation } from "@/providers/TranslateProvider";

const ExperienceCard = React.memo(({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-stone-100 text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-gray-400 tracking-wider text-[18px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p className="text-gray-400 tracking-wider text-[18px] font-semibold">
          Team size: {experience.teamSize}
        </p>
      </div>
      <p>
        Technology:{" "}
        <span className="text-white-100 tracking-wider">
          {experience.technology}
        </span>
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: any, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

ExperienceCard.displayName = "ExperienceCard";

const WorkExperienceMemo = () => {
  const { t } = useTranslation();

  const EXPERIMENTS = [
    {
      title: "Frontend Developer",
      company_name: "Acom Company",
      icon: Anpha,
      teamSize: 8,
      iconBg: "#383E56",
      date: "June 2022 - Present",
      technology:
        "HTML, CSS, Javascript, Typescript, ReactJS, Redux-saga, Redux, TailwindCSS, Ant Design, MySQL, NodeJS, More... ",
      points: [
        `${t("job-desc-1")}`,
        `${t("job-desc-2")}`,
        `${t("job-desc-3")}`,
        `${t("job-desc-4")}`,
      ],
    },
  ];

  return (
    <>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        id="workexperience"
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center py-20"
      >
        <p className="text-gray-400 text-md lg:text-lg m-auto my-2 uppercase">
          {t("company")}
        </p>
        <div className="flex  justify-center">
          <TextLight title={t("work-experience")} />
        </div>
      </motion.div>

      <div className="mt-10 lg:mt-0 flex flex-col">
        <VerticalTimeline>
          {EXPERIMENTS.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const WorkExperience = React.memo(WorkExperienceMemo);

export default WorkExperience;
