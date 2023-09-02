import useStarshipsList from "../../../hooks/starships/useStarshipsList";
import StarshipsIcon from "../../../../../public/images/starships.png"
import Image from "next/image";

type cardStarshipType =  {
    starships: string[];
}

export default function CardStarships({starships}: cardStarshipType) {
    const {starshipsName} = useStarshipsList(starships)

    return (
        <>
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <h1 className="text-xl font-bold text-yellow-400">Starships</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {starshipsName.length > 0 ? starshipsName.map((starshipList, index) => 
                        <div key={index} className="flex flex-row items-center h-7 text-sm">
                            <Image src={StarshipsIcon} alt="Starships" width={16} />
                            <span className="px-2">{starshipList}</span>
                        </div>) : <span>n/a</span>}
                    </div>
                </div>
            </div>
        </>
    )
}