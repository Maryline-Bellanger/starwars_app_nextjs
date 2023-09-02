"use client"

import useCharacter from "@/app/hooks/characters/useCharacter";
import CardCharacterDetail from "../components/CardCharacterDetail";
import CardFilms from "../../films/components/CardFilms";
import CardSpecies from "../../species/components/CardSpecies";
import CardStarships from "../../starships/components/CardStarships";
import CardVehicles from "../../vehicles/components/CardVehicles";
import Loading from "@/app/components/loading/Loading";
import Image from "next/image";
import { baseURLImage } from "@/app/services/api";
import { getUrlId } from "@/app/utils/getUrlId";


export default function Character({params}: {params: {id: string}}) {
    const { character, isLoading, error } = useCharacter(params.id)
   
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error
    
    return (
        <div className="mx-6 my-24">
            {character && 
                <>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-3 basis-1/4 flex items-center justify-center">
                            <Image
                                src={`${baseURLImage}characters/${getUrlId(character.url)}.jpg`}
                                alt="Image not found"
                                width={200}
                                height={200}
                                className="max-w-sm rounded-lg shadows-2x1"/>
                        </div>
                        <div className="p-3 basis-3/4">
                            <CardCharacterDetail
                                name={character.name}
                                hair_color={character.hair_color}
                                height={character.height}
                                mass={character.mass}
                                skin_color={character.skin_color}
                                eye_color={character.eye_color}
                                birth_year={character.birth_year}
                                gender={character.gender}
                                homeworld={`${getUrlId(character.homeworld)}`}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="p-3 basis-1/2">
                            {<CardFilms films={character.films && character.films.map((film) => `${getUrlId(film)}`)} />}
                        </div>
                        <div className="p-3 basis-1/2">
                            {<CardStarships starships={character.starships && character.starships.map((starship) => `${getUrlId(starship)}`)} />}
                        </div>    
                    </div>   
                    <div className="flex flex-col lg:flex-row">      
                        <div className="p-3 basis-1/2">
                            {<CardVehicles vehicles={character.vehicles && character.vehicles.map((vehicle) => `${getUrlId(vehicle)}`)} />}   
                        </div>
                        <div className="p-3 basis-1/2">
                            {<CardSpecies species={character.species && character.species.map((specie) => `${getUrlId(specie)}`)} />}
                        </div>                   
                    </div>
                </>
            }  
        </div>
    )
}
