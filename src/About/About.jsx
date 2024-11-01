import '../About/about.css';
import picko from '../assets/jake.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="bg-inherit pt-4 md:px-[8rem] h-full w-full items-center justify-center flex overflow-x-hidden" id='about'>
            <div className="bg-inherit w-full h-full rounded-lg block items-center justify-center">
                <h4 className='text-center text-lg md:text-4xl font-semibold text-gray tracking-wide' data-aos="fade-left">My Background</h4>
                <p className='text-gray px-3 pt-2 md:text-2xl md:text-center text-sm font-light' data-aos="fade-left">
                    Hello! I’m Jake Cabrillos, a dedicated student at the University of Antique, currently pursuing a degree in Electrical Technology. With a strong passion for understanding complex systems, I have engaged in various projects that have honed my skills in electrical engineering.
                </p>
                <p className='text-gray px-3 pt-4 md:text-2xl md:text-center text-sm font-light' data-aos="fade-left">
                    For instance, I have designed and built a working circuit for a renewable energy project, focusing on solar power integration. This involved researching components, creating schematics, and testing the final design. These experiences have deepened my knowledge and reinforced my commitment to developing innovative technological solutions. I am eager to further apply my skills in real-world settings and contribute to advancements in the field.
                </p>
            <div className='justify-center items-center flex pb-5 -mt-20' data-aos="fade-left">
            <img src={picko} ></img>
            </div>
                <div className='h-screen w-full block pt-4 md:justify-center md:items-center '>
                    <h4 className='text-lg px-3 md:text-4xl font-medium text-gray tracking-tight md:text-center' data-aos="fade-left">Technical Skills</h4>
                    <ul className='list-disc list-inside block px-10 md:flex md:pt-4 md:text-center md:items-center md:justify-center '>
                        <li className='font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Circuit Design</li>
                        <li className='font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">SolidWorks Software</li>
                        <li className='font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Troubleshooting</li>
                        <li className='font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Embedded Systems</li>
                        <li className='font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Renewable Energy Systems</li>
                        <li className='font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">IoT Development</li>
                    </ul>
                    <h4 className='text-lg px-3 pt-4 md:text-4xl font-medium text-gray tracking-tight md:text-center' data-aos="fade-left">Soft Skills</h4>
                    <ul className='list-disc list-inside block px-10 md:flex md:pt-4 md:text-center md:items-center md:justify-center '>
                        <li className='text-gray font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Team Collaboration</li>
                        <li className='text-gray font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Problem-Solving</li>
                        <li className='text-gray font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Communication</li>
                        <li className='text-gray font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Adaptability</li>
                        <li className='text-gray font-light text-sm px-0 w-full md:text-lg' data-aos="fade-left">Critical Thinking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
