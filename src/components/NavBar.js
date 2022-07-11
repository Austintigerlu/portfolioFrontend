import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import logo from "../assets/logo_transparent.png"

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
            link: 'experience'
        },
        {
            id: 4,
            link: 'projects'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    
    const socials = [
        {
            id: 1,
            child: 'LinkedIn',
            logo: <FaLinkedin size={30}/>,
            href: 'https://www.linkedin.com/in/austin-tiger-lu/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: 'Github',
            logo: <FaGithub size={30}/>,
            href: 'https://github.com/Austintigerlu',
        },
        {
            id: 3,
            child: 'Mail',
            logo: <HiOutlineMail size={30}/>,
            href: 'mailto:austintigerlu@gmail.com',

        },
        {
            id: 4,
            child: 'Resume',
            logo: <BsFillPersonLinesFill size={30}/>,
            href: '/Austin - Lu - Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
    
    return(
        <div className="flex justify-between items-center w-full h-20 text-[#f1f0ec] bg-inherit px-4 fixed">
            <div className="flex">
                <img className="pt-3 w-24 items-center" src={logo}/>
                <h1 className="text-[#00FFFF] items-center text-4xl font-bold ml-2 hidden md:flex">Austin Lu</h1>
            </div>
            <div className="md:hidden mr-10">
                <h1 className="text-[#00FFFF] text-4xl font-bold flex md:hidden">Austin</h1>
            </div>

            <ul className="hidden lg:flex">
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
            
            <ul className="lg:hidden flex">
                {socials.filter((social)=> {
                    return social.child !== "Mail"
                }).map(({id, logo, href, download}) => {
                    return(
                        <li 
                            key={id} 
                            className="px-4"
                        >
                            <a href={href} download={download}>
                                {logo}
                            </a>
                        </li>
                    )
                })}
            </ul>

            <button onClick={() => setNav(!nav)} className="cursor-pointer pl-2 pr-2 z-10 lg:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </button>

            {nav && (

                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#202124] to-[#323639] text-[#f1f0ec]">
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
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul>
                    {socials.map(({id, child, href, style, download, logo}) => {
                        return(
                            <li 
                                key={id} 
                                className={"flex justify-between items-center w-40 h-14 pl-10 pr-3 text-[#f1f0ec] bg-inherit ml-[-110px] hover:ml-[-32px] hover:rounded-md duration-300 "+ style}
                            >
                                <a href={href} download={download} className="flex justify-between items-center w-full">
                                    {child}{logo}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavBar