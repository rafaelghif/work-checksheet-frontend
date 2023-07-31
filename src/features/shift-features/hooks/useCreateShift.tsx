import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { AxiosError } from "axios";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";
import { CreateShiftType } from "../../../types/shift-type";
import { createShift } from "../../../services/shift-service";

export const useCreateShift = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateShiftType) => createShift(payload),
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
                queryKey: ["shifts"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}