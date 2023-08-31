import { baseURL } from "@/app/services/api";
import { OneSpecie } from "@/app/types/Species";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useSpecie(id: string) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['SpecieData'],
        queryFn: (): Promise<OneSpecie> =>
            axios
                .get(`${baseURL}species/${id}`)
                .then(res => res.data),
        })

    return {
        specie: data,
        isLoading,
        error,
    }
}