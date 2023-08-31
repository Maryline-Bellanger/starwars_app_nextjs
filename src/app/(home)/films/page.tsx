"use client"

import Card from "@/app/components/Card";
import useFilms from "@/app/hooks/films/useFilms";
import Link from "next/link";
import Loading from "@/app/components/loading/Loading";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";

export default function Films() {
    const { films, isLoading, error } = useFilms()
   
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error

    return (
        <div>
            <div className="flex flex-wrap my-6 justify-center">
                {films && films.results.map((film) => (
                    <Link href={`/films/${getUrlId(film.url)}`} key={`${getUrlId(film.url)}`}>
                        <Card 
                            id={`${getUrlId(film.url)}`} 
                            name={film.title} 
                            image={`${baseURLImage}films/${getUrlId(film.url)}.jpg`} />
                    </Link>
                ) )}
            </div>
        </div>
    )
}
