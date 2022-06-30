import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

function NavBar(){
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return(
        <div className="flex justify-between items-center w-full h-20 text-[#FBEEC1] bg-gradient-to-b from-[#8D8741] to-inherit px-4 fixed">
            <div>
                <h1 className="text-4xl font-name ml-2">Austin Lu</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({link, id}) => {
                    return(
                    <li 
                        key={id} 
                        className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                    )
                })}
            </ul>

            <button onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </button>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({link, id}) => {
                        return(
                        <li 
                            key={id} 
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link to={link} onClick={()=> setNav(!nav)} smooth duration={500}>{link}</Link>
                        </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default NavBar