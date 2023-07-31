import Button from "../../../components/Button";
import { useState, Suspense, lazy } from "react";
import DebounceInput from "../../../components/DebounceInput";
import Spinner from "../../../components/Spinner";
import { LocationInterface } from "../../../types/location-type";
import ModalCreateLocation from "./ModalCreateLocation";
import ModalUpdateLocation from "./ModalUpdateLocation";

const TableLocation = lazy(() => import("./TableLocation"));

const ContainerLocation: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<LocationInterface>();
    const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
    const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (value: LocationInterface) => {
        setSelectedValue(value);
        setIsOpenUpdate(true);
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Data Locations</h1>
                <div className="flex flex-col gap-3">
                    <Button className="self-end w-44" color="primary" onClick={() => setIsOpenCreate(true)}>Create Location</Button>
                    <DebounceInput value={search} debounce={1000} onInput={(newVal) => setSearch(newVal)} placeholder="Search" />
                    <Suspense fallback={<Spinner />}>
                        <TableLocation search={search} handleClickBtnEdit={(value) => handleClickBtnEdit(value)} />
                    </Suspense>
                </div>
            </div>
            <ModalCreateLocation isOpen={isOpenCreate} onDidDismiss={() => setIsOpenCreate(false)} />
            <ModalUpdateLocation isOpen={isOpenUpdate} data={selectedValue} onDidDismiss={() => setIsOpenUpdate(false)} />
        </>
    );
}

export default ContainerLocation;