import Image from 'next/image'
import React from 'react'
// import aboutImg from '../../public/Rasheed_pic.jpg'
import aboutImg from '../../public/about-img.png'
import Link from 'next/link'
const About = () => {
  return (
    <>
        <div className='about' id='about'>
            <div className='heading-container'>
            <h1>About Me</h1>
            </div>
            <div className='aboutBody'>
            <div className='aboutImage'>
                <Image className='aboutImg' src={aboutImg}  alt='Rasheed_Ahmed'/>
            </div>
            <div className='aboutText'>
                <h1>Rasheed Ahmed</h1>
                <h2>MERN Stack Developer | Next.Js Developer</h2>
                <p>
                    I am a passionate MERN Stack Developer specializing in building intuitive and responsive web applications using MongoDB, Express.js, React, Node.js, and Next.js. With a strong foundation in front-end technologies like HTML, CSS, JavaScript, and TypeScript, I transform design concepts into seamless digital experiences. My focus is on writing clean, maintainable code, optimizing performance, and delivering user-friendly interfaces while ensuring robust back-end functionality.
                </p>
                <div className='aboutLinks'>
                <button><Link href={"https://www.linkedin.com/in/rasheed-kashif495/"}>LinkedIn</Link></button>
                <button><Link href={"https://github.com/codewithrasheed"}>Github</Link></button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default About