import { baseURL } from "@/app/services/api"
import { StarshipsData } from "@/app/types/Starships"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type pageStarships =  {
    page: number
}

export default function useStarships({page}: pageStarships){
    const fetchStarships = (page: number) => 
        axios
            .get(`${baseURL}starships/?page=${page}`)
            .then(res => res.data)

    const { data, isLoading, error } = useQuery({
        queryKey: ['starshipsData', page],
        queryFn: (): Promise<StarshipsData> =>
            fetchStarships(page),
        })

    return {
        starships: data,
        isLoading,
        error,
    }
}