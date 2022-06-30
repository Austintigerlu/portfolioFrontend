import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import profilePic from "../assets/IMG_9653.JPG"

function Home(){
    return(
        <div name="home" className="h-screen w-full bg-gradient-to-b to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        Full Stack Developer
                    </h2>
                    <p className="py-4 max-w-md">
                    Full-stack software engineer with a background in clinical research and healthcare. Focusing on user experience and designing programs with users in mind. Providing compassion and support to build a better world through software development.
                    </p>
                    <div>
                        <button 
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span
                                className="group-hover:rotate-90 duration-300"
                            >
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={profilePic} alt="profile" className="rounded-2xl mx-auto w-2/3 md:w-72"/>
                </div>
            </div>
        </div>
    )
}

export default Home;