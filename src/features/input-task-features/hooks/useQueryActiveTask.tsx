import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getActiveTasks } from "../../../services/task-service";

export const useQueryActiveTask = () => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["active-task"],
        queryFn: () => getActiveTasks(),
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