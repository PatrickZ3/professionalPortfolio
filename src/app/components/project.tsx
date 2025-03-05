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
        <div>
            {featuredProject.map((project: ProjectType, index: number) => (
                <div key={index} className="details-container color-container">
                    <div>
                        <Image
                            src={project.image}
                            alt={project.name}
                            className="project-img"
                            width={1500}
                            height={1500}
                        />
                    </div>
                    <div className="skills-sub-title project-title">
                        {project.name}
                    </div>
                    <div>{project.description}</div>
                    <div className="btn-container">
                        <button className="btn btn-color-2 project-btn" onClick={() => window.open(project.github, '_blank')}>
                            Github
                        </button>
                        <button className="btn btn-color-2 project-btn" onClick={() => window.open(project.liveDemo, '_blank')}>
                            Live Demo
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
