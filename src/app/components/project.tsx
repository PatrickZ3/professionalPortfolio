"use client";
import Image from "next/image";
import React from "react";

interface ProjectType {
    name: string;
    image: string;
    description: string;
    github: string;
    liveDemo: string;
}

const projectsList: ProjectType[] = [
    { name: "Project1", image: "/holder.png", description: "test", github: "https://www.google.com", liveDemo: "https://www.google.com" },
    { name: "Project2", image: "/holder.png", description: "test2", github: "https://www.google.com", liveDemo: "https://www.google.com" },
    { name: "Project3", image: "/holder.png", description: "test3", github: "https://www.google.com", liveDemo: "https://www.google.com" },
]
export default function Project() {
    return (
        <div>
            {projectsList.map((project: ProjectType, index: number) => (
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
