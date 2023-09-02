"use client"

import Card from "@/app/components/Card";
import usePlanets from "@/app/hooks/planets/usePlanets";
import Link from "next/link";
import Pagination from "@/app/components/pagination/Pagination";
import Loading from "@/app/components/loading/Loading";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";
import { useState } from "react";

export default function Planets() {
    const [page, setPage] = useState(1);
    const { planets, isLoading, error } = usePlanets({page});
    const totalPage = planets && Math.ceil(planets.count / 10);

    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error

    return (
        <div className="my-24">
            <Pagination
                page={page}
                totalPage={totalPage}
                setPage={setPage}
            />
            <div className="flex flex-wrap my-6 justify-center">
                {planets && planets.results.map((planet) => (
                    <Link href={`/planets/${getUrlId(planet.url)}`} key={`${getUrlId(planet.url)}`}>
                        {planet.name !== "unknown"
                        ? 
                            <Card 
                                id={planet.name} 
                                name={planet.name} 
                                image={`${baseURLImage}planets/${getUrlId(planet.url)}.jpg`}
                                /> 
                        : ""}
                        
                    </Link>
                ) )}
            </div>
        </div>
    )
}