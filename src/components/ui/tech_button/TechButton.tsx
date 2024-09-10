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
        <div className={`h-full aspect-square mx-3
        ${hideName && 'cursor-pointer group'}
        `} onClick={onClick}>
            <Image
            src={image}
            alt={title}
            width={90}
            height={90}
            className='h-full w-full aspect-square'
            />
            <p className={`text-center text-sm mt-2 transition-all
            ${ hideName ? 'opacity-0 group-hover:opacity-100' : 'text-xl'}
            `}>
                {title}
            </p>


        </div>
    )
}