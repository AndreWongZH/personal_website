import Image from "next/image"
import { ReactNode } from "react"

export default function FeatureProj(
{ name, src, keywords, reversed = false, children, objectPos = "object-center" }:
{ name: string, src: string, keywords: string[], reversed?: boolean, children: ReactNode, objectPos: string }
) {
    return (
        <div className={`flex flex-col relative hide ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} rounded-xl lg:rounded-none shadow-2xl drop-shadow-2xl lg:shadow-none lg:drop-shadow-none`}>
            <div className="m-w-fit border-2 border-background-light lg:border-0 lg:w-[60%] rounded-xl lg:rounded-none">
                <Image className={`${objectPos} object-cover lg:object-contain relative h-96 opacity-20 rounded-xl lg:rounded-none lg:opacity-40 lg:hover:opacity-90 transition-all`} width={610} height={384} src={src} alt="" />
            </div>
            <div className={`${reversed ? 'lg:left-0 lg:items-start' : 'lg:right-0 lg:left-auto lg:items-end'} top-1/2 left-1/2 lg:top-0 -translate-y-1/2 -translate-x-1/2 lg:-translate-y-0 lg:-translate-x-0 flex flex-col items-center w-full lg:w-1/3 lg:h-full justify-center absolute gap-3 lg:gap-6`}>
                <div className="flex flex-col items-center justify-center lg:items-end">
                    <h3 className={`${reversed ? 'lg:self-start' : 'lg:self-end'} text-sm text-highlight`}>Featured Project</h3>
                    <h3 className={`${reversed ? 'lg:self-start' : 'lg:self-end'} text-2xl font-bold`}>{name}</h3>
                </div>
                <div className={`${reversed ? 'lg:pr-8 lg:text-left' : 'lg:pl-8 lg:text-right'} text-center lg:bg-background-light lg:shadow-2xl lg:drop-shadow-2xl lg:w-[150%] p-5 lg:p-6 text-slate-300 flex flex-col gap-3 lg:text-base`}>
                    {children}
                </div>
                <div className={`${reversed ? 'lg:justify-start' : 'lg:justify-end'} flex flex-row gap-3 lg:gap-8 lg:w-[150%] p-5`}>
                    {
                        keywords.map((keyword: string, index: number) => (
                            <h4 key={index} className="text-sm lg:text-base text-center font-light text-slade-100" >{keyword}</h4>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

