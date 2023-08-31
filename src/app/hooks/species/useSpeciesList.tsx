import { baseURLInfo } from "@/app/services/api";
import { OneSpecie } from "@/app/types/Species";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function useSpeciesList(species: string[]) {
    const speciesQueries = useQueries({
        queries: species.map((specie) => {
            return {
                queryKey: ['specie', specie],
                queryFn: (): Promise<OneSpecie> => 
                    axios
                        .get(`${baseURLInfo}species/${specie}`)
                        .then(res => res.data)
            }
        })
    })

    const speciesName = speciesQueries.map((specie) => specie.data && specie.data.name)

    return {
        speciesName
    }
}