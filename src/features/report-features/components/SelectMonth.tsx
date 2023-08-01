import { useQueryMonth } from "../hooks/useQueryMonth";

interface SelectMonthProps {
    value: string;
    onChange: (year: string) => void;
}

const SelectMonth: React.FC<SelectMonthProps> = ({ value, onChange }) => {
    const { data } = useQueryMonth();
    return (
        <select value={value} onChange={(e) => onChange(e.currentTarget.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="All">All</option>
            {data?.map((month, index) => (
                <option key={`month-${index}`} value={month}>{month}</option>
            ))}
        </select>
    );
}

export default SelectMonth;