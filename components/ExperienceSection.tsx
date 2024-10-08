"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

type TimelineItemType = "work" | "education";

const timelineData: {
  title: string;
  company?: string;
  institution?: string;
  date: string;
  description: string[];
  type: TimelineItemType;
  startDate: Date;
  endDate: Date;
}[] = [
  {
    title: "Research Assistant",
    company: "Khoury College of Computer Science, Northeastern University",
    date: "Apr 2024 - Present",
    description: [
      "Led the development of ML-powered tools for streamlining smart contract audits, enhancing efficiency by 80%.",
      "Integrated established tools with language model-driven insights, resulting in a 30% increase in audit accuracy and reducing processing time from days to minutes.",
    ],
    type: "work",
    startDate: new Date("2024-04-01"),
    endDate: new Date(),
  },
  {
    title: "Master of Science in Computer Science",
    institution: "Northeastern University, Boston, MA",
    date: "Sep 2023 - May 2025",
    description: [
      "Relevant Coursework: Software Engineering, Scalable Distributed Systems, Algorithms, Programming Design Paradigms, Natural Language Processing, Machine Learning.",
    ],
    type: "education",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2025-05-31"),
  },
  {
    title: "Software Engineer",
    company: "Bosch Global Software Technologies",
    date: "Mar 2021 - Aug 2023",
    description: [
      "Developed cloud-based web functionalities for Audi and Volkswagen, improving system reliability by 25%.",
      "Led a team of 3 engineers to design a Radar List Handling feature, increasing diagnostic accuracy by 15%.",
      "Integrated Bosch's Central Secure Gateway with PACCAR trucks, enhancing system reliability by 20% across 185,900+ vehicles.",
    ],
    type: "work",
    startDate: new Date("2021-03-01"),
    endDate: new Date("2023-08-31"),
  },
  {
    title: "Software Engineering Intern",
    company: "Honda Cars India Pvt Ltd",
    date: "Jan 2021 - Mar 2021",
    description: [
      "Redesigned the UI of Honda Cars' mobile app, resulting in a 15% increase in user engagement and satisfaction.",
    ],
    type: "work",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-03-31"),
  },
  {
    title: "Software Engineering Intern",
    company: "NEC Technologies Pvt Ltd",
    date: "May 2019 - Jun 2019",
    description: [
      "Contributed to back-end development using RabbitMQ for real-time messaging in a government defense project, improving load-handling capacity by 400%.",
    ],
    type: "work",
    startDate: new Date("2019-05-01"),
    endDate: new Date("2019-06-30"),
  },
  {
    title: "Research Assistant",
    company: "VIT Innovation Labs, Vellore, India",
    date: "Feb 2018 - Mar 2018",
    description: [
      "Led rapid prototyping sessions for VR depth perception studies, conducting over 200 trials to gather patient data and refine product features.",
    ],
    type: "work",
    startDate: new Date("2018-02-01"),
    endDate: new Date("2018-03-31"),
  },
  {
    title:
      "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Vellore Institute of Technology, Vellore, India",
    date: "Jul 2017 - Jul 2021",
    description: [
      "Relevant Coursework: Operating Systems, Computer Networks, Web Development, Database Management Systems.",
    ],
    type: "education",
    startDate: new Date("2017-07-01"),
    endDate: new Date("2021-07-31"),
  },
];

export default function ExperienceSection() {
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
      { threshold: 0.2 }
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

  const workItems = timelineData.filter((item) => item.type === "work");
  const educationItems = timelineData.filter(
    (item) => item.type === "education"
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-10 md:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading text-center mb-8 md:mb-12"
        >
          Work Experience & Education
        </motion.h2>

        {/* For mobile, split into two separate timelines */}
        <div className="md:hidden">
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          {workItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              inView={inView}
            />
          ))}

          <h3 className="text-xl font-semibold mt-8 mb-4">Education</h3>
          {educationItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* For larger screens, use the regular timeline */}
        <div className="relative hidden md:block">
          {/* Vertical line for desktop view */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>

          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  inView,
}: {
  item: (typeof timelineData)[0];
  index: number;
  inView: boolean;
}) {
  const isEducation = item.type === "education";

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-start mb-8 ${
        isEducation ? "education-item" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {isEducation ? (
        <>
          <div className="w-full md:w-5/12 md:pr-8 md:text-right">
            <TimelineCard item={item} />
          </div>
          <div className="hidden md:block w-2/12">
            <TimelineIcon type={item.type} />
          </div>
          <div className="hidden md:block w-5/12"></div>
        </>
      ) : (
        <>
          <div className="hidden md:block w-5/12"></div>
          <div className="hidden md:block w-2/12">
            <TimelineIcon type={item.type} />
          </div>
          <div className="w-full md:w-5/12 md:pl-8 md:text-left">
            <TimelineCard item={item} />
          </div>
        </>
      )}
    </motion.div>
  );
}

function TimelineCard({ item }: { item: (typeof timelineData)[0] }) {
  return (
    <Card className="shadow-md h-full animate-fade-in-mobile">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
        <CardDescription className="text-sm">
          {item.company || item.institution}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {item.description.map((desc, i) => (
            <li key={i} className="text-muted-foreground">
              {desc}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function TimelineIcon({ type }: { type: "work" | "education" }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
        {type === "work" ? (
          <Briefcase className="w-4 h-4 text-primary-foreground" />
        ) : (
          <GraduationCap className="w-4 h-4 text-primary-foreground" />
        )}
      </div>
    </div>
  );
}
