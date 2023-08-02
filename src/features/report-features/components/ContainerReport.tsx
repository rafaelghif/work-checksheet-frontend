import { useState, Suspense, lazy } from "react";
import DebounceInput from "../../../components/DebounceInput";
import Spinner from "../../../components/Spinner";
import { ChecksheetInterface } from "../../../types/checksheet-type";
import { useApproveChecksheet } from "../hooks/useApproveChecksheet";

const SelectYear = lazy(() => import("./SelectYear"));
const SelectMonth = lazy(() => import("./SelectMonth"));
const TableReport = lazy(() => import("./TableReport"));

const ContainerReport: React.FC = () => {
    const currentDate = new Date();
    const [search, setSearch] = useState<string>("");
    const [yearFilter, setYearFilter] = useState(currentDate.getFullYear().toString());
    const [monthFilter, setMonthFilter] = useState((currentDate.getMonth() + 1).toString());

    const { mutate } = useApproveChecksheet();

    const handleClickApprove = (data: ChecksheetInterface) => {
        mutate({ id: data.id });
    }

    return (
        <div className="flex flex-col w-full gap-3">
            <h1 className="text-xl font-semibold">Data Reports</h1>
            <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Year</label>
                    <Suspense fallback={<Spinner />}>
                        <SelectYear value={yearFilter} onChange={(year) => setYearFilter(year)} />
                    </Suspense>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Month</label>
                    <Suspense fallback={<Spinner />}>
                        <SelectMonth value={monthFilter} onChange={(year) => setMonthFilter(year)} />
                    </Suspense>
                </div>
                <div className="flex flex-col col-span-2 gap-1">
                    <label className="font-semibold">Search</label>
                    <DebounceInput value={search} debounce={1000} onInput={(newVal) => setSearch(newVal)} placeholder="Search" />
                </div>
            </div>
            <div>
                <Suspense fallback={<Spinner />}>
                    <TableReport yearFilter={yearFilter} monthFilter={monthFilter} search={search} handleClickApprove={(data) => handleClickApprove(data)} />
                </Suspense>
            </div>
        </div>
    );
}

export default ContainerReport