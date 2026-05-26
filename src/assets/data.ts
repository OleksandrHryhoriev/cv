import type { Occupation, SidebarBlock } from "../types/types";

export const SKILLS: SidebarBlock = [
   {
      title: "coding skills",
      skills: [
         "JavaScript, Typescript",
         "React, Next",
         "Redux Toolkit, Zustand",
         "NodeJS, Express",
         "MongoDB",
         "HTML5, CSS3, SASS",
         "Git",
         "Figma, PS",
      ],
   },
   {
      title: "soft skills",
      skills: [
         "Team-player",
         "Result oriented",
         "Responsiveness",
         "Problem Solving",
         "Critical Thinking",
         "Time managment",
         "Adaptiveness",
         "Self-organized",
      ],
   },
   {
      title: "languages",
      skills: ["Ukrainian", "English (intermidiate)", "Russian"],
   },
];
export const EXPERIENCE: Omit<Occupation, "type">[] = [
   {
      position: "Frontend Developer",
      place: "Freelance",
      period: {
         start: "2022",
         end: "current",
      },
   },
   {
      position: "Air Traffic Controller",
      place: "UkSATSE",
      period: {
         start: "2006",
         end: "current",
      },
   },
];
export const EDUCATION: Occupation[] = [
   {
      position: "Software Developer",
      place: "Open-access Courses",
      type: "Self-studying",
      period: {
         start: "2021",
         end: "current",
      },
   },
   {
      position: "General and Aviation English",
      place: "MLS International College, GB",
      type: "Course",
      period: {
         start: "2013",
      },
   },
   {
      position: "Air Traffic Control Service",
      place: "State Flight Academy of Ukraine",
      type: "Specialist Degree",
      period: {
         start: "2001",
         end: "2006",
      },
   },
];
