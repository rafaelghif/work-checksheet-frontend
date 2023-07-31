import Modal from "../../../components/Modal";
import { useState, useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { TaskInterface, UpdateTaskType } from "../../../types/task-type";
import { useUpdateTask } from "../hooks/useUpdateTask";

interface ModalUpdateTaskProps {
    isOpen: boolean;
    data?: TaskInterface;
    onDidDismiss: () => void;
}

const ModalUpdateTask: React.FC<ModalUpdateTaskProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateTaskType>({});
    const { mutate } = useUpdateTask();

    const handleInput = (key: keyof UpdateTaskType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, name: data?.name, inActive: data?.inActive }));
    }, [data]);
    return (
        <Modal title="Update Task" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <Input value={formData?.name} id="name" name="name" onInput={(newVal) => handleInput("name", newVal)} />
                </div>
                <div className="flex flex-row gap-3">
                    <input type="checkbox" id="inActive" checked={formData?.inActive} onChange={(e) => handleInput("inActive", e.currentTarget.checked)} />
                    <label htmlFor="inActive" className="font-semibold">InActive</label>
                </div>
                <Button type="submit" color="primary">Submit</Button>
            </form>
        </Modal>
    );
}

export default ModalUpdateTask;