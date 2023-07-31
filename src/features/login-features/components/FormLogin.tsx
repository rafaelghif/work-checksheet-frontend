import { useState } from "react";
import Button from "../../../components/Button";
import { AuthenticationPayloadInterface } from "../../../types/authentication-type";
import { useAuthentication } from "../hooks/useAuthentication";

const FormLogin: React.FC = () => {
    const [formData, setFormData] = useState<AuthenticationPayloadInterface>({ username: "", password: "" });
    const { mutate } = useAuthentication();

    const handleInput = (key: keyof AuthenticationPayloadInterface, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={formData.username} onInput={(e) => handleInput("username", e.currentTarget.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={formData.password} onInput={(e) => handleInput("password", e.currentTarget.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <Button type="submit" className="w-full px-5 py-2 rounded">Submit</Button>
        </form>
    );
}

export default FormLogin;