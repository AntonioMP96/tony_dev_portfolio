import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaEnvelope, FaDiscord } from 'react-icons/fa'
import { Header, TechSlackSlider } from '@/components'



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
                    {/* Salute */}
                    <div className={`p-4 bg-gray-800 text-white col-span-2 row-span-2 rounded-xl shadow-xl flex flex-col items-center justify-center`}>
                        <h2 className='text-6xl xl:text-6xl 2xl:text-7xl font-bold'>
                            Hi, I'm<br/>Tony 👋
                            <p className="text-lg md:text-xl font-normal mt-3">Fullstack developer</p>
                        </h2>
                        
                    </div>
                    {/* About me */}
                    <div className={`p-6 bg-gray-800 col-span-4 row-span-2 rounded-xl shadow-xl flex flex-col text-white
                    overflow-hidden relative overflow-y-auto
                    `}>
                        <div className="absolute h-[30%] right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-gray-800"></div>
                        <h2 className='text-lg 2xl:text-2xl font-bold'>About me</h2>
                        <p className='2xl:text-xl mt-3'>
                            I'm a fullstack developer with a vast career in engineering and development.
                            I have a passion for technology and a love for creating innovative solutions.
                            I'm always looking for new challenges and opportunities to grow as a developer.
                            <br/><br/>
                            I'm a self-taught developer who has been coding for over 4 years now.
                            I have a strong foundation in programming languages and technologies.
                            I'm always looking for new challenges and opportunities to grow as a developer.
                        </p>
                    </div>
                    {/* Skills */}
                    <div className={`bg-gray-800 col-span-2 row-span-1 rounded-xl shadow-xl p-6 text-white`}>
                        <h2 className='text-lg md:text-2xl font-bold'>Skills</h2>
                        <p className='mt-3 text-md xl:text-xl'>
                            Web | Backend | API | Android | Web Apps
                        </p>
                    </div>
                    {/* Contact */}
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
                    {/* Proffesional experience */}
                    <div className={`bg-gray-800 col-span-2 row-span-2 rounded-xl shadow-xl p-6 text-white relative overflow-hidden overflow-y-auto`}>
                        <h2 className='text-lg md:text-2xl font-bold'>Professional experience</h2>
                        <ul className='mt-3 2xl:text-xl relative'>
                            <div className='h-full bg-white w-[1px] absolute left-[4px] top-[15px]'></div>
                            <li className='ml-5 my-2 list-disc'>Fullstack developer | Cykadas LLC | Sept 2022 - Now </li>
                            <li className='ml-5 my-2 list-disc'>Exploration geophysicist | Raptorodajes | May 2020 - June 2022</li>
                            <li className='ml-5 my-2 list-disc'>Python Teacher | SAGFI UNAM | Jan 2020 - Mar 2020</li>
                        </ul>
                    </div>
                    {/* Tech Stack */}
                    <div className={`bg-gray-800 col-span-4 row-span-1 rounded-xl shadow-xl p-6 text-white
                        flex items-center`}>
                        <h2 className='text-lg md:text-2xl font-bold'>Tech Stack</h2>
                        <TechSlackSlider />
                    </div>
                </div>
            </div>
        </>
    )
}