'use client'
import { useState } from 'react'
import techStackData from '@/lib/tech_stack'
import { TechButton, Modal } from '@/components'




export const TechSlackSlider = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const techStack = techStackData

    return (
        <>
        <div className={`w-full h-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]`}>
            <ul className={`h-full flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll
            `}>
                {
                    Object.values(techStack).map((item, index) => (
                        <TechButton
                        key={index}
                        title={item.title}
                        image={item.image}
                        onClick={openModal}
                        hideName={true}
                        />
                    ))
                }
            </ul>
            <ul className={`h-full flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll
            `} aria-hidden="true">
                {
                    Object.values(techStack).map((item, index) => (
                        <TechButton
                        key={index}
                        title={item.title}
                        image={item.image}
                        onClick={openModal}
                        hideName={true}
                        />
                    ))
                }
            </ul>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} className='bg-gray-800'>
            <div className='max-w-screen-md max-h-[500px] overflow-y-auto'>
                <h3 className='text-2xl font-bold mb-5'>Tech Stack:</h3>
                <p className='text-lg mb-6'>
                    This are some of the languages, frameworks and tools that I use for my projects:
                </p>
                <div className='flex flex-wrap justify-around gap-6'>
                    {
                        Object.values(techStack).map((item, index) => (
                            <TechButton
                            key={index}
                            title={item.title}
                            image={item.image}
                            onClick={openModal}
                            />
                        ))
                    }   
                </div>
            </div>
        </Modal>
        </>
    )
}