import React, { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        Aos.init(); 
    }, []);

    return (
        <div className={`block h-screen w-full transition-all duration-300 ${isMenuOpen ? 'bg-black' : 'bg-gradient-to-t from-white to-gray'}`} >
            <nav className="flex justify-between items-center text-white py-6 px-4 md:px-16">
                <a href="https://www.facebook.com/jake.cabrillos.31" target="_blank" rel="noopener noreferrer" className="hover:scale-x-105 transition-all">
                    <h4 className="font-normal tracking-wider text-sm md:text-lg text-white" data-aos="fade-left">Jake Cabrillos</h4>
                </a>
                <ul className="hidden md:flex items-center gap-12 font-thin text-base" data-aos="fade-left">
                    <a href="#home"><li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">Home</li> </a>
                    <a href="#about"><li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">About Me</li ></a>
                    <a href="#experience"><li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">Experience</li> </a>
                    <a href="#contact"><li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">Contact Me</li> </a>
                </ul>
                <i
                    className="bx bx-menu-alt-right md:hidden block text-2xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    data-aos="fade-left"
                    aria-label="Toggle menu"
                ></i>
                <div
                    className={`absolute xl:hidden top-20 left-0 w-full flex flex-col items-center gap-6 font-thin text-sm transition-all z-10 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    style={{ transition: "opacity 0.3s ease" }}
                >
                    <ul className={`w-full flex flex-col items-center transition-all duration-300 ${isMenuOpen ? "bg-inherit" : "bg-transparent"}`}>
                       <a href="#home"><li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">Home</li></a> 
                        <a href="#about"><li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">About Me</li></a> 
                        <a href="#experience"><li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">Experience</li></a> 
                        <a href="#contact"><li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">Contact Me</li></a> 
                    </ul>
                </div>
            </nav>
            <div className="w-full h-full bg-inherit items-center justify-center z-0" id="home">
            <div className="pt-28 h-full md:pt-52 md:justify-center md:text-center md:items-center md:px-[8rem]">
                <h4 className="text-black font-semibold text-4xl md:text-6xl px-3 tracking-tight " data-aos="fade-left">
                Expert Electrical Solutions.
                </h4>
                <p className="text-black font-light text-2xl px-3 pt-2 md:text-5xl" data-aos="fade-left" >
                Powering Your Projects with Precision and Reliability, Ensuring Safety and Efficiency Every Step of the Way.
                </p>
                </div>
        </div>
        </div>
    );
}

export default Header;
