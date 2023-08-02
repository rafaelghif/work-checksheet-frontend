import logoPicture from "../assets/images/logo.png";
import FormLogin from "../features/login-features/components/FormLogin";

const Login: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen p-0 m-0 bg-slate-200">
            <div className="flex flex-col items-center justify-center w-11/12 gap-3 py-6 bg-white rounded-lg lg:w-1/3">
                <div>
                    <img src={logoPicture} alt="Logo" className="w-24 h-auto" />
                </div>
                <div>
                    <span className="text-lg font-semibold">Service Bangun Bersama</span>
                </div>
                <div className="w-full px-4">
                    <FormLogin />
                </div>
            </div>
        </div>
    );
}

export default Login;