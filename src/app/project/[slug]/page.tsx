import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components'
import projectsData from '@/lib/projects'


interface Props {
    params: {
        slug: string;
    }
}

export default async function ProjectPage({params}: Props) {
    const { slug } = params
    if (!projectsData[slug]) {
        return <div>Project not found</div>
    }

    const { title, short_description, long_description, link, image } = projectsData[slug]


    return (
        <>
            <Header
            title={title}
            subtitle={short_description}
            />
            

            <div className={`flex-1 gap-5
            flex flex-col items-center justify-between
            `}>
                <div className={`max-w-screen-2xl mt-1 md:mt-10 
                grid 
                md:grid-cols-2 md:grid-rows-1
                gap-7 md:gap-10 items-center justify-center`}>
                    

                    <Link href={link}
                    className={`
                    col-span-1 row-span-1 min-h-56 h-full w-full
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
                        <a href={link} target="_blank" className={`inline-block rounded-lg border bg-gray-800 px-4 py-2 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-200 hover:bg-gray-300 hover:text-gray-800 focus-visible:ring active:bg-gray-400 md:px-8 md:py-3 md:text-base`}>
                            View&nbsp;live&nbsp;project
                        </a>
                    </div>
                </div>

                <Link href="/projects"
                className={`inline-block 
                rounded-lg border bg-transparent px-4 py-2 
                text-center text-sm font-semibold text-gray-800 
                outline-none ring-gray-800 transition duration-200 
                hover:bg-gray-800 hover:text-gray-100 focus-visible:ring active:bg-gray-600 
                md:px-8 md:py-3 md:text-base border-gray-800`}>
                    View all projects
                </Link>
            </div>

        </>
    )
}