/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./_components/HeroSection";
import NavBar from "./_components/NavBar";
import AboutSec from "./_components/AboutSec";
import ProjectsSection from "./_components/ProjectsSection";
import EmailSection from "./_components/Emailsection"
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
       
        <AboutSec />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

