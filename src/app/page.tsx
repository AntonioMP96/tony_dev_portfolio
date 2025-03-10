import "./globals.css";
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'
import projectsData from '@/lib/projects'


export default function Home() {
    return (
        // <div className="h-screen max-h-screen py-6 sm:py-8 lg:py-12 px-4 md:px-8 flex flex-col items-center">
        <>
            {/* header */}
            <Header
            title={'Antonio Martínez'}
            subtitle={'Fullstack Developer with vast experience in single, mobile and enterprise solutions.'}
            />


            {/* grid */}
            <div className="flex flex-1 h-full w-full max-w-screen-2xl items-center justify-center relative">
                <div className={`absolute top-0 bottom-0 left-0 right-0 
                grid md:grid-cols-3 md:grid-rows-4
                gap-4 md:gap-6 xl:gap-8
                `}>
                    {/* about me */}
                    <Link href="/about_me"
                    className="col-span1 md:col-span-2 row-span-1 md:row-span-2 rounded-2xl shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <Image
                        src="https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/xerjhxkjnw0pmhlectyx" 
                        priority={true}
                        alt="About me" 
                        width={600} height={300}
                        fetchPriority="high" 
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">About me</span>
                    </Link>

                    {/* Github */}
                    <a href="https://github.com/AntonioMP96" target="_blank"
                    className="col-span-1 row-span-1 rounded-2xl shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <Image
                        src="https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/hm2vq7hjiazt8buhpbnq" 
                        alt="Github" 
                        width={600} height={300}
                        fetchPriority="high" 
                        className="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110" 
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">
                            Github
                        </span>
                    </a>

                    {/* Linkedin */}
                    <a href="https://www.linkedin.com/in/antoniomartinezdev/" target="_blank"
                    className="col-span-1 row-span-1 rounded-2xl shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <Image
                        src="https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/iy1ezrsg5ysalsc2thh9" 
                        alt="Linkedin" 
                        width={600} height={300}
                        fetchPriority="high" 
                        className="absolute inset-0 h-full w-full object-cover object-right transition duration-200 group-hover:scale-110" 
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">
                            Linkedin
                        </span>
                    </a>
                    
                    {/* projects */}
                    <div
                    className={`col-span-1 md:col-span-3  
                    row-span-1 md:row-span-2 
                    rounded-2xl shadow-lg overflow-hidden 
                    flex items-end group relative`}
                    >
                        <Image
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" 
                        alt="Projects" 
                        width={600} height={300}
                        fetchPriority="high" 
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <div className={`
                        p-8 pb-10 w-full h-full
                        pointer-events-auto absolute 
                        top-full group-hover:-translate-y-full 
                        opacity-0 group-hover:opacity-100
                        transition duration-200
                        overflow-y-auto
                        flex flex-col gap-5
                        `}
                        
                        >

                            <div className={`h-full
                            grid gap-6 items-center
                            grid-cols-4 lg:grid-cols-6 xl:grid-cols-9
                            md:grid-rows-2`}>
                                
                                {
                                    Object.values(projectsData).slice(0, 4).map((project, index) => (
                                        <div className={`col-span-1 h-fit`} key={index}>
                                            <Link
                                            href="/project/panacea"
                                            className={`
                                            max-h-full aspect-square
                                            flex flex-col items-center justify-center relative 
                                            bg-gray-100
                                            cursor-pointer rounded-2xl 
                                            opacity-0 group-hover:opacity-100 
                                            transition duration-200 ${index >= 3 && 'hidden md:flex'}`}
                                            >   
                                                {
                                                    project.small_image ?
                                                    (
                                                        <>
                                                        <div className={`bg-gray-800 
                                                            opacity-0 hover:opacity-100 
                                                            transition duration-200
                                                            w-full h-full absolute rounded-xl p-3
                                                            flex flex-col justify-center`}>
                                                            <p className={`w-full mb-1 text-center text-xl text-gray-100 font-bold`}>
                                                                { project.title }
                                                            </p>
                                                        </div>
        
                                                        <Image
                                                        className="w-3/4"
                                                        src={project.small_image}
                                                        alt={project.title}
                                                        height={90}
                                                        width={90}
                                                        />
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                        <div className={`bg-gray-100 text-gray-800
                                                        transition hover:bg-gray-800 hover:text-gray-100
                                                            w-full h-full absolute rounded-xl p-3
                                                            flex flex-col justify-center`}>
                                                            <p className={`w-full mb-1 text-center text-xl font-bold`}>
                                                                { project.title }
                                                            </p>
                                                        </div>
                                                        </>
                                                    )
                                                }
                                            </Link>
                                        </div>
                                    ))
                                }
                                
                                
                                <div className={`col-span-1 h-fit
                                col-start-4 lg:col-start-6 xl:col-start-9
                                md:row-start-2`}>
                                    <Link href="/projects" className={`
                                    max-h-full aspect-square
                                    text-white md:text-xl
                                    flex items-center justify-center
                                    bg-gray-800 hover:bg-gray-950 
                                    rounded-2xl 
                                    opacity-0 group-hover:opacity-100 
                                    transition duration-200
                                    `}
                                    >
                                        View all
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">Projects</span>
                    </div>
                </div>

            </div>
        </>
    )
}