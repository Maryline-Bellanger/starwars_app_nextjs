"use client"

import useVehicle from "@/app/hooks/vehicles/useVehicle";
import CardVehicleDetail from "../components/CardVehicleDetail";
import CardCharacters from "../../characters/components/CardCharacters";
import CardFilms from "../../films/components/CardFilms";
import Loading from "@/app/components/loading/Loading";
import Image from "next/image";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";

export default function Vehicle({params}: {params: {id: string}}) {
    const { vehicle, isLoading, error} = useVehicle(params.id)

    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error
    
    return (
        <div className="mx-6 my-24">
            {vehicle && 
                <>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/4 flex items-center justify-center">
                            <Image
                                src={`${baseURLImage}vehicles/${getUrlId(vehicle.url)}.jpg`}
                                alt=""
                                width={200}
                                height={200}
                                className="max-w-sm rounded-lg shadows-2x1" />
                        </div>
                        <div className="p-2 basis-3/4">
                            <CardVehicleDetail
                            name={vehicle.name}
                            model={vehicle.model}
                            manufacturer={vehicle.manufacturer}
                            cost_in_credits={vehicle.cost_in_credits}
                            length={vehicle.length}
                            max_atmosphering_speed={vehicle.max_atmosphering_speed}
                            crew={vehicle.crew}
                            passengers={vehicle.passengers}
                            cargo_capacity={vehicle.cargo_capacity}
                            consumables={vehicle.consumables}
                            vehicle_class={vehicle.vehicle_class}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/2">
                            <CardCharacters characters={vehicle.pilots && vehicle.pilots.map((character) => `${getUrlId(character)}`)} title="Pilots" />
                        </div>
                        <div className="p-2 basis-1/2">
                            <CardFilms films={vehicle.films && vehicle.films.map((film) => `${getUrlId(film)}`)} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
