type CardPlanetType = {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
}

const TEXT_TITLE = "py-1 font-bold text-sm text-yellow-200"
const TEXT_WHITE = "font-normal text-white"

export default function CardPlanetDetail({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population
}: CardPlanetType) {
    return (
        <div>
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <div>
                        <h1 className="text-xl font-bold text-yellow-400">{name}</h1>
                        <p className={TEXT_TITLE}>Rotation period:
                            <span className={TEXT_WHITE}> {rotation_period !== "unknown" ? `${rotation_period} hours` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Orbital period:
                            <span className={TEXT_WHITE}> {orbital_period !== "unknown" ? `${orbital_period} days` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Diameter:
                            <span className={TEXT_WHITE}> {diameter !== "unknown" ? `${diameter} km` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Climate:
                            <span className={TEXT_WHITE}> {climate !== "unknwon" ? `${climate}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Gravity:
                            <span className={TEXT_WHITE}> {gravity !== "unknwon" ? `${gravity}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Terrain:
                            <span className={TEXT_WHITE}> {terrain !== "unknwon" ? `${terrain}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Surface water:
                            <span className={TEXT_WHITE}> {surface_water !== "unknwon" ? `${surface_water}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Population:
                            <span className={TEXT_WHITE}> {population !== "unknwon" ? `${population}` : "n/a"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}