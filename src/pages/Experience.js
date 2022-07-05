import React from "react";
import bootstrap from "../assets/bootstrap.png"
import css from "../assets/css-3.png"
import django from "../assets/django.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import js from "../assets/js.png"
import mongoDB from "../assets/mongoDB.png"
import PostgreSQL from "../assets/PostgreSQL.png"
import python from "../assets/python.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind-css.png"
import express from "../assets/express.png"
import sass from "../assets/sass.png"
import heroku from "../assets/heroku.png"

function Experience(){
    
    const technologies = [
        {
            id: 1,
            src: js,
            name: "Javascript",
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            src: python,
            name: "Python",
            style: 'shadow-[#4B8BBE]'
        },
        {
            id: 3,
            src: react,
            name: "React",
            style: 'shadow-[#61DBFB]'
        },
        {
            id: 4,
            src: css,
            name: "CSS",
            style: 'shadow-[#264de4]'
        },
        {
            id: 5,
            src: bootstrap,
            name: "Bootstrap",
            style: 'shadow-[#563d7c]'
        },
        {
            id: 6,
            src: django,
            name: "Django",
            style: 'shadow-[#092E20]'
        },
        {
            id: 7,
            src: github,
            name: "Github",
            style: 'shadow-[#211F1F]'
        },
        {
            id: 8,
            src: html,
            name: "HTML",
            style: 'shadow-[#e34c26]'
        },
        {
            id: 9,
            src: mongoDB,
            name: "MongoDB",
            style: 'shadow-[#3FA037]'
        },
        {
            id: 10,
            src: PostgreSQL,
            name: "PostgreSQL",
            style: 'shadow-[#0064a5]'
        },
        {
            id: 11,
            src: tailwind,
            name: "Tailwind",
            style: 'shadow-sky-400'
        },
        {
            id: 12,
            src: express,
            name: "Express",
            style: 'shadow-gray-500'
        },
        {
            id: 13,
            src: sass,
            name: "Sass",
            style: 'shadow-[#cd6799]'
        },
        {
            id: 14,
            src: heroku,
            name: "Heroku",
            style: 'shadow-[#C9C3E6]'
        },
    ]

    return(
        <div name="experience" className="w-full md:h-screen bg-[#282C2F] text-[#f1f0ec]">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">// Here are some of the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-3 sm:grid-cols-7 gap-8 text-center py-8 px-12 sm:px-0">
                    {technologies.map(({id, src, name, style}) => {
                        return(
                            <div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + style}>
                                <img src={src} alt={name} className="w-20 mx-auto"/>
                                <p className="mt-4">{name}</p>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Experience;