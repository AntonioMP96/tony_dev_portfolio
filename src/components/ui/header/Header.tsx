'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    title: string
    subtitle: string
}


export const Header = ({title, subtitle}: Props) => {

    const pathname = usePathname()

    return (
        <header className='w-full max-w-screen-2xl'>
            <div className="w-full mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                    <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">{ title }</h1>

                    <h2 className="hidden md:block max-w-screen-sm text-gray-500 md:text-xl">
                        { subtitle }
                    </h2>
                </div>
                {
                    pathname != '/' ? (
                    <Link href={ '/' } className="inline-block rounded-lg border bg-transparent px-4 py-2 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-800 transition duration-200 hover:bg-gray-800 hover:text-gray-100 focus-visible:ring active:bg-gray-600 md:px-8 md:py-3 md:text-base border-gray-800">
                        Return&nbsp;home
                    </Link>
                    ) : 
                    <button className="inline-block rounded-lg border bg-gray-800 px-4 py-2 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-200 hover:bg-gray-300 hover:text-gray-800 focus-visible:ring active:bg-gray-400 md:px-8 md:py-3 md:text-base">
                        Contact
                    </button>
                }
            </div>
            <h2 className="block md:hidden w-full text-gray-500 mb-4">
                { subtitle }
            </h2>
        </header>
    )
}