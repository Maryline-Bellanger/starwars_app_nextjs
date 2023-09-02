import usePlanetsList from "../../../hooks/planets/usePlanetsList";
import PlanetsIcon from "../../../../../public/images/planets.png"
import Image from "next/image";

type cardPlanetType = {
    planets: string[];
}

export default function CardPlanets({planets}: cardPlanetType) {
    const {planetsName} = usePlanetsList(planets)

    return (
        <>
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <h1 className="text-xl font-bold text-yellow-400">Planets</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {planetsName.length > 0 ? planetsName.map((planetList, index) => 
                        <div key={index} className="flex flex-row items-center h-7 text-sm">
                            <Image src={PlanetsIcon} alt="Planets" width={15} />
                            <span className="px-2">{planetList}</span>
                        </div>) : <span>n/a</span> }
                    </div>
                </div>
            </div>
        </>
    )
}