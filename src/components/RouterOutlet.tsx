import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

interface RouterOutletProps {
    title: string;
}

const RouterOutlet: React.FC<RouterOutletProps> = ({ title }) => {
    return (
        <MainLayout title={title}>
            <Outlet />
        </MainLayout>
    );
}

export default RouterOutlet;