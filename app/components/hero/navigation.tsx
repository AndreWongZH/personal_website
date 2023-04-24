import { FaUser, FaFolder, } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { ReactNode } from "react";

const NavButton = ({ name, href, children }: { name: string, href: string, children: ReactNode }) => {
    return (
        <a
            className='text-center my-2 transition duration-500 ease text-xl font-bold border border-4 text-white rounded-xl border-highlight px-10 py-2 hover:bg-highlight/90 hover:text-background focus:outline-none focus:shadow-outline'
            href={href}
        >
            <div className="flex flex-row items-center justify-start gap-3">
                {children}
                <h3>{name}</h3>
            </div>

        </a>
    )
}

export default function navigation() {
    return (
        <div className="flex flex-col" >
            <NavButton name={"About"} href="#about">
                <FaUser />
            </NavButton>
            <NavButton name={"Work"} href="#work">
                <MdWork />
            </NavButton>
            <NavButton name={"Skills"} href="#skill">
                <BsTerminalFill />
            </NavButton>
            <NavButton name={"Projects"} href="#project">
                <FaFolder/>
            </NavButton>
            <NavButton name={"Blog"} href="#blog">
                <IoDocumentText/>
            </NavButton>
        </div>
    )
}
