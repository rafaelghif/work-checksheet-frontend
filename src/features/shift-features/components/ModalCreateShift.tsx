import Modal from "../../../components/Modal";
import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { CreateShiftType } from "../../../types/shift-type";
import { useCreateShift } from "../hooks/useCreateShift";

interface ModalCreateShiftProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateShift: React.FC<ModalCreateShiftProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateShiftType>({ name: "" });
    const { mutate } = useCreateShift();

    const handleInput = (key: keyof CreateShiftType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData({ name: "" });
        onDidDismiss();
    }
    return (
        <Modal title="Create Shift" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <Input value={formData.name} id="name" name="name" onInput={(newVal) => handleInput("name", newVal)} />
                </div>
                <Button type="submit" color="primary">Submit</Button>
            </form>
        </Modal>
    );
}

export default ModalCreateShift;