"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import About from "./components/about";
import SkillDetail from "./components/skillDetail"
import Project from "./components/project"
import Contact from "./components/contact";

export default function Home() {

  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  };

  const programmingLanguages = [
    "Javascript",
    "Python",
    "SQL",
    "Typescript",
    "HTML",
    "CSS",
    "PostgreSQL"
  ];

  const technologies = [
    "Next.js",
    "Node.js",
    "React.js",
    "Tailwind",
  ];

  const developerTools = [
    "Git",
    "Docker",
    "AWS",
    "VS Code"
  ];

  return (
    <div>
      <nav className="desktop-nav">
        <div className="logo">Patrick<span className="dot">.</span>Lay</div>
        <div>
          <ul className="nav-links">
            {["About", "Skills", "Projects", "Contacts"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="nav-item">
                  {item}
                  <motion.div
                    className="underline"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </li>
            ))}
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
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contacts" onClick={toggleMenu}>Contacts</a></li>
          </div>
        </div>
      </nav>
      <section className="profile" id="profile">
        <div className="section__pic-container"></div>
        <div className="section__text">
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
              onClick={() => location.href = '#contact'}
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

      <section className="about" id="about">
        <div className="section__text__p1"> Get To Know More</div>
        <div className="title">About Me</div>
        <About />
        <Image
          src="/arrow.png"
          alt="arrow"
          className="icon arrow"
          width={30}
          height={30}
          onClick={() => (window.location.href = "#skills")}
        />
      </section>
      <section className="skills" id="skills">
        <div className="section__text__p1"> Explore My</div>
        <div className="title">Skills</div>
        <div className="skills-details-container">
          <div className="about-containers">
            <div className="details-container">
              <div className="skills-sub-title">Programming Languages</div>
              <div className="article-container">
                {programmingLanguages.map((language, index) => (
                  <SkillDetail key={index} skillName={language} />
                ))}
              </div>
            </div>
            <div className="details-container">
              <div className="skills-sub-title">Technologies</div>
              <div className="article-container">
                {technologies.map((language, index) => (
                  <SkillDetail key={index} skillName={language} />
                ))}
              </div>
            </div>
            <div className="details-container">
              <div className="skills-sub-title">Developer Tools</div>
              <div className="article-container">
                {developerTools.map((language, index) => (
                  <SkillDetail key={index} skillName={language} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/arrow.png"
          alt="arrow"
          className="icon arrow"
          width={30}
          height={30}
          onClick={() => (window.location.href = "#projects")}
        />
      </section>
      <section className="projects" id="projects">
        <div className="section__text__p1">My Featured</div>
        <div className="title">Projects</div>
        <div className="skills-details-container">
          <Project />

        </div>
        <button
          className="btn-learnMore !pt-4"
          onClick={() => location.href = '#contact'}
        >
          <div className="learnMore ">More Projects </div>
          <Image
            src="/next.png"
            alt="next"
            className="nextArrow"
            width={15}
            height={15}
          />
        </button>
        <Image
          src="/arrow.png"
          alt="arrow"
          className="icon arrow"
          width={30}
          height={30}
          onClick={() => (window.location.href = "#contacts")}
        />
      </section>
      <section className="contacts" id="contacts">
        <div className="section__text__p1">Get in Touch</div>
        <div className="title">Contact Me</div>
        <Contact />
      </section>
    </div>
  );
}
