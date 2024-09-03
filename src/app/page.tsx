import "./globals.css";
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'


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
                <div className="absolute top-0 bottom-0 left-0 right-0 grid h-full w-full gap-4 md:gap-6 xl:gap-8">
                    {/* about me */}
                    <Link href="#"
                    className="col-span1 md:col-span-2 row-span-1 rounded-2xl shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <Image
                        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" 
                        alt="About me" 
                        width={600} height={300}
                        fetchPriority="high" 
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">About me</span>
                    </Link>

                    {/* networks */}
                    <Link href="#"
                    className="col-span-1 row-span-1 rounded-2xl shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <Image
                        src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" 
                        alt="Networks" 
                        width={600} height={300}
                        fetchPriority="high" 
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">Networks</span>
                    </Link>
                    
                    {/* projects */}
                    <div
                    className="col-span-1 md:col-span-3 row-span-1 rounded-2xl shadow-lg overflow-hidden flex items-end group relative"
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
                        p-6 pb-10 w-full h-full
                        pointer-events-auto absolute 
                        top-full group-hover:-translate-y-full 
                        opacity-0 group-hover:opacity-100
                        transition duration-200
                        overflow-y-auto
                        flex flex-col gap-5
                        `}
                        
                        >

                            <div className={`grid gap-6
                                grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 `}>
                                <Link 
                                href="/project/dentista_coapa"
                                className={`
                                aspect-square 
                                flex flex-col items-center justify-center relative 
                                bg-gray-100
                                cursor-pointer rounded-2xl 
                                opacity-0 group-hover:opacity-100 
                                transition duration-200`}
                                >   
                                    <div className={`bg-gray-800 
                                        opacity-0 hover:opacity-100 
                                        transition duration-200
                                        w-full h-full absolute rounded-xl 
                                        flex flex-col justify-center`}>
                                        <p className={`w-full p-2 text-center text-xl text-gray-100`}>
                                            "Lizbeth Zepeda" - Local dentist webpage
                                        </p>
                                    </div>

                                    <Image
                                    className="w-3/4"
                                    src={'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/dentista_coapa/tche25ba9pooj6yfdcyr'}
                                    alt={'LZ'}
                                    height={30}
                                    width={30}
                                    />
                                </Link>

                                <Link
                                href="/project/panacea"
                                className={`
                                aspect-square 
                                flex flex-col items-center justify-center relative 
                                bg-gray-100
                                cursor-pointer rounded-2xl 
                                opacity-0 group-hover:opacity-100 
                                transition duration-200`}
                                >   
                                    <div className={`bg-gray-800 
                                        opacity-0 hover:opacity-100 
                                        transition duration-200
                                        w-full h-full absolute rounded-xl 
                                        flex flex-col justify-center`}>
                                        <p className={`w-full p-2 text-center text-xl text-gray-100`}>
                                            "Panacea" - CBD products showcase
                                        </p>
                                    </div>

                                    <Image
                                    className="w-3/4"
                                    src={'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/panacea/kwxe2xrxnlwd0cu4z1jf'}
                                    alt={'LZ'}
                                    height={30}
                                    width={30}
                                    />
                                </Link>
                            </div>
                            <div className={`grid gap-6
                                grid-cols-4 lg:grid-cols-5 xl:grid-cols-6`}>
                                <Link href="/projects" className={`
                                aspect-square
                                text-white text-xl
                                flex items-center justify-center
                                bg-gray-800 hover:bg-gray-950 
                                rounded-2xl 
                                opacity-0 group-hover:opacity-100 
                                transition duration-200
                                col-start-4 lg:col-start-5 xl:col-start-6
                                `}
                                >
                                    Ver todos
                                </Link>
                            </div>
                            
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">Projects</span>
                    </div>
                </div>

            </div>
        </>
    )
}