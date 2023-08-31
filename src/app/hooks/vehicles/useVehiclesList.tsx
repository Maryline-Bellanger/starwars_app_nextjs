import { baseURLInfo } from "@/app/services/api"
import { OneVehicule } from "@/app/types/Vehicles"
import { useQueries } from "@tanstack/react-query"
import axios from "axios"

export default function useVehiclesList(vehicles: string[]) {
    const vehiclesQueries = useQueries({
        queries: vehicles.map((vehicle) => {
            return {
                queryKey: ['vehicle', vehicle],
                queryFn: (): Promise<OneVehicule> => 
                    axios
                        .get(`${baseURLInfo}vehicles/${vehicle}`)
                        .then(res => res.data)
            }
        })
    })

    const vehiclesName = vehiclesQueries.map((vehicle) => vehicle.data && vehicle.data.name)

    return {
        vehiclesName
    }
}
