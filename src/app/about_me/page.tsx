import Link from 'next/link'
import Image from 'next/image'
import { Header, TechSlackSlider, ContactButtons, AboutMeButton, ExperienceButton } from '@/components'
import { IoChevronForward } from "react-icons/io5";



export default function ProjectsPage() {

    return (
        <>
            <Header
            title={'About Tony'}
            subtitle={"I'm the fullstack developer that you would like to hire if you have an idea for you or your business that you'll like to make true. The craziest the idea, the better."}
            />

            <div className="flex flex-1 h-full w-full max-w-screen-2xl items-center justify-center relative">
                <div className={`
                absolute top-0 bottom-0 left-0 right-0 
                grid grid-cols-1 md:grid-cols-6 
                grid-rows-6 md:grid-rows-4
                gap-4 md:gap-6 xl:gap-8
                `}>
                    {/* Salute */}
                    <div className={`p-4 bg-gray-800 text-white 
                        col-span-1 row-span-1
                        md:col-span-2 md:row-span-2 
                        rounded-xl shadow-xl flex flex-col items-center justify-center`}>
                        <h2 className='flex md:flex-col 
                        text-4xl xl:text-5xl 2xl:text-7xl 
                        font-bold'>
                            <span>Hi, I&apos;m&nbsp;</span>
                            <span>Tony 👋</span>
                            {/* <p className="text-lg md:text-xl font-normal mt-3">Fullstack developer</p> */}
                        </h2>
                        
                    </div>
                    {/* About me */}
                    <div className={`md:p-6 xl:p-8 bg-gray-800 
                    col-span-1 row-span-1
                    md:col-span-4 md:row-span-2 rounded-xl shadow-xl flex flex-col text-white
                    overflow-hidden relative md:overflow-y-auto
                    `}>
                        <AboutMeButton/>                        
                    </div>
                    {/* Skills */}
                    <div className={`bg-gray-800 
                        col-span-1 row-span-1
                        md:col-span-2 md:row-span-1 rounded-xl shadow-xl p-6 text-white flex justify-center items-center`}>
                        <h2 className='text-xl md:text-2xl 2xl:text-4xl font-bold'>Fullstack Developer</h2>
                    </div>
                    {/* Contact */}
                    <div className={`p-2 bg-gray-800 
                    col-span-1 row-span-1
                    md:col-span-2 md:row-span-1 rounded-xl shadow-xl text-white text-5xl xl:text-6xl flex items-center justify-evenly gap-2 `}>
                        <ContactButtons />
                    </div>
                    {/* Proffesional experience */}
                    <div className={`md:p-6 xl:p-8 bg-gray-800 
                    col-span-1 row-span-1
                    md:col-span-2 md:row-span-2 rounded-xl shadow-xl text-white relative overflow-hidden md:overflow-y-auto`}>
                        <ExperienceButton />    
                    </div>
                    {/* Tech Stack */}
                    <div className={`bg-gray-800 
                    col-span-1 row-span-1
                    md:col-span-4 md:row-span-1 rounded-xl shadow-xl p-6 text-white
                        flex items-center`}>
                        <h2 className='text-lg 2xl:text-2xl font-bold leading-tight'>Tech Stack</h2>
                        <TechSlackSlider />
                    </div>
                </div>
            </div>
        </>
    )
}