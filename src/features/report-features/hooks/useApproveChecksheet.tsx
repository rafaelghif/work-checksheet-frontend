import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { AxiosError } from "axios";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";
import { ChecksheetInterface } from "../../../types/checksheet-type";
import { approveChecksheet } from "../../../services/checksheet-service";

export const useApproveChecksheet = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: Pick<ChecksheetInterface, "id">) => approveChecksheet(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            const err = error as AxiosError<ApiResponseErrorInterface>;
            errorToast(err.response?.data?.data?.message);
            setLoading(false);
        },
        onSuccess: async (response) => {
            successToast(response, 3000);
            queryClient.invalidateQueries({
                queryKey: ["checksheets"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}