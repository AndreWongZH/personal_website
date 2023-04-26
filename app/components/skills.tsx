import { BsTerminalFill } from "react-icons/bs";
import Image from "next/image";

const SkillTile = ({ src }: { src: string }) => {
    return (
        <div className="bg-background-light w-16 h-16 lg:w-28 lg:h-28 rounded-lg m-2 flex items-center justify-center" >
            <Image height="100" width="100" alt="" src={src} />
        </div>
    )
}

export default function Skill() {
    return (
        <section id="skill" className="my-10 lg:h-screen flex items-center justify-center">
            <div className="lg:max-w-screen-lg lg:w-2/3 lg:h-3/4 flex flex-col justify-center hide relative">
                <div className="flex flex-row gap-3">
                    <BsTerminalFill className="text-highlight" size={35} />
                    <h2 className="text-xl lg:text-3xl font-bold mb-10 text-slate-300" >Skills Acquired</h2>
                </div>
                <div className="mb-10 flex flex-col gap-3">
                    <p>Throughout my career as a developer, I have had the opportunity to work with startups and collaborate with talented individuals in creating products for businesses and consumers.</p>
                    <p>Through these experiences, I have gained proficiency in various technologies, which have added to my collection of skillsets.</p>
                    <p>As time progresses, I intend to expand this collection further.</p>
                </div>

                <div className="flex flex-wrap relative">
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" />

                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <SkillTile src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                    <div className='h-3/4 border-l border-highlight absolute right-0 bottom-0'></div>
                </div>
                <div className='border-b border-highlight w-1/3 self-end'></div>
            </div>
        </section>
    )
}
