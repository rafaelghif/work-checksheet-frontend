type inputType = "text" | "number" | "date";

interface InputProps {
    value?: string;
    onInput?: (newVal: string) => void;
    name?: string;
    type?: inputType;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
}



const Input: React.FC<InputProps> = ({ value = "", type = "text", id, name, required = false, disabled = false, placeholder, onInput }) => {
    const handleInput = (value: string) => {
        if (onInput) {
            onInput(value);
        }
    }
    return (
        <input type={type} name={name} id={id} value={value} placeholder={placeholder} onInput={(e) => handleInput(e.currentTarget.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={required} disabled={disabled} />
    );
}

export default Input;