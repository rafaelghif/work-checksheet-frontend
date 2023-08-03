import { useState } from "react";
import imageCompression, { Options as browserImageOptions } from 'browser-image-compression';
import Button from "../../../components/Button";
import SelectEmployee from "./SelectEmployee";
import SelectLocation from "./SelectLocation";
import SelectShift from "./SelectShift";
import SelectTask from "./SelectTask";
import { ChecksheetPayloadInterface } from "../../../types/checksheet-type";
import { ReactSelectTypeInterface } from "../../../types/react-select-type";
import { useCreateChecksheet } from "../hooks/useCreateChecksheet";

const initialValue: ChecksheetPayloadInterface = {
    employee: "",
    shift: "",
    pictures: [],
    isKnowSupervisor: false,
    isKnowClient: false,
    isClean: false,
    details: [{
        label: 0,
        locations: [],
        tasks: [],
    }]
}

const FormInputTask: React.FC = () => {
    const [formData, setFormData] = useState<ChecksheetPayloadInterface>(initialValue);
    const [employee, setEmployee] = useState<ReactSelectTypeInterface | null>(null);
    const [shift, setShift] = useState<ReactSelectTypeInterface | null>(null);
    const [locations, setLocations] = useState<readonly ReactSelectTypeInterface[][]>([[], [], [], [], [], [], []]);
    const [tasks, setTasks] = useState<readonly ReactSelectTypeInterface[][]>([[], [], [], [], [], [], []]);
    const [files, setFiles] = useState<File[]>([]);
    const { mutate } = useCreateChecksheet();

    const handleChangeLocation = (newVal: readonly ReactSelectTypeInterface[], label: number) => {
        setLocations((prevState) =>
            prevState.map((res, index) => (index === label ? newVal.map((val) => ({ value: val.value, label: val.label })) : res))
        );
    };

    const handleChangeFiles = async (file: FileList | null) => {
        const newFiles: File[] = [];
        if (file?.length) {
            for (let index = 0; index < file.length || 0; index++) {
                if (file.item(index)) {
                    const options: browserImageOptions = {
                        maxSizeMB: 0.3,
                        maxWidthOrHeight: 720,
                    };
                    const compressedFile = await imageCompression(file.item(index)!, options);
                    newFiles.push(new File([compressedFile], file.item(index)!.name));
                }
            }
        }
        setFiles(newFiles);
    };

    const handleChangeTask = (newVal: readonly ReactSelectTypeInterface[], label: number) => {
        setTasks((prevState) =>
            prevState.map((res, index) => (index === label ? newVal.map((val) => ({ value: val.value, label: val.label })) : res))
        );
    };

    const handleChangeEmployee = (newVal: ReactSelectTypeInterface | null) => {
        setEmployee(newVal);
        setFormData((prevState) => ({ ...prevState, employee: newVal?.value || "" }));
    };

    const handleChangeShift = (newVal: ReactSelectTypeInterface | null) => {
        setShift(newVal);
        setFormData((prevState) => ({ ...prevState, shift: newVal?.value || "" }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newFormData: ChecksheetPayloadInterface = {
            ...formData,
            pictures: files,
            details: locations.map((location, index) => ({
                label: index,
                locations: location.map((location) => location.value),
                tasks: tasks[index].map((task) => task.value),
            })),
        };
        mutate(newFormData);
    };

    const handleChangeCheckBox = (key: keyof ChecksheetPayloadInterface, isChecked: boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: isChecked }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 px-3 py-2 mt-3">
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="petugas" className="font-semibold">Nama Petugas</label>
                <SelectEmployee value={employee} onChange={(newVal) => handleChangeEmployee(newVal)} />
            </div>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="lokasi" className="font-semibold">Shift</label>
                <SelectShift value={shift} onChange={(newVal) => handleChangeShift(newVal)} />
            </div>
            {[0, 1, 2, 3, 4, 5, 6].map((val) => (
                <div key={`kegiatan-${val + 1}`} className="flex flex-col gap-2 p-3 rounded shadow">
                    <span className="text-lg font-semibold border-b">Kegiatan {val + 1}</span>
                    <div className="flex flex-col w-full gap-1" >
                        <label className="font-semibold">Lokasi</label>
                        <SelectLocation value={locations[val]} onChange={(newVal) => handleChangeLocation(newVal, val)} />
                    </div>
                    <div className="flex flex-col w-full gap-1" >
                        <label className="font-semibold">Uraian Kegiatan</label>
                        <SelectTask value={tasks[val]} onChange={(newVal) => handleChangeTask(newVal, val)} />
                    </div>
                </div>
            ))}
            <div className="flex flex-col w-full gap-1" >
                <label className="font-semibold">Foto</label>
                <input type="file" multiple={true} onChange={(e) => handleChangeFiles(e.target.files)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="flex flex-col gap-2 p-3 rounded shadow">
                <span className="text-lg font-semibold border-b">Kondisi Pekerjaan</span>
                <div className="flex flex-row w-full gap-3">
                    <input type="radio" name="isClean" value={"true"} id="isCleanTrue" onChange={(e) => handleChangeCheckBox("isClean", e.target.value.includes("true"))} />
                    <label htmlFor={`isCleanTrue`} className="font-semibold">Bersih</label>
                </div>
                <div className="flex flex-row w-full gap-3">
                    <input type="radio" name="isClean" value={"false"} id="isCleanFalse" onChange={(e) => handleChangeCheckBox("isClean", e.target.value.includes("true"))} />
                    <label htmlFor={`isCleanFalse`} className="font-semibold" >Tidak Bersih</label>
                </div>
            </div>
            <div className="flex flex-row w-full gap-3">
                <input type="checkbox" name="isSupervisorKnow" id="isSupervisorKnow" onChange={(e) => handleChangeCheckBox("isKnowSupervisor", e.currentTarget.checked)} required />
                <label htmlFor={`isSupervisorKnow`} className="font-semibold">Diketahui oleh Supervisor</label>
            </div>
            <div className="flex flex-row w-full gap-3">
                <input type="checkbox" name="isClientKnow" id="isClientKnow" onChange={(e) => handleChangeCheckBox("isKnowClient", e.currentTarget.checked)} required />
                <label htmlFor="isClientKnow" className="font-semibold">Diketahui oleh User</label>
            </div>
            <Button type="submit" color="primary">Submit</Button>
        </form>
    );
}
export default FormInputTask;