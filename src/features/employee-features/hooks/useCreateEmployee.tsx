import { useMutation, useQueryClient } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { useToast } from "../../../hooks/useToast";
import { createEmployee } from "../../../services/employee-service";
import { CreateEmployeeType } from "../../../types/employee-type";

export const useCreateEmployee = () => {
    const queryClient = useQueryClient();
    const { setLoading } = useLoadingStore();
    const { successToast } = useToast();
    return useMutation({
        mutationFn: (payload: CreateEmployeeType) => createEmployee(payload),
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