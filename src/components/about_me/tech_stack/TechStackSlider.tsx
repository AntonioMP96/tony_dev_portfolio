'use client'
import { useState } from 'react'
import techStackData from '@/lib/tech_stack'
import { TechButton, Modal } from '@/components'




export const TechSlackSlider = () => {

    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const techStack = techStackData
    console.log({techStack})

    return (
        <>
        <div className={`w-full h-full pt-3 pb-12 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]`}>
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
            <div className='max-w-screen-sm'>
                <h3 className='text-2xl font-bold mb-5'>Tech Stack:</h3>
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