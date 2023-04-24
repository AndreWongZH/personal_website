import Image from "next/image"
import { ReactNode } from "react"

export default function FeatureProj(
{ name, src, keywords, reversed = false, children }:
{ name: string, src: string, keywords: string[], reversed?: boolean, children: ReactNode }
) {
    return (
        <div className={`flex ${reversed ? 'flex-row-reverse' : 'flex-row'} relative hide`}>
            <div className="w-[60%]">
                <Image className="h-96 opacity-40 hover:opacity-90 transition-all" width={1000} height={500} src={src} alt="" />
            </div>
            <div className={`${reversed ? 'left-0 items-start' : 'right-0 items-end'} flex flex-col w-1/3 h-full justify-center absolute gap-6`}>
                <div className="flex flex-col items-end">
                    <h3 className={`${reversed ? 'self-start' : 'self-end'} text-sm text-highlight`}>Featured Project</h3>
                    <h3 className={`${reversed ? 'self-start' : 'self-end'} text-2xl font-bold`}>{name}</h3>
                </div>
                <div className={`${reversed ? 'pr-10 text-left' : 'pl-10 text-right'} bg-background-light shadow-2xl drop-shadow-2xl w-[150%] p-6 text-slate-300`}>
                    {children}
                </div>
                <div className={`${reversed ? 'justify-start' : 'justify-end'} flex flex-row text-lg gap-8 w-[150%]`}>
                    {
                        keywords.map((keyword: string, index: number) => (
                            <h4 key={index} className="text-md font-light text-slade-100" >{keyword}</h4>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

