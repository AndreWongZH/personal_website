import { FaUser } from "react-icons/fa";
import profilePic from '../../public/profile_pic.jpg'

import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="lg:h-screen flex items-center justify-center my-10">
            <div className="lg:max-w-screen-lg lg:h-3/4 flex flex-col justify-center hide ">
                <div className='flex flex-row items-center mb-10 gap-10'>
                    <div className="flex flex-row gap-3">
                        <FaUser className="text-highlight" size={30} />
                        <h2 className="text-xl lg:text-3xl font-bold text-slate-300" >Me and Myself</h2>
                    </div>
                    <div className='border-t border-highlight w-1/3'></div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row-reverse gap-3 items-center relative">
                    <div className='h-full border-l border-highlight absolute -left-10'></div>
                    <div className="lg:w-1/2 flex item-center justify-center">
                        <Image src={profilePic} alt="profile image" className="w-3/5" />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mb-5">
                            I&apos;m a hobbyist when it comes to coding. I love creating random projects and experimenting with new ideas, from building robots to making applications to running my own home lab.
                        </p>
                        <p className="mb-5">
                            I&apos;m currently focused on backend development. I like building server-side systems and creating efficient architectures that can handle complex data processing and high traffic.
                        </p>
                        <p>I&apos;m also fascinated by the inner workings of operating systems and how they manage resources and provide a platform for applications to run.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}
