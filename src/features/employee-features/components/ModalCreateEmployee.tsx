import Modal from "../../../components/Modal";
import { useState } from "react";
import { CreateEmployeeType } from "../../../types/employee-type";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useCreateEmployee } from "../hooks/useCreateEmployee";

interface ModalCreateEmployeeProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateEmployee: React.FC<ModalCreateEmployeeProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateEmployeeType>({ employeeId: "", name: "" });
    const { mutate } = useCreateEmployee();

    const handleInput = (key: keyof CreateEmployeeType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData({ employeeId: "", name: "" });
        onDidDismiss();
    }
    return (
        <Modal title="Create Employee" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="employeeId" className="font-semibold">Employee Id</label>
                    <Input value={formData.employeeId} id="employeeId" name="employeeId" onInput={(newVal) => handleInput("employeeId", newVal)} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <Input value={formData.name} id="name" name="name" onInput={(newVal) => handleInput("name", newVal)} />
                </div>
                <Button type="submit" color="primary">Submit</Button>
            </form>
        </Modal>
    );
}

export default ModalCreateEmployee;