import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getActiveShifts } from "../../../services/shift-service";

export const useQueryActiveShift = () => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["active-shifts"],
        queryFn: () => getActiveShifts(),
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