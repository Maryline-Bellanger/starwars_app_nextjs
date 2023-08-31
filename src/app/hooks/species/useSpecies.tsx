import { baseURL } from "@/app/services/api";
import { SpeciesData } from "@/app/types/Species";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type pageSpecies = {
    page: number
}

export default function useSpecies({page}: pageSpecies) {
    const fetchSpecies = (page: number) => 
        axios
            .get(`${baseURL}species/?page=${page}`)
            .then(res => res.data)

    const { data, isLoading, error } = useQuery({
        queryKey: ['speciesData', page],
        queryFn: (): Promise<SpeciesData> =>
            fetchSpecies(page),
        })

    return {
        species: data,
        isLoading,
        error,
    }
}