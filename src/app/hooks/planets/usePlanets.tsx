import { baseURL } from "@/app/services/api";
import { PlanetsData } from "@/app/types/Planets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type pagePlanets = {
    page: number
}

export default function usePlanets({page}: pagePlanets) {
    const fetchPlanets = (page: number) => 
        axios
            .get(`${baseURL}planets/?page=${page}`)
            .then(res => res.data)

    const { data, isLoading, error } = useQuery({
        queryKey: ['planetsData', page],
        queryFn: (): Promise<PlanetsData> =>
            fetchPlanets(page),
        })

    return {
        planets: data,
        isLoading,
        error,
    }
}