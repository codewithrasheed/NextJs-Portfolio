'use client';
import heroImg from "../../public/hero-img.png";
import Image from "next/image";
import Link from "next/link";
import Type from "./Type";

const Home = () => {
        
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 style={{ fontSize: "50px" }}>Rasheed Ahmed</h1>
        <Type />
        <p>
          Hi, I&apos;m Rasheed Ahmed, a dedicated MERN Stack Developer and Next.js
          specialist. I focus on building scalable, dynamic, and responsive web
          applications using modern frameworks and libraries. With expertise in
          MongoDB, Express, React, Node.js, and Next.js, I create robust,
          user-centric interfaces that ensure seamless and engaging user
          experiences. My goal is to combine functionality with clean, efficient
          code to deliver powerful web solutions.
        </p>
        <button className="btn">
          <Link
            href="https://drive.google.com/uc?export=download&id=1wTgL9T0JCbZaKRRs6X5Sqcdo0A8ETyKm"
            legacyBehavior
          >
            <a download>Download Resume</a>
          </Link>
        </button>
      </div>
      <div className="hero-img">
        <Image className="heroImg" src={heroImg} alt="hero-img" />
      </div>
    </section>
  );
};

export default Home;
