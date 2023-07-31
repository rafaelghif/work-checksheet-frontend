import Button from "../../../components/Button";
import { useState, Suspense, lazy } from "react";
import DebounceInput from "../../../components/DebounceInput";
import Spinner from "../../../components/Spinner";
import { ShiftInterface } from "../../../types/shift-type";
import ModalCreateShift from "./ModalCreateShift";
import ModalUpdateShift from "./ModalUpdateShift";

const TableShift = lazy(() => import("./TableShift"));

const ContainerShift: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<ShiftInterface>();
    const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (value: ShiftInterface) => {
        setSelectedValue(value);
        setIsOpenUpdate(true);
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Data Shifts</h1>
                <div className="flex flex-col gap-3">
                    <Button className="self-end w-44" color="primary" onClick={() => setIsOpenCreate(true)}>Create Shift</Button>
                    <DebounceInput value={search} debounce={1000} onInput={(newVal) => setSearch(newVal)} placeholder="Search" />
                    <Suspense fallback={<Spinner />}>
                        <TableShift search={search} handleClickBtnEdit={(value) => handleClickBtnEdit(value)} />
                    </Suspense>
                </div>
            </div>
            <ModalCreateShift isOpen={isOpenCreate} onDidDismiss={() => setIsOpenCreate(false)} />
            <ModalUpdateShift isOpen={isOpenUpdate} data={selectedValue} onDidDismiss={() => setIsOpenUpdate(false)} />
        </>
    );
}

export default ContainerShift;