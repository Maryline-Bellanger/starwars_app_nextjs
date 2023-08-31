import { baseURLInfo } from "@/app/services/api";
import { OneStarship } from "@/app/types/Starships";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function useStarshipsList(starships: string[]) {
    const starshipsQueries = useQueries({
        queries: starships.map((starship) => {
            return {
                queryKey: ['starship', starship],
                queryFn: (): Promise<OneStarship> => 
                    axios
                        .get(`${baseURLInfo}starships/${starship}`)
                        .then(res => res.data)
            }
        })
    })

    const starshipsName = starshipsQueries.map((starship) => starship.data && starship.data.name)

    return {
        starshipsName
    }
}