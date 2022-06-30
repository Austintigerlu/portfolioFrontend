import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"


function NavBar(){
    const [nav, setNav] = useState(false)
    console.log(nav)
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
            link: 'portfolio'
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
        <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
            <div>
                <h1 className="text-5xl font-name ml-2">Austin Lu</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({link, id}) => {
                    return(
                    <li 
                        key={id} 
                        className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
                    >
                        {link}
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
                            {link}
                        </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default NavBar