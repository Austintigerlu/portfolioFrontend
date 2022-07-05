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
            name: "Restaurant Review Website",
            demo: "https://foodie-atlanta.netlify.app/",
            code: "https://github.com/Austintigerlu/foodie-frontend"
        },
        {
            id: 2, 
            src: translate,
            name: "Translation Website",
            demo: "https://main--duo-amigo.netlify.app/",
            code: "https://github.com/Austintigerlu/translate-frontend",
        },
        {
            id: 3, 
            src: marketplace,
            name: "E-commerce Store",
            demo: "https://depop-deup.herokuapp.com/",
            code: "https://github.com/Austintigerlu/depop-project2",
        },
        {
            id: 4, 
            src: blackjack,
            name: "Black Jack Game",
            demo: "https://austintigerlu.github.io/BlackJack-Game/",
            code: "https://github.com/Austintigerlu/BlackJack-Game",
        },
    ]

    return(
        <div name="projects" className="w-full md:h-screen bg-gradient-to-b from-[#282C2F] to-[#323639] text-[#f1f0ec]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className="py-6">// Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 px-12 sm:px-0">
                    {projects.map(({id, src, name, demo, code})=> {
                        return(
                            <div key={id} style={{backgroundImage: `url(${src})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                                <div className="opacity-0 group-hover:opacity-100">
                                    <span className="text-2xl font-bold tracking-wider">
                                        {name}
                                    </span>
                                    <div className="pt-8 text-center">
                                        <a href={demo} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Demo</button>
                                        </a>
                                        <a href={code} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Code</button>
                                        </a>
                                    </div>
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