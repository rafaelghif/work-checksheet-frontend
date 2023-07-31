import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { AxiosError } from "axios";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";
import { UpdateTaskType } from "../../../types/task-type";
import { updateTask } from "../../../services/task-service";

export const useUpdateTask = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateTaskType) => updateTask(payload),
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
                queryKey: ["tasks"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}