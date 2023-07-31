import ReactSelect from "../../../components/ReactSelect";
import { ReactSelectTypeInterface } from "../../../types/react-select-type";
import { useQueryActiveShift } from "../hooks/useQueryActiveShift";

interface SelectShiftProps {
    value: ReactSelectTypeInterface | null;
    onChange: (newVal: ReactSelectTypeInterface | null) => void;
}

const SelectShift: React.FC<SelectShiftProps> = ({ value, onChange }) => {
    const { data } = useQueryActiveShift();
    return (
        <ReactSelect value={value} options={data?.map((val) => ({ value: val.id, label: val.name }))} onChange={(newValue) => onChange(newValue)} />
    );
}

export default SelectShift;