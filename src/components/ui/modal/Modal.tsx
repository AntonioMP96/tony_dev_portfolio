import '@/app/globals.css'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-black opacity-50 " onClick={onClose}></div>
            <div className="bg-white p-5 md:p-6 mx-5 md:mx-0 rounded-lg z-10 modal max-w-screen w-fit">
                {children}
            </div>
        </div>
    )
}