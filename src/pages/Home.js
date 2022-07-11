import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll"
import logo from "../assets/logo_transparent.png"


function Home(){
    return(
        <div name="home" className="h-screen w-full bg-gradient-to-b from-[#202124] to-[#282C2F]">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full text-[#f1f0ec]">
                    <p className="text-xl">
                        Hi, my name is
                    </p>
                    <h2 className="text-[#00FFFF] text-4xl sm:text-6xl font-bold py-2">
                        Austin Lu
                    </h2>
                    <h2 className="text-4xl sm:text-6xl pb-4">
                    I create things for the <span className="text-[#00FFFF] font-bold">web</span>
                    </h2>
                    <p className="text-xl pb-10">
                    I'm a <span className="text-[#00FFFF]">full-stack developer</span> with a background in research and healthcare
                    </p>
                    <div>
                        <Link 
                            to="projects"
                            smooth
                            duration={500}
                            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#00FFFF] text-[#282C2F] cursor-pointer"
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
                <div className="w-72 hidden lg:flex">
                    <img className="h-100" src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Home;