import { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`w-full h-1/2 fixed top-0 left-0 transition-all ${isMenuOpen ? "bg-black" : "bg-inherit"}`}>
            <nav className="flex justify-between items-center text-white py-6 px-4 md:px-16">
                <a
                    href="https://www.facebook.com/jake.cabrillos.31"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-x-105 transition-all"
                >
                    <h4 className="font-normal tracking-wider text-sm md:text-lg text-white">Jake Cabrillos</h4>
                </a>
                <ul className="hidden md:flex items-center gap-12 font-thin text-base">
                    <li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">Home</li>
                    <li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">About Me</li>
                    <li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">Experience</li>
                    <li className="p-3 hover:text-black transition-all duration-300 cursor-pointer text-sm tracking-wide">Contact Me</li>
                </ul>
                <i
                    className="bx bx-menu-alt-right md:hidden block text-2xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></i>
                <div
                    className={`absolute xl:hidden top-20 left-0 w-full flex flex-col items-center gap-6 font-thin text-sm transition-all ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    style={{ transition: "opacity 0.3s ease" }}
                >
                    <ul className={`w-full flex flex-col items-center transition-all duration-200 ${isMenuOpen ? "bg-inherit" : "bg-transparent"} ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
                        <li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">Home</li>
                        <li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">About Me</li>
                        <li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">Experience</li>
                        <li className="list-none w-full text-center p-6 hover:text-white transition-all cursor-pointer">Contact Me</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
