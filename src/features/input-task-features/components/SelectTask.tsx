import ReactSelect from "../../../components/ReactSelect";
import { ReactSelectTypeInterface } from "../../../types/react-select-type";
import { useQueryActiveTask } from "../hooks/useQueryActiveTask";

interface SelectTaskProps {
    value: readonly ReactSelectTypeInterface[] | null;
    onChange: (newVal: readonly ReactSelectTypeInterface[]) => void;
}

const SelectTask: React.FC<SelectTaskProps> = ({ value, onChange }) => {
    const { data } = useQueryActiveTask();
    return (
        <ReactSelect value={value} options={data?.map((val) => ({ value: val.id, label: val.name }))} isMulti={true} onChange={(newValue) => onChange(newValue)} />
    );
}

export default SelectTask;