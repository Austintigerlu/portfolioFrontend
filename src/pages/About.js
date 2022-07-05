import React from "react";

function About(){
    return(
        <div name="about" className="w-full h-screen bg-[#282C2F]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-[#f1f0ec] w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
                </div>
                <p className="text-xl">
                Hi! I'm Austin Lu, a talented and dedicated full-stack developer. I have a background in research and healthcare. I enjoy analyzing challenging issues to create captivating experiences and designing programs with users in mind
                </p>
                <p className="text-xl pt-5">
                I have developed websites using HTML, CSS, Python, and Javascript. I have created APIs using Django and Express frameworks
                </p>
            </div>
        </div>
    )
}

export default About;