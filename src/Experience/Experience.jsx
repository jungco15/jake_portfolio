import React from "react";
import { CardStack } from "@/components/ui/card-stack";


// Experience Component
function Experience() {
    const cardData = [
        {
            id: 1,
            content: "Worked on residential electrical installations, ensuring compliance with safety standards.",
            name: "Residential Projects",
            designation: "Electrical Technician",
        },
        {
            id: 2,
            content: "Performed troubleshooting and repair of industrial machinery electrical systems.",
            name: "Industrial Maintenance",
            designation: "Electrical Technician",
        },
        {
            id: 3,
            content: "Collaborated with engineers on energy efficiency upgrades and retrofitting.",
            name: "Energy Solutions",
            designation: "Electrical Technician",
        },
    ];
    return (
        <section className="h-full w-full bg-inherit ">
        <div className=" bg-inherit w-full h-full flex max-sm:flex-col justify-center " id="experience">
            <div className="flex justify-center items-center lg:px-10  max-sm:pt-6 ">
            <h4 className='text-cent text-lg md:text-4xl font-semibold text-gray tracking-wide ' data-aos="fade-left"data-aos-duration="600" data-aos-offset="400">My Experience</h4>
            </div>
        <div className=" flex items-center max-sm:-mt-32 justify-center h-[36rem]" >
            <div data-aos="fade-left" data-aos-duration="600" data-aos-offset="400" >
        <CardStack items={cardData} offset={20} scaleFactor={0.06} />
        </div>
      </div>
      </div>
      </section>
    );
}

export default Experience;
