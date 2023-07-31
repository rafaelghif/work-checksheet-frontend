import ReactSelect from "../../../components/ReactSelect";
import { ReactSelectTypeInterface } from "../../../types/react-select-type";
import { useQueryActiveEmployee } from "../hooks/useQueryActiveEmployee";

interface SelectEmployeeProps {
    value: ReactSelectTypeInterface | null;
    onChange: (newVal: ReactSelectTypeInterface | null) => void;
}

const SelectEmployee: React.FC<SelectEmployeeProps> = ({ value, onChange }) => {
    const { data } = useQueryActiveEmployee();
    return (
        <ReactSelect value={value} options={data?.map((val) => ({ value: val.id, label: `${val.employeeId} - ${val.name}` }))} onChange={(newValue) => onChange(newValue)} />
    );
}

export default SelectEmployee;