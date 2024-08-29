import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'

interface Props {
    params: {
        slug: string;
    }
}

const projectData: Record<string, { 
    title: string, short_description: string, 
    long_description: string, link: string, image: string 
}> = {
    'dentista_coapa' : {
        title: 'Dentista Coapa',
        short_description: 'A promotional site for a mexican local dentist located in Villa Coapa, Mexico City.',
        long_description: "A promotional site for a mexican local dentist located in Villa Coapa, Mexico City. Where people can know more about the dentist's services, and schedule an appointment for any of the offered dental services.",
        link: 'https://www.dentistacoapa.com',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/nsssf5tl92lh4fk3tila'
    },
    'panacea': {
        title: 'Panacea',
        short_description: 'A slideshow page for a CBD products startup located in Mexico City.',
        long_description: 'A slideshow page for a CBD products startup located in Mexico City. Where people can get to know more about CBD and its properties, and browse all the companie"s products.',
        link: 'https://panacea-mexico-683mhyhv0-tony-dev96.vercel.app/',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/etjjo3l1qrkufbd4uje7'
    }
}

export default async function ProjectPage({params}: Props) {
    const { slug } = params
    if (!projectData[slug]) {
        return <div>Project not found</div>
    }

    const { title, short_description, long_description, link, image } = projectData[slug]


    return (
        <>
            <Header
            title={title}
            subtitle={short_description}
            link={link}
            />
            
            <div className={`max-w-screen-2xl mt-10 
            grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 
            gap-10 items-center justify-center`}>
                

                <Link href={link}
                className={`
                col-span-1 row-span-1 h-full w-full
                rounded-2xl shadow-lg overflow-hidden group relative
                `}>
                    <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={300}
                    fetchPriority='high'
                    className={`absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110`}
                    />
                </Link>

                <div className={`md:text-xl flex flex-col items-start gap-6`}>
                    <span>
                        <strong>Project title:</strong>
                        <br />
                        <h3 className='text-xl md:text-2xl'>{title}</h3>
                    </span>
                    <h4><strong>Project Description:</strong><br />{ long_description }</h4>
                    <span>
                        <strong>Tech stack:</strong>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>JavaScript</li>
                        </ul>
                    </span>
                    <Link href={link} className={`inline-block rounded-lg border bg-transparent px-4 py-2 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-800 transition duration-200 hover:bg-gray-800 hover:text-gray-100 focus-visible:ring active:bg-gray-600 md:px-8 md:py-3 md:text-base border-gray-800`}>Visit&nbsp;site</Link>
                </div>
            </div>

        </>
    )
}