
export default function Home() {
    return (
        <div className="h-screen max-h-screen py-6 sm:py-8 lg:py-12 flex flex-col items-center px-4 md:px-8">
            <div className="w-full max-w-screen-2xl mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                    <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">Antonio Martínez</h2>

                    <h3 className="hidden md:block max-w-screen-sm text-gray-500 md:text-xl">
                    Fullstack Developer with vast experience in single, mobile and enterprise solutions.
                    </h3>
                </div>
                <a href="#" className="inline-block rounded-lg border bg-gray-800 px-4 py-2 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-200 hover:bg-gray-300 hover:text-gray-800 focus-visible:ring active:bg-gray-400 md:px-8 md:py-3 md:text-base">
                Contact
                </a>
            </div>
            <h3 className="block md:hidden w-full text-gray-500 mb-4">
                Fullstack Developer with vast experience in single, mobile and enterprise solutions.
            </h3>
            <div className="flex h-full w-full max-w-screen-2xl items-center justify-center">

                <div className="grid h-full w-full gap-4 md:gap-6 xl:gap-8 rounded-lg">
                    <a href="#"
                    className="col-span1 md:col-span-2 row-span-1 rounded-lg shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" 
                        fetchPriority="high" 
                        alt="About me" 
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">About me</span>
                    </a>

                    <a href="#"
                    className="col-span-1 row-span-1 rounded-lg shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" 
                        alt="Networks" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">Networks</span>
                    </a>

                    <a href="#"
                    className="col-span-1 md:col-span-3 row-span-1 rounded-lg shadow-lg overflow-hidden flex items-end group relative"
                    >
                        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" alt="Projects" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition duration-200">
                        </div>
                        <div className={`pointer-events-none absolute inset-0 bg-gray-950 opacity-0 group-hover:opacity-60 transition duration-200`}
                        ></div>
                        <span className="relative ml-4 mb-3 inline-block text-md text-white md:ml-5 md:text-xl">Projects</span>
                    </a>
                </div>

            </div>
        </div>
    )
}