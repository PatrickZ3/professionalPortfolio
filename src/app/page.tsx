"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import About from "./components/about";
import SkillDetail from "./components/skillDetail"
import Project from "./components/project"
import Contact from "./components/contact";
import Footer from "./components/footer";
import Experience from "./components/experience";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth <= 480) {
        setTouchStartX(e.touches[0].clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.innerWidth <= 480) {
        setTouchEndX(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      if (window.innerWidth > 480) return;

      const swipeDistance = touchStartX - touchEndX;
      if (swipeDistance > 50) {
        
        setIsMenuOpen(true);
      } else if (swipeDistance < -50) {
        
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, touchEndX]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");

      if (
        isMenuOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        icon &&
        !icon.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const programmingLanguages = [
    "Javascript",
    "Python",
    "Typescript",
    "SQL",
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
    "VSCode"
  ];

  return (
    <div>
      <nav className="desktop-nav" id="home">
        <div className="logo">Patrick<span className="dot">.</span>Lay</div>
        <div>
          <ul className="nav-links">
            {["About", "Skills", "Experiences", "Projects", "Contacts"].map((item) => (
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
      <div className={`overlay ${isMenuOpen ? "show" : ""}`} onClick={() => setIsMenuOpen(false)}></div>
      <nav className="hamburger-nav">
        <div className="logo" id="home">Patrick<span className="dot">.</span>Lay</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
            <li><a href="#about" className="links" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="links" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#experiences" className="links" onClick={toggleMenu}>Experiences</a></li>
            <li><a href="#projects" className="links" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contacts" className="links" onClick={toggleMenu}>Contacts</a></li>
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
              {`Let's Connect 👋`}
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
          onClick={() => (window.location.href = "#experiences")}
        />
      </section>
      <section className="experiences" id="experiences">
        <div className="section__text__p1">Discover My</div>
        <div className="title">Experiences</div>
        <Experience />
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
          onClick={() => router.push("/allProject")}
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
        <Image
          src="/arrow.png"
          alt="arrow"
          className="icon arrow"
          width={30}
          height={30}
          style={{ rotate: "180deg" }}
          onClick={() => (window.location.href = "#home")}
        />
      </section>

      <Footer />

    </div>
  );
}
