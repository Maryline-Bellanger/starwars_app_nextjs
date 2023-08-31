import { baseURL } from "@/app/services/api";
import { OneStarship } from "@/app/types/Starships";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useStarship(id: string) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['StarshipData'],
        queryFn: (): Promise<OneStarship> =>
            axios
                .get(`${baseURL}starships/${id}`)
                .then(res => res.data),
        })

    return {
        starship: data,
        isLoading,
        error,
    }
}