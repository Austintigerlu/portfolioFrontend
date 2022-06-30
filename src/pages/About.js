import React from "react";

function About(){
    return(
        <div name="about" className="w-full h-screen bg-gradient-to-b from-[#DAAD86] to-[#BC986A]">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl">
                A full-stack software engineer with a background in clinical research and healthcare. Focusing on user experience and designing programs with users in mind. Providing compassion and support to build a better world through software development.
                </p>
            </div>
        </div>
    )
}

export default About;