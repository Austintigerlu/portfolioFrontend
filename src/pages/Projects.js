import React from "react";
import blackjack from "../assets/portfolio/blackjack.png"
import marketplace from "../assets/portfolio/marketplace.png"
import translate from "../assets/portfolio/translate.png"
import foodie from "../assets/portfolio/foodie.png"


function Projects(){

    const projects = [
        {
            id: 1, 
            src: foodie,
            name: "Restaurant Review Website"
        },
        {
            id: 2, 
            src: translate,
            name: "Translation Website"
        },
        {
            id: 3, 
            src: marketplace,
            name: "E-commerce Store"
        },
        {
            id: 4, 
            src: blackjack,
            name: "Black Jack Game"
        },
    ]

    return(
        <div name="projects" className="w-full h-screen md:h-screen bg-gradient-to-b from-[#BC986A] to-[#8D8741]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
                    {projects.map(({id, src, name})=> {
                        return(
                            <div key={id} className="shadow-md">
                                <div className="">
                                    <img src={src} alt={name} className="rounded-md"/>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Projects;