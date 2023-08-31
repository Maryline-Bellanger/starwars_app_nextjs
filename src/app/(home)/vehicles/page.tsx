"use client"

import Card from "@/app/components/Card";
import useVehicles from "@/app/hooks/vehicles/useVehicles";
import Link from "next/link";
import Pagination from "@/app/components/pagination/Pagination";
import Loading from "@/app/components/loading/Loading";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";
import { useState } from "react";

export default function Vehicles() {
    const [page, setPage] = useState(1);
    const { vehicles, isLoading, error} = useVehicles({page})
    const totalPage = vehicles && Math.ceil(vehicles.count / 10)
   
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error
    
    return (
        <div>
            <Pagination
                page={page}
                totalPage={totalPage}
                setPage={setPage}
            />
            <div className="flex flex-wrap my-6 justify-center">
                {vehicles && vehicles.results.map((vehicle) => (
                    <Link href={`/vehicles/${getUrlId(vehicle.url)}`} key={`${getUrlId(vehicle.url)}`}>
                        <Card 
                            id={`${getUrlId(vehicle.url)}`} 
                            name={vehicle.name} 
                            image={`${baseURLImage}vehicles/${getUrlId(vehicle.url)}.jpg`} />
                    </Link>
                ) )}
            </div>
        </div>
    )
}
