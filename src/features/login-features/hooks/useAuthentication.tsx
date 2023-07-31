import { useMutation } from "react-query";
import { authentication } from "../../../services/authentication-service";
import { setToken } from "../../../services/local-storage-service";
import { AuthenticationPayloadInterface } from "../../../types/authentication-type";
import { useToast } from "../../../hooks/useToast";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";
import useUserStore from "../../../stores/useUserStore";
import useAuthStore from "../../../stores/useAuthStore";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const useAuthentication = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    const { setUser } = useUserStore();
    const { loginUser } = useAuthStore();
    return useMutation({
        mutationFn: (formData: AuthenticationPayloadInterface) => authentication(formData),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error: unknown) => {
            const err = error as AxiosError<ApiResponseErrorInterface>;
            errorToast(err.response?.data?.data?.message);
        },
        onSuccess: async (response) => {
            const { data, message } = response;
            const { user, token } = data;
            setToken(token);
            setUser(user);

            successToast(message);
            loginUser();
        },
        onSettled: (_, err) => {
            setLoading(false);
            if (err === null) {
                navigate("/dashboard");
            }
        },
    });
}