import Link from 'next/link'


export const Footer = () => {
    return (
        <div className='flex w-full justify-center text-xs mb-10'>
            <Link href="/"
            className='hover:text-blue-500 transition-all'
            >
                <span className='antialiased font-bold'>Antonio Martínez</span>
                <span> | Fullstack Developer</span>
            </Link>
        </div>
    )
}