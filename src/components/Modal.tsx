interface ModalProps {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
    onDidDismiss: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, children, onDidDismiss }) => {
    return (
        <>
            {isOpen ? (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-1/2 mx-auto my-6">
                            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <div className="flex items-center justify-between px-5 py-3 border-b border-solid rounded-t border-slate-200">
                                    <span className="text-lg font-semibold">
                                        {title}
                                    </span>
                                    <button className="p-2" onClick={onDidDismiss}>X</button>
                                </div>
                                <div className="relative flex-auto h-auto p-6 overflow-auto scroll-smooth">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
            ) : null}
        </>
    )
}

export default Modal;