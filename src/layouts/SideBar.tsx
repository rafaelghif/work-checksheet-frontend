import logoPicture from "../assets/images/logo.png";
import avatarPicture from "../assets/images/avatar.svg";
import { FaChartColumn, FaRegCircle, FaDatabase, FaArrowRightFromBracket,FaCalendar } from "react-icons/fa6"
import MenuItem from "../components/MenuItem";
import MenuItemAccordion from "../components/MenuItemAccordion";
import useUserStore from "../stores/useUserStore";
import useAuthStore from "../stores/useAuthStore";

const SideBar: React.FC = () => {
    const { user, clearUser } = useUserStore();
    const { logoutUser } = useAuthStore();

    const handleLogout = () => {
        clearUser();
        logoutUser();
    }

    return (
        <div className="w-full h-screen overflow-auto bg-white scroll-smooth">
            <div className="h-12 flex justify-center items-center bg-[#161616] text-white gap-2">
                <img src={logoPicture} alt="Logo" className="w-10 h-auto" />
                <span>Service Bangun Bersama</span>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center w-full gap-5 px-3 py-5 border-b">
                    <img src={avatarPicture} alt="Avatar" className="w-16 h-auto" />
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold tracking-tight">{user.name}</span>
                        <span className="text-sm tracking-tight ">{user.role}</span>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <MenuItem to="/dashboard" text="Dashboard" icon={FaChartColumn} />
                    <MenuItemAccordion text="Master Data" icon={FaDatabase} hidden={user.role === "Client"}>
                        <MenuItem to="/employee" text="Employee" icon={FaRegCircle} />
                        <MenuItem to="/location" text="Location" icon={FaRegCircle} />
                        <MenuItem to="/shift" text="Shift" icon={FaRegCircle} />
                        <MenuItem to="/task" text="Task" icon={FaRegCircle} />
                    </MenuItemAccordion>
                    <MenuItem to="/report" text="Report" icon={FaCalendar} />
                    <MenuItem to="/login" onClick={handleLogout} text="Logout" icon={FaArrowRightFromBracket} />
                </div>
            </div>
        </div>
    );
}

export default SideBar;