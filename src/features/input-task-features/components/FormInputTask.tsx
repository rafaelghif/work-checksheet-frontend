import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import SelectEmployee from "./SelectEmployee";
import SelectLocation from "./SelectLocation";
import SelectShift from "./SelectShift";
import SelectTask from "./SelectTask";
import { ChecksheetPayloadInterface } from "../../../types/checksheet-type";
import { ReactSelectTypeInterface } from "../../../types/react-select-type";

const initialValue: ChecksheetPayloadInterface = {
    employee: "",
    shift: "",
    detail: [{
        label: 1,
        locations: [],
        task: [],
        picture: null,
    }]
}

const FormInputTask: React.FC = () => {
    const [formData, setFormData] = useState<ChecksheetPayloadInterface>(initialValue);
    const [locations, setLocations] = useState<{ label: number, locations: ReactSelectTypeInterface[] }[]>([]);
    const [employee, setEmployee] = useState<ReactSelectTypeInterface | null>(null);
    const [shift, setShift] = useState<ReactSelectTypeInterface | null>(null);
    const [location, setLocation] = useState<readonly ReactSelectTypeInterface[] | null>(null);
    const [task, setTask] = useState<readonly ReactSelectTypeInterface[] | null>(null);

    const handleChangeLocation = (newVal: readonly ReactSelectTypeInterface[], label: number) => {

    }

    const handleChangeEmployee = (newVal: ReactSelectTypeInterface | null) => {
        setEmployee(newVal);
        setFormData((prevState) => ({ ...prevState, employee: newVal?.value! }));
    }

    const handleChangeShift = (newVal: ReactSelectTypeInterface | null) => {
        setShift(newVal);
        setFormData((prevState) => ({ ...prevState, shift: newVal?.value! }));
    }
    
    return (
        <form className="flex flex-col w-full gap-3 px-3 py-2 mt-3">
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="petugas" className="font-semibold">Nama Petugas</label>
                <SelectEmployee value={employee} onChange={(newVal) => handleChangeEmployee(newVal)} />
            </div>
            <div className="flex flex-col w-full gap-1">
                <label htmlFor="lokasi" className="font-semibold">Shift</label>
                <SelectShift value={shift} onChange={(newVal) => handleChangeShift(newVal)} />
            </div>
            {[1, 2, 3, 4, 5, 6, 7].map((val) => (
                <div key={`kegiatan-${val}`} className="flex flex-col gap-2 p-3 rounded shadow">
                    <span className="text-lg font-semibold border-b">Kegiatan {val}</span>
                    <div className="flex flex-col w-full gap-1" >
                        <label className="font-semibold">Lokasi</label>
                        <SelectLocation value={location} onChange={(newVal) => handleChangeLocation(newVal, val)} />
                    </div>
                    <div className="flex flex-col w-full gap-1" >
                        <label className="font-semibold">Uraian Kegiatan</label>
                        <SelectTask value={task} onChange={(newVal) => setTask(newVal)} />
                    </div>
                    <div className="flex flex-col w-full gap-1" >
                        <label className="font-semibold">Foto</label>
                        <input type="file" accept="image/*" multiple={true} onInput={(e) => console.log(e.currentTarget.files)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
            ))}
            <div className="flex flex-row w-full gap-3">
                <input type="checkbox" id="isSupervisorKnow" required />
                <label htmlFor="isSupervisorKnow" className="font-semibold">Diketahui oleh Supervisor</label>
            </div>
            <div className="flex flex-row w-full gap-3">
                <input type="checkbox" id="isClientKnow" required />
                <label htmlFor="isClientKnow" className="font-semibold">Diketahui oleh User</label>
            </div>
            <Button type="submit" color="primary">Submit</Button>
        </form>
    );
}
export default FormInputTask;