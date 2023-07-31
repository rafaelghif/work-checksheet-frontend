import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { CreateLocationType } from "../../../types/location-type";
import { createLocation } from "../../../services/location-service";

export const useCreateLocation = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateLocationType) => createLocation(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async () => {
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