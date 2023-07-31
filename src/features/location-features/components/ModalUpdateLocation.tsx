import Modal from "../../../components/Modal";
import { useState, useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { LocationInterface, UpdateLocationType } from "../../../types/location-type";
import { useUpdateLocation } from "../hooks/useUpdateLocation";

interface ModalUpdateLocationProps {
    isOpen: boolean;
    data?: LocationInterface;
    onDidDismiss: () => void;
}

const ModalUpdateLocation: React.FC<ModalUpdateLocationProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateLocationType>({});
    const { mutate } = useUpdateLocation();

    const handleInput = (key: keyof UpdateLocationType, value: string) => {
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
        <Modal title="Update Location" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">Name</label>
                    <Input value={formData?.name} id="name" name="name" onInput={(newVal) => handleInput("name", newVal)} />
                </div>
                <Button type="submit" color="primary">Submit</Button>
            </form>
        </Modal>
    );
}

export default ModalUpdateLocation;