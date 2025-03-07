

const projectsData: Record<string, { 
    title: string, short_description: string, 
    long_description: string, link: string, image: string
    slug: string, tech_stack: string[], small_image: string
}> = {
    'dentista_coapa' : {
        title: 'Dentista Coapa',
        short_description: 'A fully operative dentist management system that includes a page to showcase her dental services.',
        long_description: `This is a management system that is meant to be operated only by the owner and some other designated users.
        It helps the patients to save and manage their own data and appointments.
        It lets the dentist and admins to manage the user's dental registers information and their appointments`,
        link: 'https://www.dentistacoapa.com',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/nsssf5tl92lh4fk3tila',
        small_image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/dentista_coapa/tche25ba9pooj6yfdcyr',
        slug: 'dentista_coapa',
        tech_stack: ['Next.js', 'Typescript', 'Tailwind', 'PostgreSQL - Prisma', 'Git - Github']
    },
    'panacea': {
        title: 'Panacea',
        short_description: 'A showcase page for a CBD products startup located in Mexico City.',
        long_description: 'A showcase page for a CBD products startup located in Mexico City. Where people can get to know more about CBD and its properties, and browse all the companie"s products.',
        link: 'https://panacea-mexico-683mhyhv0-tony-dev96.vercel.app/',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/etjjo3l1qrkufbd4uje7',
        small_image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/panacea/oyfk0muck7n9tagtr87n',
        slug: 'panacea',
        tech_stack: ['HTML 5', 'CSS 3', 'JavaScript', 'Django', 'Headless CMS']
    },
    'altony': {
        title: 'Altony AI',
        short_description: 'A landing page for a hypothetical AI startup.',
        long_description: `
        This is a landing page for a non-existing startup named Altony. 
        The purpose of making this mockup was to practice credentials authorization, 
        Multi Factor Authorization (MFA) and email verification methods.`,
        link: 'https://altony-ai.vercel.app',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/altony_ai/xniewkgoell6dfhxja1a',
        small_image: '',
        slug: 'altony',
        tech_stack: ['NextJs', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Prisma']
    }
}

export default projectsData