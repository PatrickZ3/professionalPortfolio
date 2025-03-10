"use client"
import React from 'react'
import { CiCalendar } from "react-icons/ci";

interface ExperienceData {
    role: string;
    company: string;
    date: string;
}


function renderExperienceData({ role, company, date }: ExperienceData, index: number) {
    const isEven = index % 2 === 0;

    return (
        <div className="experience__data">
            {isEven ? (
                <>
                    <div>
                        <h3 className="experience__title">{role}</h3>
                        <span className="experience__subtitle">{company}</span>
                        <div className="experience__calender">
                            <CiCalendar className="experience__icon" /> {date}
                        </div>
                    </div>
                    <div>
                        <span className="experience__rounder"></span>
                        <span className="experience__line"></span>
                    </div>
                </>
            ) : (
                <>
                    <div></div>
                    <div>
                        <span className="experience__rounder"></span>
                        <span className="experience__line"></span>
                    </div>
                    <div>
                        <h3 className="experience__title">{role}</h3>
                        <span className="experience__subtitle">{company}</span>
                        <div className="experience__calender">
                            <CiCalendar className="experience__icon" /> {date}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default function Experience() {
    const experienceList: ExperienceData[] = [
        { role: "E-Sports Athlete", company: "Toronto Metropolitan University", date: "Sep 2021 - Apr 2024" },
        { role: "Software Engineer", company: "Armonía", date: "Sep 2024 - Dec 2024" },
    ];
    return (
        <div>
            <div className="experience__tabs">
                <div className="experience__button button--flex">
                    <i className="uil uil-briefcase-alt experience__icon"></i>
                </div>


            </div>
            <div className="experience__sections">
                <div className="experience__content">
                    {experienceList.map((experience, index) => <React.Fragment key={index}>{renderExperienceData(experience, index)}</React.Fragment>)}

                </div>
            </div>
            <div className='present__container'>
                <p className='present__text'>Present</p>
            </div>

        </div>
    )
}
