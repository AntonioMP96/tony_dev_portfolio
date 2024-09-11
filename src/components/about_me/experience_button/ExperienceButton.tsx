'use client'
import { useState } from 'react'
import { IoChevronForward } from "react-icons/io5";
import { Modal } from '@/components'


export const ExperienceButton = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return (
        <>
        <h2 className='text-lg 2xl:text-2xl font-bold hidden md:block'>
            Professional Experience
        </h2>
        
        <button 
        onClick={openModal}
        className={`w-full h-full p-5
        flex md:hidden justify-between items-center
        text-lg font-bold`}>
            Professional Experience
            <IoChevronForward className='inline-block md:hidden text-2xl'/>
        </button>
        <div className='hidden md:block'>
            <ModalText/>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} className='bg-gray-800'>
            <h3 className='text-lg font-bold'>Professional Experience:</h3>
            <ModalText/>
        </Modal>
        </>
    )
}


const ModalText = () => {
    return (
        <ul className='mt-3 2xl:text-xl relative'>
            <div className='h-full bg-white w-[1px] absolute left-[4px] top-[15px]'></div>
            <li className='ml-5 my-2 list-disc'>
                Fullstack developer @ 
                <a className="text-blue-500 hover:text-blue-600 transition-all" 
                href="https://www.cykadas.com">&nbsp;Cykadas LLC</a>
                &nbsp;| Sept 2022 - Now 
            </li>
            <li className='ml-5 my-2 list-disc'>Exploration geophysicist @ Raptorodajes | May 2020 - June 2022</li>
            <li className='ml-5 my-2 list-disc'>Python Teacher @ SAGFI UNAM | Jan 2020 - Mar 2020</li>
        </ul>
    )
}