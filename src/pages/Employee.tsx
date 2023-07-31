import MainLayout from "../layouts/MainLayout";
import ContainerEmployee from "../features/employee-features/components/ContainerEmployee";

const Employee: React.FC = () => {
    return (
        <MainLayout title="Employee">
            <ContainerEmployee />
        </MainLayout>
    );
}

export default Employee;