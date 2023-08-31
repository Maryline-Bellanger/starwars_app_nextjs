"use client"

import useStarship from "@/app/hooks/starships/useStarship";
import CardStarshipDetail from "../components/CardStarshipDetail";
import CardCharacters from "../../characters/components/CardCharacters";
import CardFilms from "../../films/components/CardFilms";
import Loading from "@/app/components/loading/Loading";
import Image from "next/image";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";

export default function Starship({params}: {params: {id: string}}) {
    const { starship, isLoading, error} = useStarship(params.id)

    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error
    
    return (
        <div className="m-3">
            {starship && 
                <>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/4 flex items-center justify-center">
                            <Image
                                src={`${baseURLImage}starships/${getUrlId(starship.url)}.jpg`}
                                alt=""
                                width={200}
                                height={200}
                                className="max-w-sm rounded-lg shadows-2x1" />
                        </div>
                        <div className="p-2 basis-3/4">
                            <CardStarshipDetail
                            name={starship.name}
                            model={starship.model}
                            manufacturer={starship.manufacturer}
                            cost_in_credits={starship.cost_in_credits}
                            length={starship.length}
                            max_atmosphering_speed={starship.max_atmosphering_speed}
                            crew={starship.crew}
                            passengers={starship.passengers}
                            cargo_capacity={starship.cargo_capacity}
                            consumables={starship.consumables}
                            hyperdrive_rating={starship.hyperdrive_rating}
                            MGLT={starship.MGLT}
                            starship_class={starship.starship_class}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/2">
                            <CardCharacters characters={starship.pilots && starship.pilots.map((character) => `${getUrlId(character)}`)} title="Pilots" />
                        </div>
                        <div className="p-2 basis-1/2">
                            <CardFilms films={starship.films && starship.films.map((film) => `${getUrlId(film)}`)} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
