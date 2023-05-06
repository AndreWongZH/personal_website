'use client'

import { ReactNode, useState } from "react"
import { MdWork } from "react-icons/md";
import { AiOutlineCaretRight } from "react-icons/ai"

import { Transition } from "@headlessui/react";

// ${index == active ? 'visible' : 'hidden'} 

const Work = () => {
    const [active, setActive] = useState(0);

    const onButtonClick = (index: number) => {
        setActive(index);
    };

    const JobDesc = ({ text }: { text: string }) => (
        <div className="flex flex-row items-start gap-3 justify-start">
            <div>
                <AiOutlineCaretRight className="text-highlight" size={30} />
            </div>
            <p>{text}</p>
        </div>
    )

    const JobDetails = ({ index, title, work, duration, children }:
        { index: number, title: string, work: string, duration: string, children: ReactNode }) => {
        return (
            <Transition show={index == active}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"

            >
                <div className={`flex flex-col gap-5 lg:w-2/3`}>

                    <div>
                        <div className="flex flex-row gap-2">
                            <h3 className="text-slate-300 font-bold" >{title}</h3>
                            <h3 className="text-highlight">@</h3>
                            <h3 className="text-highlight">{work}</h3>
                        </div>
                        <h4 className="text-sm" >{duration}</h4>
                    </div>
                    {children}

                </div>
            </Transition>
        )
    }

    const buttonLabel = ['GovTech', 'Iron Drone', 'The Iterative Collective'];

    return (
        <section id="work" className="my-44 lg:my-0 lg:h-screen flex items-center justify-center">
            <div className="lg:max-w-screen-lg lg:w-2/3 lg:h-3/4 flex flex-col justify-start hide relative">
                <div className="flex flex-row gap-3 items-center mb-10">
                    <MdWork className="text-highlight" size={40} />
                    <h2 className="text-xl lg:text-3xl font-bold text-slate-300" >Where I&apos;ve Worked</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                    <div className="flex flex-row lg:flex-col lg:w-1/5">
                        {
                            buttonLabel.map((label, index) => (
                                <button
                                    className={`${index == active ? 'border-highlight text-highlight' : 'border-background-light'} px-2 lg:px-5 py-1 lg:py-3 border-l-0 lg:border-l-4 border-t-0 lg:border-b-0 border-b-2 border-r-0 hover:bg-background-light text-center lg:text-left transition-all flex-1 lg:flex-initial`}
                                    key={index} onClick={() => onButtonClick(index)}>
                                    {label}
                                </button>
                            ))
                        }
                    </div>
                    <div className="flex flex-col lg:w-4/5">
                        <JobDetails
                            index={0}
                            title={"Software Engineer Intern"}
                            work={"GovTech"}
                            duration={"May 2022 - Aug 2022"}
                        >
                            <JobDesc
                                text="Devised a proof-of-concept blockchain application architecture capable of receiving sensor data from IOT devices"
                            />
                            <JobDesc
                                text="Executed the development of a solidity contract to store sensor data onto the Ethereum blockchain"
                            />
                            <JobDesc
                                text="Created own docker image to automatically setup software prerequisites to run backend servers"
                            />
                        </JobDetails>
                        <JobDetails
                            index={1}
                            title={"Software Engineer Intern"}
                            work={"Iron Drone"}
                            duration={"Jun 2021 - Dec 2021"}
                        >
                            <JobDesc
                                text="Revamped the user interface dashboard with Figma, and utilized ReactJS and Redux to develop the new design"
                            />
                            <JobDesc
                                text="Integrated a real-time map feature using Leaflet to display the movement of drones and detection areas"
                            />
                            <JobDesc
                                text="Conducted a complete drone interception on Airsim simulation, and merged Airsim software with ArduPilot to obtain drone telemetry data"
                            />

                        </JobDetails>
                        <JobDetails
                            index={2}
                            title={"Software Engineer Intern"}
                            work={"The Iterative Collective"}
                            duration={"May 2020 - Aug 2020"}
                        >
                            <JobDesc
                                text="Utilized TypeScript and ReactJS to develop the front-end application"
                            />
                            <JobDesc
                                text="Implemented user and game editing functionality by integrating with a MongoDB back-end and using Apollo GraphQL"
                            />
                            <JobDesc
                                text="Incorporated GetStream.io into the application to create a real-time feed notification system"
                            />
                        </JobDetails>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
