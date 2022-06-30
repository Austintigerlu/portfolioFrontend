import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll"

function Home(){
    return(
        <div name="home" className="h-screen w-full bg-gradient-to-b from-[#8D8741] to-[#DAAD86]">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        Hi,
                    </h2>
                    <h2 className="text-4xl sm:text-7xl font-bold">
                        I'm Austin Lu
                    </h2>
                    <p className="py-4 max-w-md">
                    I'm a full stack software engineer
                    </p>
                    <div>
                        <Link 
                            to="projects"
                            smooth
                            duration={500}
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#576d85] to-[#659DBD] cursor-pointer"
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