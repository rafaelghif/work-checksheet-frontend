import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getEmployees } from "../../../services/employee-service";

export const useQueryEmployee = (search: string) => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["employees", { search }],
        queryFn: () => getEmployees(search),
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