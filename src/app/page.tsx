"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {

  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  };

  return (
    <div>
      <nav className="desktop-nav">
        <div className="logo">Patrick<span className="dot">.</span>Lay</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </nav>
      <nav className="hamburger-nav">
        <div className="logo">Patrick<span className="dot">.</span>Lay</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contacts" onClick={toggleMenu}>Contacts</a></li>
          </div>
        </div>
      </nav>
      <section className="profile">
      <div className="section__pic-container"></div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title"> Patrick Lay</h1>
          <p className="section__text__p2">Software Engineer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('/PatrickLay_Resume.pdf', '_blank')}
            >
              Download Resume
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => location.href='#contact'}
            >
              Let's Connect 👋
            </button>
          </div>
          <div className="socials-container">
            <Image 
            src="/linkedin.png"
            alt="My LinkedIn Profile"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/pslay/', '_blank')}
            width={32}
            height={32}
            />
            <Image 
            src="/github.png"
            alt="My GitHub Profile"
            className="icon"
            onClick={() => window.open('https://www.github.com/PatrickZ3', '_blank')}
            width={32}
            height={32}
            />
          </div>
        </div>
      </section>

      <section className="about">
        <div className="section__text__p1"> Get To Know More</div>
        <div className="title">About Me</div>
        
      </section>
    </div>
  );
}
