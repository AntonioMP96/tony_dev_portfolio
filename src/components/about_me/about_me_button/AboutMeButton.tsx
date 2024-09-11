'use client'
import { useState } from 'react'
import { IoChevronForward } from "react-icons/io5";
import { Modal } from '@/components'


export const AboutMeButton = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return (
        <>
        <h2 className='text-lg 2xl:text-2xl font-bold hidden md:block'>
            About me
        </h2>
        <button 
        onClick={openModal}
        className={`h-full p-5
        flex md:hidden justify-between items-center
        text-lg font-bold`}>
            About me
            <IoChevronForward className='inline-block md:hidden text-2xl'/>
        </button>
        <div className='hidden md:block'>
            <ModalText/>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} className='bg-gray-800'>
            <h3 className='text-lg font-bold'>About me:</h3>
            <ModalText/>
        </Modal>
        </>
    )
}


const ModalText = () => {
    return (
        <p className='2xl:text-xl mt-3'>
            I&apos;m a fullstack developer with a vast career in engineering and development.
            I have a passion for technology and a love for creating innovative solutions.
            I&apos;m always looking for new challenges and opportunities to grow as a developer.
            <br/><br/>
            I&apos;m a self-taught developer who has been coding for over 4 years now.
            I have a strong foundation in programming languages and technologies.
            I&apos;m always looking for new challenges and opportunities to grow as a developer.
        </p>
    )
}
