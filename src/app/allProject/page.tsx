"use client";
import Image from "next/image";
import React from "react";
import { projectsData } from "../data/project"
import { useRouter } from "next/navigation"; 

interface ProjectType {
  name: string;
  image: string;
  description: string;
  github: string;
  liveDemo: string;
}

export default function AllProject() {
  const router = useRouter();
  const allProjects = projectsData.find(item => item.input === "projectsList")?.return || [];
  return (
    <div>
      <Image
        src="/arrow.png"
        alt="arrow"
        className="backArrow"
        width={30}
        height={30}
        style={{ rotate: "90deg" }}
        onClick={() => router.push("/")}
      />
      <div className="allproject-container">

        {allProjects.map((project: ProjectType, index: number) => (
          <div key={index} className="allproject-detail-container color-container flex flex-col items-center">
            <Image
              src={project.image}
              alt={project.name}
              className="project-img"
              width={400}
              height={300}
            />

            <div className="skills-sub-title">
              {project.name}
            </div>
            <div className="project-description">{project.description}</div>
            <div className="btn-container">
              <button className="btnProj btn-color-2 project-btn flex items-center gap-1" onClick={() => window.open(project.github, '_blank')}>
                <Image
                  src="/github.png"
                  alt="GitHub"
                  className="w-4 h-4 github-icon"
                  width={20}
                  height={20}
                />
                Github
              </button>
              <button className="btnProj btn-color-2 project-btn flex items-center gap-1" onClick={() => window.open(project.liveDemo, '_blank')}>
                Preview
                <Image
                  src="/external.png"
                  alt="external"
                  className="w-4 h-4 github-icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
