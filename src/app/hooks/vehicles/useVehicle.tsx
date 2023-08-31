import { baseURL } from "@/app/services/api"
import { OneVehicule } from "@/app/types/Vehicles"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export default function useVehicle(id: string) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['SpecieData'],
        queryFn: (): Promise<OneVehicule> =>
            axios
                .get(`${baseURL}vehicles/${id}`)
                .then(res => res.data),
            keepPreviousData: true
        })

    return {
        vehicle: data,
        isLoading,
        error,
    }
}
