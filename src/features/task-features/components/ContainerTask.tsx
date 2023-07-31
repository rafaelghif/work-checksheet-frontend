import Button from "../../../components/Button";
import { useState, Suspense, lazy } from "react";
import DebounceInput from "../../../components/DebounceInput";
import Spinner from "../../../components/Spinner";
import { TaskInterface } from "../../../types/task-type";
import ModalCreateTask from "./ModalCreateTask";
import ModalUpdateTask from "./ModalUpdateTask";

const TableTask = lazy(() => import("./TableTask"));

const ContainerTask: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<TaskInterface>();
    const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (value: TaskInterface) => {
        setSelectedValue(value);
        setIsOpenUpdate(true);
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Data Tasks</h1>
                <div className="flex flex-col gap-3">
                    <Button className="self-end w-44" color="primary" onClick={() => setIsOpenCreate(true)}>Create Task</Button>
                    <DebounceInput value={search} debounce={1000} onInput={(newVal) => setSearch(newVal)} placeholder="Search" />
                    <Suspense fallback={<Spinner />}>
                        <TableTask search={search} handleClickBtnEdit={(value) => handleClickBtnEdit(value)} />
                    </Suspense>
                </div>
            </div>
            <ModalCreateTask isOpen={isOpenCreate} onDidDismiss={() => setIsOpenCreate(false)} />
            <ModalUpdateTask isOpen={isOpenUpdate} data={selectedValue} onDidDismiss={() => setIsOpenUpdate(false)} />
        </>
    );
}

export default ContainerTask;