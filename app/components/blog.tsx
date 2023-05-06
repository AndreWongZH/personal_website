import { IoDocumentText } from "react-icons/io5";
import Link from "next/link"

export default function Blog() {
    return (
        <section id="blog" className="lg:min-h-[60vh] flex flex-col items-center justify-center gap-5 hide my-44 lg:my-10">
            <div className="lg:max-w-screen-lg flex flex-row gap-3 items-center">
                <IoDocumentText className="text-highlight" size={45} />
                <h2 className="text-2xl lg:text-4xl font-bold text-slate-300"  >Check out my blog post</h2>
            </div>
            <div className="lg:w-1/2 text-center">
                <p className="mb-2">
                    I also enjoy writing about my personal projects and sharing my knowledge with others.
                </p>
                <p>
                    I am maintaining a blog to document my coding adventures, share tips and tricks for software development, and discuss interesting topics in computer science.
                </p>
                <div className="mt-10">
                    <BlogButton />
                </div>
            </div>
        </section>
    )
}

const BlogButton = () => {
    return (

        <Link className='text-center my-2 transition duration-500 ease text-xl font-bold border border-4 text-white rounded-xl border-highlight px-10 py-2 hover:bg-highlight/90 hover:text-background focus:outline-none focus:shadow-outline'
            href="https://blog.wongandre.com"
            target="_blank"
        >
            View Blog
        </Link>
        //<button className="learn-more">
        //    <span className="circle" aria-hidden="true">
        //       <span className="icon arrow"></span>
        //    </span>
        //    <span className="button-text">view blog</span>
        //</button>

    )
}
