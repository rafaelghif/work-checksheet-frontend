import SideBar from "./SideBar";

interface MainLayoutProps {
    children: React.ReactNode;
    title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
    return (
        <div className="flex flex-row w-screen h-screen">
            <div className="hidden lg:block lg:w-3/12 xl:w-2/12">
                <SideBar />
            </div>
            <div className="w-full h-full lg:border-l-2 lg:w-9/12 xl:w-10/12">
                <div className="h-12 flex pl-5 items-center bg-[#161616] text-white gap-3">
                    <span>{title}</span>
                </div>
                <div className="p-5 overflow-auto scroll-smooth">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;