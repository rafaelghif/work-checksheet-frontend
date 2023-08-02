import { IconType } from "react-icons";

interface MenuItemAccordionProps {
    text: string;
    children: React.ReactNode;
    icon: IconType;
    hidden?: boolean
}

const MenuItemAccordion: React.FC<MenuItemAccordionProps> = ({ children, text, icon: Icon, hidden = false }) => {
    return (
        <div className={`relative overflow-hidden hover:bg-[#f8fafc] border-b ${hidden ? `hidden` : `block`}`}>
            <input type="checkbox" className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer" />
            <div className="flex items-center w-full h-12">
                <span className="flex items-center w-full gap-3 px-4 py-3">
                    <Icon />
                    {text}
                </span>
            </div>
            <div className="absolute transition-transform duration-150 rotate-0 top-3 right-3 peer-checked:-rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <div className="pl-6 overflow-hidden transition-all duration-150 bg-white 0 max-h-0 peer-checked:max-h-64">
                {children}
            </div>
        </div>
    );
}

export default MenuItemAccordion;