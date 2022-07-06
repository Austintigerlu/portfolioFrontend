import React from "react";

function Contact(){
    return(
        <div name='contact' className="w-full h-screen bg-[#323639] text-[#f1f0ec]">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#00FFFF]">Contact</p>
                    <p className="py-6"><span className="text-[#00FFFF]">//</span> Submit the form to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/dfe07823-2256-4145-bcad-602f78658d39" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                        <input type="text" name="email" placeholder="Email" className="p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                        <textarea name="message" rows="6" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md focus:outline-none">

                        </textarea>

                        <button className="bg-[#f1f0ec] text-[#323639] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;