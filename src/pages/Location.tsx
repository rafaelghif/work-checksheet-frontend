import ContainerLocation from "../features/location-features/components/ContainerLocation";
import MainLayout from "../layouts/MainLayout";

const Location: React.FC = () => {
    return (
        <MainLayout title="Location">
            <ContainerLocation />
        </MainLayout>
    );
}

export default Location;