import Link from 'next/link'


export const Footer = () => {
    return (
        <footer className='flex w-full justify-center text-xs my-10'>
            <Link href="/"
            className='hover:text-blue-500 transition-all'
            >
                <span className='antialiased font-bold'>Antonio Martínez</span>
                <span> | Fullstack Developer</span>
            </Link>
        </footer>
    )
}