import useSpeciesList from "../../../hooks/species/useSpeciesList";
import SpeciesIcon from "../../../../../public/images/species.png"
import Image from "next/image";

type cardSpecieType = {
    species: string[];
}

export default function CardSpecies({species}: cardSpecieType) {
    const {speciesName} = useSpeciesList(species)

    return (
        <>
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <h1 className="text-xl font-bold text-yellow-400">Species</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {speciesName.length > 0 ? speciesName.map((specieList, index) => 
                        <div key={index} className="flex flex-row items-center h-7 text-sm">
                            <Image src={SpeciesIcon} alt="Species" width={14} />
                            <span className="px-2">{specieList}</span>
                        </div>) : <span>n/a</span> }
                    </div>
                </div>
            </div>
        </>
    )
}