import { baseURL } from "@/app/services/api"
import { VehiclesData } from "@/app/types/Vehicles"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type pageVehicles = {
    page: number
}

export default function useVehicles({page}: pageVehicles) {
    const fetchVehicles = (page: number) => 
        axios
            .get(`${baseURL}vehicles/?page=${page}`)
            .then(res => res.data)

    const { data, isLoading, error } = useQuery({
        queryKey: ['vehiclesData', page],
        queryFn: (): Promise<VehiclesData> =>
        fetchVehicles(page),
        })

    return {
        vehicles: data,
        isLoading,
        error,
    }
}