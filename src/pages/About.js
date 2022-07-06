import React from "react";

function About(){
    return(
        <div name="about" className="w-full h-screen bg-[#282C2F]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-[#f1f0ec] w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#00FFFF]">About Me</p>
                </div>
                <p className="text-xl">
                Hi! I'm <span className="text-[#00FFFF]">Austin Lu</span>, a talented and dedicated <span className="text-[#00FFFF]">full-stack developer</span>. Before learning to code, I worked in research and healthcare assisting in development of COVID vaccines. I enjoy analyzing challenging issues to create captivating experiences and designing programs with users in mind. 
                </p>
                <p className=" text-xl pt-5">
                I have developed websites using <span className="text-[#00FFFF]">HTML, CSS, and Javascript</span>. I use my creativity to design well-crafted components using <span className="text-[#00FFFF]">Tailwind, Bootstrap, and Sass</span> frameworks. With my background in research, I have experience with organizing data structures, and have used it to create RESTfulAPIs using <span className="text-[#00FFFF]">Django and Express</span> frameworks..
                </p>
            </div>
        </div>
    )
}

export default About;