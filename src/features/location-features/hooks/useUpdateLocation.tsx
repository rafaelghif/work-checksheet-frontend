import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { UpdateLocationType } from "../../../types/location-type";
import { updateLocation } from "../../../services/location-service";
import { AxiosError } from "axios";
import { ApiResponseErrorInterface } from "../../../types/api-response-type";

export const useUpdateLocation = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast, errorToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateLocationType) => updateLocation(payload),
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
                queryKey: ["locations"]
            });
        },
        onSettled: () => {
            setLoading(false)
        }
    });
}