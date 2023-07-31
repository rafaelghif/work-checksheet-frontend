import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getTasks } from "../../../services/task-service";

export const useQueryTask = (search: string) => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["tasks", { search }],
        queryFn: () => getTasks(search),
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