import { useEffect, useState } from "react";

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
    debounce: number;
}

const DebounceInput: React.FC<InputProps> = ({ value, type = "text", debounce = 0, id, name, required = false, disabled = false, placeholder, onInput }) => {
    const [inputValue, setInputValue] = useState<string>(value || "");

    const handleInput = (value: string) => {
        setInputValue(value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (onInput) {
                onInput(inputValue);
            }
        }, debounce);

        return () => clearTimeout(timeoutId);
    }, [debounce, inputValue, onInput]);

    return (
        <input type={type} name={name} id={id} value={inputValue} placeholder={placeholder} onInput={(e) => handleInput(e.currentTarget.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={required} disabled={disabled} />
    );
}

export default DebounceInput;