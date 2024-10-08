"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "AI-Powered Smart Contract Auditor",
    description:
      "Led the development of DefiGuard, an innovative smart contract auditing tool that uses advanced language models to streamline the auditing process for Ethereum-based contracts. This solution significantly improved efficiency, cutting down manual auditing work by 80% and ensuring thorough and accurate audits.",
    technologies: ["Python", "Solidity", "Web3.py"],
    github: "https://github.com/saineshnakra/DefixGuard",
    demo: "https://defix-guard-crypto.vercel.app/",
  },
  {
    title: "Grim Repor: AI-Powered Framework for Fixing Dead Dependencies",
    description:
      "Automated the identification and fixing of broken dependencies in Python repositories, reducing manual effort by 50%. Deployed with GCP and integrated a Twitter bot for real-time updates.",
    technologies: ["Python", "NextJS", "HuggingFace", "GCP"],
    github: "https://github.com/sundai-club/grimrepor",
    demo: "https://grimrepor.sundai.club/",
  },
  {
    title: "GetMeAJob - Job Application Tracker",
    description:
      "Developed a web application to help users track job applications and stay organized during the job hunt. Github is pvt, please visit the website instead!",
    technologies: ["React", "Firebase"],
    demo: "https://getmeajob.vercel.app",
  },
  {
    title: "Automatic Lung Segmentation of Chest X-Ray",
    description:
      "Created a Deep Convolutional Network for X-ray image segmentation, increasing accuracy by 20%.",
    technologies: ["Keras", "Python", "PyTorch"],
    github: "https://github.com/arunitmaity/CXR-Lung-Segmentation-DCNN",
    demo: "https://www.youtube.com/watch?v=LknW9qrlbgA&t=203s",
  },

  {
    title: "Liza Chatbot: Enhancing a Classic NLP Model",
    description:
      "Enhanced the classic Eliza chatbot by improving keyword prioritization, memory management, and fallback mechanisms to handle complex interactions more naturally while retaining the original pattern-matching algorithm.",
    technologies: ["Python", "NLP"],
    github: "https://github.com/saineshnakra",
    demo: "https://chatwitheliza.streamlit.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "An informative portfolio website made using HTML, CSS, Bootstrap, JavaScript, and jQuery. It includes a CV layout, downloadable resume, and contact details.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    demo: "https://sainesh.com",
  },
  {
    title: "The 2048 Game",
    description:
      "Redesigned the UI for the popular 2048 game to make it ad-free and visually engaging. Implemented using JavaScript and made open-source for customization.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://project-7551190131884617807.web.app",
  },
  {
    title: "Netflix Clone (SNSTREAM)",
    description:
      "Used React to recreate the Netflix UI with real-time data updates for shows, using API endpoints to ensure fresh content each time.",
    technologies: ["React", "API"],
    demo: "https://login-95344.web.app",
  },
  {
    title: "Tavern Social",
    description:
      "Developed an informative website for a blockchain-based social media platform currently in the development phase.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://tavernsocial-75b27.web.app",
  },
  {
    title: "E-Commerce Website UI",
    description:
      "Designed the frontend experience for an e-commerce store landing page using HTML, CSS, JavaScript, and jQuery.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    demo: "https://saineshnakra.github.io",
  },
  {
    title: "LinkedIn Clone Using React",
    description:
      "Developed an interactive LinkedIn-clone with advanced authentication, allowing seamless user functionality for posting content and managing profiles.",
    technologies: ["React", "Firebase"],
    demo: "https://linkedin-clone-b19eb.web.app",
  },
  {
    title: "Arcade Snake Game",
    description:
      "Recreated the popular snake video game with a cleaner UI using HTML, CSS, and vanilla JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://snakegame-26ca8.web.app",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-10 md:py-20 bg-secondary relative"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-8 md:mb-12">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      },
                    }
                  : {}
              }
              className="transform transition-transform ease-in-out animate-fade-in-mobile w-full"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary text-sm py-1 px-2 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiGithub className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
