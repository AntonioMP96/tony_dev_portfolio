

const projectsData: Record<string, { 
    title: string, short_description: string, 
    long_description: string, link: string, image: string
    slug: string, tech_stack: string[]
}> = {
    'dentista_coapa' : {
        title: 'Dentista Coapa',
        short_description: 'A promotional site for a mexican local dentist located in Villa Coapa, Mexico City.',
        long_description: "A promotional site for a mexican local dentist located in Villa Coapa, Mexico City. Where people can know more about the dentist's services, and schedule an appointment for any of the offered dental services.",
        link: 'https://www.dentistacoapa.com',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/nsssf5tl92lh4fk3tila',
        slug: 'dentista_coapa',
        tech_stack: ['HTML 5', 'CSS 3', 'JavaScript']
    },
    'panacea': {
        title: 'Panacea',
        short_description: 'A showcase page for a CBD products startup located in Mexico City.',
        long_description: 'A showcase page for a CBD products startup located in Mexico City. Where people can get to know more about CBD and its properties, and browse all the companie"s products.',
        link: 'https://panacea-mexico-683mhyhv0-tony-dev96.vercel.app/',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/etjjo3l1qrkufbd4uje7',
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
        slug: 'altony',
        tech_stack: ['NextJs', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Prisma']
    }
}

export default projectsData