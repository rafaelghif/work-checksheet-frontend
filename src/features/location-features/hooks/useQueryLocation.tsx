import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getLocations } from "../../../services/location-service";

export const useQueryLocation = (search: string) => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["locations", { search }],
        queryFn: () => getLocations(search),
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