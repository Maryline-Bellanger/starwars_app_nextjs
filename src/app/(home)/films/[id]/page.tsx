"use client"

import useFilm from "@/app/hooks/films/useFilm";
import CardFilmDetail from "../../films/components/CardFilmDetail";
import CardCharacters from "../../characters/components/CardCharacters";
import CardSpecies from "../../species/components/CardSpecies";
import CardStarships from "../../starships/components/CardStarships";
import CardVehicles from "../../vehicles/components/CardVehicles";
import CardPlanets from "../../planets/components/CardPlanets";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";

import Image from "next/image"
import Loading from "@/app/components/loading/Loading"

export default function Film({params}: {params: {id: string}}) {
    const { film, isLoading, error} = useFilm(params.id)

    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error
    
    return (
        <div className="mx-6 my-24">
            {film && 
                <>
                    <div  className="flex flex-col lg:flex-row">
                        <div className="p-3 basis-1/4 flex items-center justify-center">
                            <Image
                                src={`${baseURLImage}films/${getUrlId(film.url)}.jpg`}
                                alt=""
                                width={200}
                                height={200}
                                className="max-w-sm rounded-lg shadows-2x1" />
                        </div>
                        <div className="p-3 basis-3/4">
                            <CardFilmDetail
                                title={film.title}
                                episode_id={film.episode_id}
                                opening_crawl={film.opening_crawl}
                                director={film.director}
                                producer={film.producer}
                                release_date={film.release_date}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-3 basis-full">
                            <CardCharacters characters={film.characters && film.characters.map((character) => `${getUrlId(character)}`)} title="Characters" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-3 basis-1/2">
                            <CardStarships starships={film.starships && film.starships.map((starship) => `${getUrlId(starship)}`)} />
                        </div>
                        <div className="p-3 basis-1/2">
                            <CardPlanets planets={film.planets && film.planets.map((planet) => `${getUrlId(planet)}`)} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-3 basis-1/2">
                            <CardVehicles vehicles={film.vehicles && film.vehicles.map((vehicle) => `${getUrlId(vehicle)}`)} />
                        </div>
                        <div className="p-3 basis-1/2">
                            <CardSpecies species={film.species && film.species.map((specie) => `${getUrlId(specie)}`)} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
