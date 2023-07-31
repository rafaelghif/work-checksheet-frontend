import ContainerTask from "../features/task-features/components/ContainerTask";
import MainLayout from "../layouts/MainLayout";

const Task: React.FC = () => {
    return (
        <MainLayout title="Task">
            <ContainerTask />
        </MainLayout>
    );
}

export default Task;