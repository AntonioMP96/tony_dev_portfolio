'use client'
import { FaWhatsapp, FaEnvelope, FaDiscord } from 'react-icons/fa'



export const ContactButtons = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:jantoniomgfis@yahoo.com'
    }

    const phoneNumber = "525510533016"

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}`
        window.open(url, '_blank')
    }

    const discordUserId = "1059680542834040872"
    const handleDiscordClick = () => {
        const url = `https://discordapp.com/users/${discordUserId}`
        window.open(url, '_blank')
    }

    return (
        <>
            <button 
            onClick={handleWhatsAppClick}
            className='max-h-full aspect-square p-3 flex items-center justify-center border-2 border-gray-800 rounded-xl transition-all hover:bg-gray-900'>
                <FaWhatsapp />
            </button>
            <button 
            onClick={handleEmailClick}
            className='max-h-full aspect-square p-3 flex items-center justify-center border-2 border-gray-800 rounded-xl transition-all hover:bg-gray-900'>
                <FaEnvelope />
            </button>
            <button 
            onClick={handleDiscordClick}
            className='max-h-full aspect-square p-3 flex items-center justify-center border-2 border-gray-800 rounded-xl transition-all hover:bg-gray-900'>
                <FaDiscord />
            </button>
        </>
    )
}