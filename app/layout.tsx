import Script from 'next/script';
import './globals.css'
import Head from 'next/head';
import Link from 'next/link';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";


export const metadata = {
    title: 'Andre Wong',
    description: 'A page about me, my work and personal projects',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Head>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <body
                className='w-5/6 mx-auto bg-background text-xl text-slate-400 relative'
            >
                {children}
                <div className='fixed left-[3%] bottom-0 flex flex-col items-center justify-center gap-4'>
                    <Link
                        href="https://www.linkedin.com/in/andre-wong/"
                        target="_blank"
                    >
                        <FiLinkedin size={25} className="hover:text-highlight hover:-translate-y-1 transition-all" />
                    </Link>
                    <Link
                        href="https://github.com/AndreWongZH/"
                        target="_blank"
                    >
                        <FiGithub size={25} className="hover:text-highlight hover:-translate-y-1 transition-all" />
                    </Link>
                    <Link
                        href="https://hashnode.com/@andrewong"
                        target="_blank"
                    >
                        <SiHashnode size={25} className="hover:text-highlight hover:-translate-y-1 transition-all" />
                    </Link>
                    <div className='h-32 border-l border-slate-400' />
                </div>

                <Script defer src="/app.js" />
            </body>
        </html>
    )
}
