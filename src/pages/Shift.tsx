import ContainerShift from "../features/shift-features/components/ContainerShift";
import MainLayout from "../layouts/MainLayout";

const Shift: React.FC = () => {
    return (
        <MainLayout title="Shift">
            <ContainerShift />
        </MainLayout>
    );
}

export default Shift;