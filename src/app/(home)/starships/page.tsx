"use client"

import Card from "@/app/components/Card";
import useStarships from "@/app/hooks/starships/useStarships";
import Link from "next/link";
import Pagination from "@/app/components/pagination/Pagination";
import Loading from "@/app/components/loading/Loading";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";
import { useState } from "react";

export default function Starships() {
    const [page, setPage] = useState(1);
    const { starships, isLoading, error } = useStarships({page})
    const totalPage = starships && Math.ceil(starships.count / 10)
   
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
                {starships && starships.results.map((starship) => (
                    <Link href={`/starships/${getUrlId(starship.url)}`} key={`${getUrlId(starship.url)}`}>
                        <Card 
                            id={`${getUrlId(starship.url)}`} 
                            name={starship.name} 
                            image={`${baseURLImage}starships/${getUrlId(starship.url)}.jpg`} />
                    </Link>
                ) )}
            </div>
        </div>
    )
}
