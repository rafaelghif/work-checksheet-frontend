import ReactSelect from "../../../components/ReactSelect";
import { ReactSelectTypeInterface } from "../../../types/react-select-type";
import { useQueryActiveLocation } from "../hooks/useQueryActiveLocation";

interface SelectLocationProps {
    value: readonly ReactSelectTypeInterface[] | null;
    onChange: (newVal: readonly ReactSelectTypeInterface[]) => void;
}

const SelectLocation: React.FC<SelectLocationProps> = ({ value, onChange }) => {
    const { data } = useQueryActiveLocation();
    return (
        <ReactSelect value={value} options={data?.map((val) => ({ value: val.id, label: val.name }))} isMulti={true} onChange={(newValue) => onChange(newValue)} />
    );
}

export default SelectLocation;