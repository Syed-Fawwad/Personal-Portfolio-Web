/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d]">
              Hello I&apos;m {""}
            </span>
            <br />

            <TypeAnimation
              sequence={[
                "Syed Fawwad",
                1000,
                "Web Developer",
                1000,
                "Digital Marketer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] mb-6 text-base sm:text-lg lg:text-xl ">
            Software Engineering student with skills in generative AI, cloud
            computing, and digital marketing. Passionate about tech and
            continuous learning.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-[#43cea2] via-[#008080] to-[#185a9d] hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-[#43cea2] via-[#008080] to-[#185a9d] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative flex items-center justify-center">
            <Image
              src={"/profile.png"}
              width={300}
              height={300}
              className="rounded-full object-cover"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;