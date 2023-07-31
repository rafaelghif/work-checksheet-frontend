import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { AxiosError } from "axios";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";
import { updateShift } from "../../../services/shift-service";
import { UpdateShiftType } from "../../../types/shift-type";

export const useUpdateShift = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateShiftType) => updateShift(payload),
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