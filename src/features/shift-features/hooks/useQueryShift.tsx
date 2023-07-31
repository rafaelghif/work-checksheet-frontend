import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getShifts } from "../../../services/shift-service";

export const useQueryShift = (search: string) => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["shifts", { search }],
        queryFn: () => getShifts(search),
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