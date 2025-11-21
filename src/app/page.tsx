"use client"
import Image from "next/image";
import Project from "./components/project"
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

  return (
    <div>
      <section className="profile" id="profile">
        <div className="section__pic-container"></div>
        <div className="section__text">
          <h1 className="title"> Patrick<span className="dot">.</span>Lay</h1>
          <p className="section__text__p2">Full-Stack Software Engineer</p>
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
            <a
              href="mailto:Patzesantoso@gmail.com"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
              aria-label="Email"
            >
              <Image
                src="/MailIcon.png"
                alt="Mail Me Icon"
                className="icon"
                width={32}
                height={32}
              />
              <span className="text-sm font-medium hidden sm:inline">Patzesantoso@gmail.com</span>
            </a>
          </div>
        </div>
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
      </section>

    </div>
  );
}
