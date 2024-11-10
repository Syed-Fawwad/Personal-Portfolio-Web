/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { title } from "process";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Typescript</li>
        <li>JAvascript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Digital Marketing</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Cloud Applied Generative Al Engineering - [Governor House, Ongoing]
        </li>
        <li>
          Bachelor in Computer-Science - [Ilma University, Expected
          Graduation: 2028]
        </li>
        <li>Intermediate in [Engineering] - [DJ-Science College, 2022-2024]</li>
        <li>Matriculation in [Your Major] - [SMPS, 2021]</li>
        <li>Hifz-ul-Quran [Faizan-e-Madina, 2016]</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Hifz-ul-Quran 
          Institution: Faizan-e-Madina Year of Completion: 2016
        </li>
        <li>Digital Marketing 
            Institution: Korean Computer Academy</li>
        <li>
          Certificate in Information Technology (CIT) 
          Institution: Korean Computer Academy
        </li>
      </ul>
    ),
  },
];

const AboutSec = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/Aboutsec.jpg" alt="About" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className=" text-base lg:text-lg">
            I am Fawwad, a Software Engineering student at Ilma University, expected to graduate in 2028. With a foundation in engineering from DJ Science College and certifications in Cloud Applied Generative AI, Digital Marketing, and IT from the Korean Computer Academy, I bring a versatile skill set in technology and business. My commitment to continuous learning and my background as a Hafiz reflect my dedication and discipline in all pursuits.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}Certifications{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t)=>t.id===tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;