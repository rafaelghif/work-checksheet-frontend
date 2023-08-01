import ContainerReport from "../features/report-features/components/ContainerReport";
import MainLayout from "../layouts/MainLayout";

const Report: React.FC = () => {
    return (
        <MainLayout title="Report">
            <ContainerReport />
        </MainLayout>
    );
}

export default Report;