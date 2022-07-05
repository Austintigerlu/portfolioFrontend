import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll"

function Home(){
    return(
        <div name="home" className="h-screen w-full bg-gradient-to-b from-[#202124] to-[#282C2F]">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full px-5 text-[#f1f0ec]">
                    <p className="font-bold">
                        Hi, my name is
                    </p>
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        Austin Lu
                    </h2>
                    <h2 className="text-4xl sm:text-7xl font-bold py-4">
                    Full Stack Developer
                    </h2>
                    <div>
                        <Link 
                            to="projects"
                            smooth
                            duration={500}
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r text-[#f1f0ec] from-[#09203F] to-[#3c627e] cursor-pointer"
                        >
                            Projects
                            <span
                                className="group-hover:rotate-90 duration-300"
                            >
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;