import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components'
import projectsData from '@/lib/projects'
import { FaWhatsapp, FaEnvelope, FaDiscord, FaCss3, FaHtml5, FaPython, FaJs, FaDocker, FaGit, FaAws, FaReact } from 'react-icons/fa'
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango, SiTypescript, SiTailwindcss } from "react-icons/si";





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
                grid md:grid-cols-6 md:grid-rows-4
                gap-4 md:gap-6 xl:gap-8
                `}>
                    <div className={`p-4 bg-gray-800 text-white col-span-2 row-span-2 rounded-xl shadow-xl flex flex-col items-center justify-center`}>
                        <h2 className='text-6xl font-bold'>
                            Hi, I'm<br/>Tony 👋
                            <p className="text-lg font-normal mt-3">Fullstack developer</p>
                        </h2>
                        
                    </div>
                    <div className={`p-6 bg-gray-800 col-span-4 row-span-2 rounded-xl shadow-xl flex flex-col text-white`}>
                        <h2 className='text-lg font-bold'>About me</h2>
                        <p className='text-md mt-3'>
                            I'm a fullstack developer with a vast career in engineering and development.
                            I have a passion for technology and a love for creating innovative solutions.
                            I'm always looking for new challenges and opportunities to grow as a developer.
                            <br/><br/>
                            I'm a self-taught developer who has been coding for over 4 years now.
                            I have a strong foundation in programming languages and technologies.
                            I'm always looking for new challenges and opportunities to grow as a developer.
                        </p>
                    </div>
                    <div className={`bg-gray-800 col-span-2 row-span-1 rounded-xl shadow-xl p-6 text-white`}>
                        <h2 className='text-lg font-bold'>Skills</h2>
                        <p className='mt-3 text-md'>
                            Web | Backend | API | Android | Web Apps
                        </p>
                    </div>
                    <div className={`bg-gray-800 col-span-2 row-span-1 rounded-xl shadow-xl text-white text-6xl flex items-center justify-evenly gap-2 `}>
                        <button 
                        // onClick={handleWhatsAppClick}
                        className='border-2 border-gray-800 rounded-xl p-4 transition-all hover:bg-gray-900'>
                            <FaWhatsapp />
                        </button>
                        <button 
                        // onClick={handleEmailClick}
                        className='border-2 border-gray-800 rounded-xl p-4 transition-all  hover:bg-gray-900'>
                            <FaEnvelope />
                        </button>
                        <button 
                        // onClick={handleDiscordClick}
                        className='border-2 border-gray-800 rounded-xl p-4 transition-all hover:bg-gray-900'>
                            <FaDiscord />
                        </button>
                    </div>
                    <div className={`bg-gray-800 col-span-2 row-span-2 rounded-xl shadow-xl p-6 text-white relative overflow-hidden`}>
                        <h2 className='text-lg font-bold'>Professional experience</h2>
                        <div className='h-full bg-white w-[1px] absolute left-[30px] top-[75px]'></div>
                        <ul className='mt-3'>
                            <li className='ml-5 list-disc'>Fullstack developer | Cykadas LLC | Sept 2022 - Now </li>
                            <li className='ml-5 list-disc'>Exploration geophysicist | Raptorodajes | May 2020 - June 2022</li>
                            <li className='ml-5 list-disc'>Python Teacher | SAGFI UNAM | Jan 2020 - Mar 2020</li>
                        </ul>
                    </div>
                    <div className={`bg-gray-800 col-span-4 row-span-1 rounded-xl shadow-xl p-6 text-white`}>
                        <h2 className='text-lg font-bold'>Tech Stack</h2>
                        <p className='mt-3 flex gap-3 text-4xl'>
                            <FaPython/>
                            <FaJs/>
                            <SiDjango/>
                            <RiNextjsFill/>
                            <SiTypescript/>
                            <FaCss3/>
                            <FaHtml5/>
                            <FaReact/>
                            <SiTailwindcss/>
                            <FaDocker/>
                            <FaAws/>
                            <FaGit/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}