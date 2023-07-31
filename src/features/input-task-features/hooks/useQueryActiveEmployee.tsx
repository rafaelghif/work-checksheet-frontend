import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getActiveEmployees } from "../../../services/employee-service";

export const useQueryActiveEmployee = () => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["active-employees"],
        queryFn: () => getActiveEmployees(),
        onError: async () => {
            setLoading(false);
        },
        onSettled: async () => {
            setLoading(false);
        },
        refetchOnWindowFocus: false,
        retry: false
    });
}