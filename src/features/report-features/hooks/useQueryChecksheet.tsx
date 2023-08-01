import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getChecksheet } from "../../../services/checksheet-service";

export const useQueryChecksheet = (year: string, month: string, role: string, search: string) => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["checksheets", { year, month, role, search }],
        queryFn: () => getChecksheet(year, month, role, search),
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