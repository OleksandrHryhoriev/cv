import type { Occupation, PortfolioItem, SidebarBlock } from "../types/types";

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
export const PORTFOLIO: PortfolioItem[] = [
   {
      type: "commercial",
      title: 'IV International Forum "Human Capital"',
      // link: "https://forum2023.nqa.gov.ua/",
      link: "https://human-capital-2023.netlify.app/",
      imageUrl: "img/hum-cap-4.jpg",
      upload: 20231201,
   },
   {
      type: "commercial",
      title: 'International Forum "Human Capital 2024"',
      // link: "https://forum2024.nqa.gov.ua/",
      link: "https://human-capital-2024.netlify.app/",
      imageUrl: "img/hum-cap-2024.jpg",
      upload: 20241201,
   },
   {
      type: "commercial",
      title: 'International Forum "Human Capital 2025"',
      // link: "https://forum2025.nqa.gov.ua/",
      link: "https://human-capital-2025.netlify.app/",
      imageUrl: "img/hum-cap-2025.jpg",
      upload: 20251201,
   },
   {
      type: "react",
      title: "Image Generator",
      link: "https://image-generator-06-2025.netlify.app/",
      imageUrl: "img/image-generator-app.jpg",
      upload: 20251001,
   },
   {
      type: "other",
      title: 'Landing "Learn"',
      link: "https://oleksandrhryhoriev.github.io/Learn/",
      imageUrl: "img/learn.jpg",
      upload: 20230601,
   },
   {
      type: "other",
      title: 'Landing "FURNITURE SHOP"',
      link: "https://oleksandrhryhoriev.github.io/Furniture_Shop/",
      imageUrl: "img/furniture-shop.jpg",
      upload: 20230801,
   },
   {
      type: "other",
      title: 'Landing "DAUNKU"',
      link: "http://oleksandrhryhoriev.github.io/Daunku/",
      imageUrl: "img/daunku.jpg",
      upload: 20230401,
   },
   {
      type: "other",
      title: 'Landing "AI.MAN"',
      link: "http://oleksandrhryhoriev.github.io/AI.MAN/",
      imageUrl: "img/aiman.jpg",
      upload: 20230501,
   },
   {
      type: "other",
      title: 'E-commerce "HorDog"',
      link: "http://oleksandrhryhoriev.github.io/HorDog/rootpage.html",
      imageUrl: "img/hordog-rootpage.jpg",
      upload: 20230301,
   },
];
