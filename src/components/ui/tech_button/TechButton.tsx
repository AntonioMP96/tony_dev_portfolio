'use client'
import Image from 'next/image'

interface Props {
    image: string
    title: string,
    onClick?: () => void
    hideName?: boolean
}


export const TechButton = ({image, title, onClick, hideName}: Props) => {


    return (
        <div
        className={`mx-3 ${hideName && 'cursor-pointer'}`} 
        onClick={onClick}>
            <Image
            src={image}
            alt={title}
            width={90}
            height={90}
            className='h-full max-h-full w-auto object-contain object-center mx-auto'
            />
            {!hideName &&
            <p className={`text-center text-sm md:text-base mt-2 transition-all`}>
                {title}
            </p>}
        </div>
    )
}