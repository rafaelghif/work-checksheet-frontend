import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

type color = "primary" | "secondary" | "success" | "warning" | "danger" | "light";
type buttonType = "submit" | "button" | "reset";

interface ButtonProps {
    children: React.ReactNode;
    type?: buttonType;
    className?: string;
    onClick?: () => void;
    color?: color;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", className = "", onClick, color = "light", icon: Icon }) => {
    const [buttonColor, setButtonColor] = useState<string>("");

    useEffect(() => {
        setButtonColor(getButtonColorClass(color));
    }, [color]);

    const getButtonColorClass = (color: color): string => {
        switch (color) {
            case "primary":
                return "bg-[#007bff] text-white hover:bg-opacity-80";
            case "secondary":
                return "bg-[#6c757d] text-white hover:bg-opacity-80";
            case "success":
                return "bg-[#28a745] text-white hover:bg-opacity-80";
            case "danger":
                return "bg-[#dc3545] text-white hover:bg-opacity-80";
            case "warning":
                return "bg-[#ffc107] text-white hover:bg-opacity-80";
            default:
                return "bg-[#f8f9fa] text-black hover:bg-[#f1f1f1]";
        }
    };

    const buttonClasses = classNames("flex items-center justify-center px-5 py-2 rounded text-center", buttonColor, className);

    return (
        <button type={type} onClick={onClick} className={buttonClasses}>
            {Icon && <Icon />}
            {children}
        </button>
    );
};

export default Button;