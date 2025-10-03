"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLinux,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About Me",
  description:
    "I am a passionate software programmer with expertise in JavaScript, React, and Next.js. I love creating efficient and user-friendly applications that solve real-world problems. With a strong foundation in modern technologies, I am committed to continuous learning and growth in the ever-evolving tech landscape.",
  info: [
    { fieldName: "Name", value: "Vaibhav Baliyan" },
    {
      fieldName: "Phone",
      value: "(+91) 8287498577",
    },
    {
      fieldName: "Experience",
      value: "1+ Years",
    },
    {
      fieldName: "Email",
      value: "vaibhavbaliyan2002.com",
    },
    {
      fieldName: "Website",
      value: "https://vaibhavbaliyan2002.com  ",
    },
    {
      fieldName: "City",
      value: "New Delhi, India",
    },
  ],
};
const experience = {
  icon: "app/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on various projects ranging from web applications to mobile apps. My experience includes collaborating with cross-functional teams, implementing responsive designs, and optimizing performance for better user experience.",
  items: [
    {
      company: "Colt Technologies Ltd.",
      position: "Software Programmer - Apprentice",
      duration: "Dec 2024 - Present",
    },
  ],
};
const education = {
  icon: "app/resume/cap.svg",
  title: "My Education",
  description:
    "I have a strong educational background in engineering. My studies have provided me with a solid foundation in programming principles, algorithms, and software development methodologies.",
  items: [
    {
      institution: "Dr. A. P. J. Abdul Kalam Technical University",
      degree: "B.Tech",
      duration: "2020 - 2024",
    },
    {
      institution: "Delhi Police Public School",
      degree: "Higher Secondary Education",
      duration: "2017 - 2019",
    },
    {
      institution: "Udemy ",
      degree: "Modern JavaScript - Brad Traversy",
      duration: "2025",
    },
    {
      institution: "Online Course ",
      degree: "React - The Complete Guide",
      duration: "2024",
    },
    {
      institution: "Online Course ",
      degree: "Frontend Development",
      duration: "2024 - 2025",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Here are some of the technologies and tools I am proficient in:",
  skillsList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, ease: "easeIn", delay: 2.4 },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent className="w-full" value="experience">
              {experience.description}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
