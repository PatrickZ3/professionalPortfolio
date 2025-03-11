"use client";
import Image from "next/image";
import React from "react";
import projectsData from "../data/project"

interface ProjectType {
    name: string;
    image: string;
    description: string;
    github: string;
    liveDemo: string;
}

export default function Project() {
    const featuredProject = projectsData.find(item => item.input === "featuredProject")?.return || [];
    return (
        <div className="about-containers !m-0">
            {featuredProject.map((project: ProjectType, index: number) => (
                <div key={index} className="details-container color-container flex flex-col items-center">
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
                        <button className="btn btn-color-2 project-btn flex items-center gap-1" onClick={() => window.open(project.github, '_blank')}>
                            <Image
                                src="/github.png"
                                alt="GitHub"
                                className="w-4 h-4 github-icon"
                                width={20}
                                height={20}
                            />
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn flex items-center gap-1" onClick={() => window.open(project.liveDemo, '_blank')}>
                            Live Demo
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
    )
}
