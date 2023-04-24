import { ImBook } from "react-icons/im";

export default function Book() {
    return (
        <section id="skill" className="h-screen flex items-center justify-center">
            <div className="w-2/3 h-3/4 flex flex-col justify-center hide relative">
                <div className="flex flex-row gap-3">
                    <ImBook className="text-highlight" size={35} />
                    <h2 className="text-3xl font-bold mb-10 text-slate-300" >Books</h2>
                </div>
            </div>
        </section>
    )
}
