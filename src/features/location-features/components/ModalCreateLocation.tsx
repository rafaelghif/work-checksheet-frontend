import Modal from "../../../components/Modal";
import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useCreateLocation } from "../hooks/useCreateLocation";
import { CreateLocationType } from "../../../types/location-type";

interface ModalCreateLocationProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateLocation: React.FC<ModalCreateLocationProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateLocationType>({ name: "" });
    const { mutate } = useCreateLocation();

    const handleInput = (key: keyof CreateLocationType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData({ name: "" });
        onDidDismiss();
    }
    return (
        <Modal title="Create Location" isOpen={isOpen} onDidDismiss={onDidDismiss}>
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

export default ModalCreateLocation;