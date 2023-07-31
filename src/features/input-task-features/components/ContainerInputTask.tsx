import FormInputTask from "./FormInputTask";
import logoPicture from "../../../assets/images/logo.png";

const ContainerInputTask: React.FC = () => {
    return (
        <div className="flex justify-center w-full h-screen px-0 py-5 bg-slate-200">
            <div className="flex flex-col items-center justify-start w-11/12 h-auto p-3 overflow-auto bg-white rounded shadow md:w-1/2 scroll-smooth">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h1 className="text-lg font-semibold">Service Bangun Bersama</h1>
                    <img src={logoPicture} alt="Logo" className="w-32 h-auto" />
                    <span>Daily Activities Checksheet</span>
                </div>
                <FormInputTask />
            </div>
        </div>
    );
}
export default ContainerInputTask;