import { baseURLInfo } from "@/app/services/api";
import { OnePlanet } from "@/app/types/Planets";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function usePlanetsList(planets: string[]) {
    const planetsQueries = useQueries({
        queries: planets.map((planet) => {
            return {
                queryKey: ['planet', planet],
                queryFn: (): Promise<OnePlanet> => 
                    axios
                        .get(`${baseURLInfo}planets/${planet}`)
                        .then(res => res.data)
            }
        })
    })

    const planetsName = planetsQueries.map((planet) => planet.data && planet.data.name)

    return {
        planetsName
    }
}