import toast from "react-hot-toast";

export const useToast = () => {

    const successToast = (message: string, duration: number = 1500) => {
        toast.success(message, {
            duration: duration,
            position: "bottom-right",
        });
    }

    const errorToast = (messageData: string = "", duration: number = 3000) => {
        toast.error(messageData, {
            duration: duration,
            position: "bottom-center"
        });
    }

    return {
        successToast,
        errorToast
    };
}