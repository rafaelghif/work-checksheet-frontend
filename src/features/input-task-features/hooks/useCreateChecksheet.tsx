import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { AxiosError } from "axios";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";
import { ChecksheetPayloadInterface } from "../../../types/checksheet-type";
import { createChecksheet } from "../../../services/checksheet-service";

export const useCreateChecksheet = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: ChecksheetPayloadInterface) => createChecksheet(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async (error) => {
            const err = error as AxiosError<ApiResponseErrorInterface>;
            errorToast(err.response?.data?.data?.message);
            setLoading(false);
        },
        onSuccess: async (response) => {
            // successToast(response);
            console.log(response);
            queryClient.invalidateQueries({
                queryKey: ["checksheet"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}