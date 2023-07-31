import Button from "../../../components/Button";
import { useState, Suspense, lazy } from "react";
import { EmployeeInterface } from "../../../types/employee-type";
import DebounceInput from "../../../components/DebounceInput";
import Spinner from "../../../components/Spinner";
import ModalCreateEmployee from "./ModalCreateEmployee";
import ModalUpdateEmployee from "./ModalUpdateEmployee";

const TableEmployee = lazy(() => import("./TableEmployee"));

const ContainerEmployee: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<EmployeeInterface>();
    const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (value: EmployeeInterface) => {
        setSelectedValue(value);
        setIsOpenUpdate(true);
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Data Employees</h1>
                <div className="flex flex-col gap-3">
                    <Button className="self-end w-44" color="primary" onClick={() => setIsOpenCreate(true)}>Create Employee</Button>
                    <DebounceInput value={search} debounce={1000} onInput={(newVal) => setSearch(newVal)} placeholder="Search" />
                    <Suspense fallback={<Spinner />}>
                        <TableEmployee search={search} handleClickBtnEdit={(value) => handleClickBtnEdit(value)} />
                    </Suspense>
                </div>
            </div>
            <ModalCreateEmployee isOpen={isOpenCreate} onDidDismiss={() => setIsOpenCreate(false)} />
            <ModalUpdateEmployee isOpen={isOpenUpdate} data={selectedValue} onDidDismiss={() => setIsOpenUpdate(false)} />
        </>
    );
}

export default ContainerEmployee;