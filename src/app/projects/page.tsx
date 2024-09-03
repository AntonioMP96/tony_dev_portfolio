import Link from 'next/link'
import image from 'next/image'
import { Header } from '@/components'
import projectsData from '@/lib/projects'



export default function ProjectsPage() {

    const test = {
        '1': 1,
        '2': 2
    }

    return (
        <>
            <Header
            title={'Projects'}
            subtitle={"Navigate throw all the projects that I've done"}
            />
            <div className={`max-w-screen-2xl mt-10 
            grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 
            gap-10 items-center justify-center`}>

                {
                    Object.values(projectsData).map(project => (
                        <Link className={`
                            
                        `} href={`/project/${project['slug']}`}>
                            hola
                        </Link>
                    ))
                }

            </div>
        </>
    )
}