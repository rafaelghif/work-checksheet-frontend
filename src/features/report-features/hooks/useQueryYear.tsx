import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getYearChecksheet } from "../../../services/checksheet-service";

export const useQueryYear = () => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["years"],
        queryFn: () => getYearChecksheet(),
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