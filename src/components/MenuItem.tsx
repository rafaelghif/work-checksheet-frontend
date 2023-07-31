import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface MenuItemProps {
    to: string;
    text: string;
    icon: IconType;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, text, icon: Icon, onClick }) => {
    return (
        <Link to={to} className="flex items-center w-full gap-3 px-4 py-3 border-b hover:bg-[#f8fafc]" onClick={onClick}>
            <Icon />
            {text}
        </Link>
    );
}

export default MenuItem;