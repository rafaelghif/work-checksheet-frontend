import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FaPerson, FaLocationPin, FaCalendarDay, FaListCheck, FaDatabase, FaRightFromBracket } from "react-icons/fa6";
import useAuthStore from "../stores/useAuthStore";
import useUserStore from "../stores/useUserStore";


const Dashboard: React.FC = () => {
    const { user, clearUser } = useUserStore();
    const { logoutUser } = useAuthStore();

    const handleLogout = () => {
        clearUser();
        logoutUser();
    }
    
    return (
        <MainLayout title="Dashboard">
            <div className="grid grid-cols-2 gap-3 lg:hidden">
                {user.role !== "Client" ? (
                    <>
                        <Link to="/employee" className="flex flex-col items-center justify-center w-full gap-2 p-5 shadow">
                            <FaPerson />
                            <span>Employee</span>
                        </Link>
                        <Link to="/location" className="flex flex-col items-center justify-center w-full gap-2 p-5 shadow">
                            <FaLocationPin />
                            <span>Location</span>
                        </Link>
                        <Link to="/shift" className="flex flex-col items-center justify-center w-full gap-2 p-5 shadow">
                            <FaCalendarDay />
                            <span>Shift</span>
                        </Link>
                        <Link to="/task" className="flex flex-col items-center justify-center w-full gap-2 p-5 shadow">
                            <FaListCheck />
                            <span>Tasks</span>
                        </Link>
                    </>
                ) : (<></>)}
                <Link to="/report" className="flex flex-col items-center justify-center w-full gap-2 p-5 shadow">
                    <FaDatabase />
                    <span>Report</span>
                </Link>
                <Link to="/login" onClick={handleLogout} className="flex flex-col items-center justify-center w-full gap-2 p-5 shadow">
                    <FaRightFromBracket />
                    <span>Logout</span>
                </Link>
            </div>
        </MainLayout>
    );
}

export default Dashboard;