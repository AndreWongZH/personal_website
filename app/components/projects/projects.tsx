import { FaFolder, } from "react-icons/fa";
import FeatureProj from "./featureproject";


export default function Projects() {
    return (
        <section id="project" className="min-h-screen flex item-center justify-center text-white">
            <div className="mt-20 w-[70%] h-3/4 flex flex-col justify-center">
                <div className="flex flex-row gap-3 items-center mb-10 hide">
                    <FaFolder className="text-highlight" size={42} />
                    <h2 className="text-3xl font-bold text-slate-300" >Projects Showcase</h2>
                </div>

                <div className="flex flex-col gap-20">
                    <FeatureProj
                        name={"IOT Home"}
                        src={"/feature1.png"}
                        keywords={['golang', 'gin', 'nextjs', 'typescript', 'sqlite3']}
                    >
                        <p>
                            IOT Home is a web application that provides a dashboard to control lights and switches in homes.
                        </p>
                        <p>
                            The application&apos;s current focus is on controlling lights and switches.
                        </p>
                    </FeatureProj>
                    <FeatureProj
                        name={"Cander"}
                        src={"/feature2.jpg"}
                        reversed={true}
                        keywords={['flutter', 'firebase', 'google cloud functions', 'typescript']}
                    >
                        <p>A phone application that allows users to play games with each other and potentially meet new people through the platform.</p>
                        <p>
                            Users will be matched with others who have similar answers and preferences and connect with them through our in app chat messaging.
                        </p>
                    </FeatureProj>
                    <FeatureProj
                        name={"Astar Tutors"}
                        src={"/feature3.jpg"}
                        keywords={['typescript', 'react', 'nodejs', 'mongodb']}
                    >
                        <p>
                            A web application that provides a simple and effective way for students to connect with tutors in a variety of subject areas,
                        </p>
                        <p>
                            making it easier for them to communicate through the platform to schedule and conduct tutoring session.
                        </p>
                    </FeatureProj>
                </div>
            </div>
        </section>
    )
}
