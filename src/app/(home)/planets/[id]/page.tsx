"use client"

import usePlanet from "@/app/hooks/planets/usePlanet";
import CardPlanetDetail from "../components/CardPlanetDetail";
import CardCharacters from "../../characters/components/CardCharacters";
import CardFilms from "../../films/components/CardFilms";
import Loading from "@/app/components/loading/Loading";
import Image from "next/image";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";

export default function Planet({params}: {params: {id: string}}) {
    const { planet, isLoading, error} = usePlanet(params.id)

    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error

    return (
        <div className="mx-6 my-24">
            {planet && 
                <>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/4 flex items-center justify-center">
                            <Image
                                src={`${baseURLImage}planets/${getUrlId(planet.url)}.jpg`}
                                alt=""
                                width={200}
                                height={200}
                                className="max-w-sm rounded-lg shadows-2x1" />
                        </div>
                        <div className="p-2 basis-3/4">
                            <CardPlanetDetail 
                                name={planet.name}
                                rotation_period={planet.rotation_period}
                                orbital_period={planet.orbital_period}
                                diameter={planet.diameter}
                                climate={planet.climate}
                                gravity={planet.gravity}
                                terrain={planet.terrain}
                                surface_water={planet.surface_water}
                                population={planet.population} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/2">
                            <CardCharacters characters={planet.residents && planet.residents.map((resident) => `${getUrlId(resident)}`)} title="Residents" />
                        </div>
                        <div className="p-2 basis-1/2">
                            <CardFilms films={planet.films && planet.films.map((film) => `${getUrlId(film)}`)} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
