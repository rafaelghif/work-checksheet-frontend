import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getMonthChecksheet } from "../../../services/checksheet-service";

export const useQueryMonth = () => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["months"],
        queryFn: () => getMonthChecksheet(),
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