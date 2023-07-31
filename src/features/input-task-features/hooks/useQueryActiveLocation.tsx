import { useQuery } from "react-query";
import useLoadingStore from "../../../stores/useLoadingStore";
import { getActiveLocations } from "../../../services/location-service";

export const useQueryActiveLocation = () => {
    const { setLoading } = useLoadingStore();
    return useQuery({
        queryKey: ["active-locations"],
        queryFn: () => getActiveLocations(),
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