"use client"

import useSpecie from "@/app/hooks/species/useSpecie";
import usePlanet from "@/app/hooks/planets/usePlanet";
import CardSpecieDetail from "../components/CardSpecieDetail";
import CardCharacters from "../../characters/components/CardCharacters";
import CardFilms from "../../films/components/CardFilms";
import Loading from "@/app/components/loading/Loading";
import Image from "next/image";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";

export default function SpecieDetail({params}: {params: {id: string}}) {
    const { specie, isLoading, error } = useSpecie(params.id)
    const planetId = specie && specie.homeworld !== null ? `${specie && getUrlId(specie.homeworld)}` : "n/a"
    const { planet } = usePlanet(planetId)

    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error

    return (
        <div className="m-3">
            {specie && 
                <>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/4 flex items-center justify-center">
                            <Image
                                src={`${baseURLImage}species/${getUrlId(specie.url)}.jpg`}
                                alt=""
                                width={200}
                                height={200}
                                className="max-w-sm rounded-lg shadows-2x1" />
                        </div>
                        <div className="p-2 basis-3/4">
                        <CardSpecieDetail 
                            name={specie.name}
                            average_height={specie.average_height}
                            average_lifespan={specie.average_lifespan}
                            classification={specie.classification}
                            designation={specie.designation}
                            eye_colors={specie.eye_colors}
                            hair_colors={specie.hair_colors}
                            homeworld={planet && planet.name ? planet.name : "n/a"}
                            language={specie.language}
                            skin_colors={specie.skin_colors}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-2 basis-1/2">
                            <CardCharacters characters={specie.people && specie.people.map((character) => `${getUrlId(character)}`)} title="People" />
                        </div>
                        <div className="p-2 basis-1/2">
                            <CardFilms films={specie.films && specie.films.map((film) => `${getUrlId(film)}`)} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
