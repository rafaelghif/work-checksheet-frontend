import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { UpdateLocationType } from "../../../types/location-type";
import { updateLocation } from "../../../services/location-service";

export const useUpdateLocation = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateLocationType) => updateLocation(payload),
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