import Modal from "../../../components/Modal";
import { useState, useEffect } from "react";
import { EmployeeInterface, UpdateEmployeeType } from "../../../types/employee-type";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useUpdateEmployee } from "../hooks/useUpdateEmployee";

interface ModalCreateEmployeeProps {
    isOpen: boolean;
    data?: EmployeeInterface;
    onDidDismiss: () => void;
}

const ModalUpdateEmployee: React.FC<ModalCreateEmployeeProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateEmployeeType>({});
    const { mutate } = useUpdateEmployee();

    const handleInput = (key: keyof UpdateEmployeeType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, employeeId: data?.employeeId, name: data?.name, inActive: data?.inActive }));
    }, [data]);
    return (
        <Modal title="Update Employee" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="employeeId" className="font-semibold">Employee Id</label>
                    <Input value={formData?.employeeId} id="employeeId" name="employeeId" onInput={(newVal) => handleInput("employeeId", newVal)} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <Input value={formData?.name} id="name" name="name" onInput={(newVal) => handleInput("name", newVal)} />
                </div>
                <Button type="submit" color="primary">Submit</Button>
            </form>
        </Modal>
    );
}

export default ModalUpdateEmployee;