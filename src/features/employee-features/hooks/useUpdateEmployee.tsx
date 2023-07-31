import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { updateEmployee } from "../../../services/employee-service";
import { UpdateEmployeeType } from "../../../types/employee-type";
import { AxiosError } from "axios";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";

export const useUpdateEmployee = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateEmployeeType) => updateEmployee(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            const err = error as AxiosError<ApiResponseErrorInterface>;
            errorToast(err.response?.data?.data?.message);
            setLoading(false);
        },
        onSuccess: async (response) => {
            successToast(response);
            queryClient.invalidateQueries({
                queryKey: ["employees"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}