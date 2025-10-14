"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import Swiper modules
import { Navigation } from "swiper/modules";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Web Application",
    title: "Movie Explorer",
    desc: "Built a real-time movie search interface using the TMDb API with global state management and intuitive navigation. Features dynamic search, favorites persistence, and enhanced UX with React Router.",
    stack: [
      { name: "React.js" },
      { name: "React Router" },
      { name: "Context API" },
      { name: "TMDb API" },
      { name: "LocalStorage" },
    ],
    image: "/assets/movies.png",
    live: "#",
    github: "#",
  },
  {
    num: "02",
    category: "Frontend Project",
    title: "Zomato Landing Page",
    desc: "Developed a responsive, pixel-perfect landing page using HTML and CSS to mimic Zomato's modern UI. Focused on creating an exact replica with attention to detail and responsive design principles.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Responsive Design" }],
    image: "/assets/work/zomato-clone.png",
    live: "#",
    github: "#",
  },
  {
    num: "03",
    category: "JavaScript Projects",
    title: "JavaScript Mini-Projects",
    desc: "Built multiple interactive applications including a Dice Roller for simultaneous multi-die rolling, Random Password Generator with customizable character sets, and Temperature Converter showcasing dynamic DOM manipulation.",
    stack: [
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "DOM Manipulation" },
    ],
    image: "/assets/work/js-projects.png",
    live: "#",
    github: "#",
  },
  {
    num: "04",
    category: "AI Application",
    title: "AI Resume Analyzer",
    desc: "Currently developing an intelligent resume analysis tool that evaluates resumes against job descriptions, provides feedback, and suggests improvements. Features AI-powered analysis and detailed reporting.",
    stack: [
      { name: "React.js" },
      { name: "AI/ML" },
      { name: "Node.js" },
      { name: "API Integration" },
    ],
    image: "/assets/work/ai-resume.png",
    live: "#",
    github: "#",
    status: "In Development",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* description */}
              <p className="text-white/60">{project.desc}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border-b border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Preview</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              modules={[Navigation]}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button  */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all duration-300"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
