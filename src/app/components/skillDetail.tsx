"use client"
import Image from "next/image";
import React from 'react'

interface SkillDetailProps {
    skillName: string;
}

export default function SkillDetail({skillName}: SkillDetailProps) {
    return (
        <article className="skill-item">
            <Image
                src="/checkmark.png"
                alt="skills icon"
                className="skillIcon"
                width={20}
                height={20}
            />
            <div className="skill-name">
            {skillName}
            </div>
        </article>
    )
}
