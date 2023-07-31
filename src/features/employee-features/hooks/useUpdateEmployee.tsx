import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { updateEmployee } from "../../../services/employee-service";
import { UpdateEmployeeType } from "../../../types/employee-type";

export const useUpdateEmployee = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast } = useToast();
    return useMutation({
        mutationFn: (payload: UpdateEmployeeType) => updateEmployee(payload),
        onMutate: () => {
            setLoading(true);
        },
        onError: async () => {
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