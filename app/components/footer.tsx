import Link from "next/link";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoShareSocialSharp } from "react-icons/io5";
import { SiHashnode } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center my-20 lg:mt-10 gap-5 lg:min-h-[60vh] hide">
            <div className="lg:max-w-screen-lg flex flex-row gap-3 items-center">
                <IoShareSocialSharp className="text-highlight" size={40} />
                <h2 className="text-2xl lg:text-4xl font-bold text-slate-300" >Reach out to me</h2>
            </div>
            <p className="lg:w-1/2 text-center">
                If you want to get in touch, you can send me an email at <span className="text-highlight">wongandre98@gmail.com</span>, and you can also follow me on the social media accounts listed below.
            </p>
            <div className="flex flex-row items-center gap-5">
                <Link
                    href="https://www.linkedin.com/in/andre-wong/"
                    target="_blank"
                >
                    <FiLinkedin size={50} className="hover:text-highlight w-3/4 lg:w-full" />
                </Link>
                <Link
                    href="https://github.com/AndreWongZH/"
                    target="_blank"
                >
                    <FiGithub size={50} className="hover:text-highlight w-3/4 lg:w-full " />
                </Link>
                <Link
                    href="https://hashnode.com/@andrewong"
                    target="_blank"
                >
                    <SiHashnode size={50} className="hover:text-highlight w-3/4 lg:w-full " />
                </Link>
            </div>
        </footer>
    )
}
