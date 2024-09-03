

const projectsData: Record<string, { 
    title: string, short_description: string, 
    long_description: string, link: string, image: string
    slug: string
}> = {
    'dentista_coapa' : {
        title: 'Dentista Coapa',
        short_description: 'A promotional site for a mexican local dentist located in Villa Coapa, Mexico City.',
        long_description: "A promotional site for a mexican local dentist located in Villa Coapa, Mexico City. Where people can know more about the dentist's services, and schedule an appointment for any of the offered dental services.",
        link: 'https://www.dentistacoapa.com',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/nsssf5tl92lh4fk3tila',
        slug: 'dentista_coapa'
    },
    'panacea': {
        title: 'Panacea',
        short_description: 'A slideshow page for a CBD products startup located in Mexico City.',
        long_description: 'A slideshow page for a CBD products startup located in Mexico City. Where people can get to know more about CBD and its properties, and browse all the companie"s products.',
        link: 'https://panacea-mexico-683mhyhv0-tony-dev96.vercel.app/',
        image: 'https://res.cloudinary.com/dgp7gxmcu/image/upload/f_auto,q_auto/v1/tony_portfolio/etjjo3l1qrkufbd4uje7',
        slug: 'panacea'
    }
}

export default projectsData