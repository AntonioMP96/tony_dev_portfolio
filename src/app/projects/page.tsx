import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components'
import projectsData from '@/lib/projects'



export default function ProjectsPage() {

    return (
        <>
            <Header
            title={'Projects'}
            subtitle={"Navigate throw all the projects that I've done"}
            />
            <div className={`h-full w-full flex-1
            max-w-screen-2xl mt-10 
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            items-start
            gap-10 justify-center`}>

                {
                    Object.values(projectsData).map(project => (
                        <div className={`
                            aspect-square
                            col-span-1 row-span-1 
                            flex flex-col gap-4 items-center
                        `}>
                            <Link href={`/project/${project['slug']}`}
                            className={`rounded-2xl shadow-lg flex-1 h-full w-full overflow-hidden group relative
                            `}>
                                <Image
                                src={project['image']}
                                alt={project['title']}
                                width={300}
                                height={300}
                                fetchPriority='high'
                                className={`absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110`}
                                />
                            </Link>
                            <h2 className='font-semibold md:text-lg'>{project['title']}</h2>
                        </div>
                    ))
                }

            </div>
        </>
    )
}