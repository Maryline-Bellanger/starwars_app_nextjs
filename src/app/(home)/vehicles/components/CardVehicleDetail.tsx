type CardVehicleType = {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    vehicle_class: string,
}

const TEXT_TITLE = "py-1 font-bold text-sm text-yellow-200"
const TEXT_WHITE = "font-normal text-white"

export default function CardVehicleDetail({
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class
}: CardVehicleType) {
    return (
        <div>
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <div>
                        <h1 className="text-xl font-bold text-yellow-400">{name}</h1>
                        <p className={TEXT_TITLE}>Model:
                            <span className={TEXT_WHITE}> {model}</span>
                        </p>
                        <p className={TEXT_TITLE}>Manufacturer:
                            <span className={TEXT_WHITE}> {manufacturer !== "unknown" ? `${manufacturer}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Cost in credits:
                            <span className={TEXT_WHITE}> {cost_in_credits !== "unknown" ? `${cost_in_credits} galactic credit` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Length:
                            <span className={TEXT_WHITE}> {length !== "unknown" ? `${length} m` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Max atmosphering speed:
                            <span className={TEXT_WHITE}> {max_atmosphering_speed !== "unknown" ? `${max_atmosphering_speed} km/h` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Crew:
                            <span className={TEXT_WHITE}> {crew}</span>
                        </p>
                        <p className={TEXT_TITLE}>Passengers:
                            <span className={TEXT_WHITE}> {passengers !== "unknown" ? `${passengers}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Cargo capacity:
                            <span className={TEXT_WHITE}> {cargo_capacity !== "unknown" && cargo_capacity !== "none" ? `${cargo_capacity} kg` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Consumables:
                            <span className={TEXT_WHITE}> {consumables !== "unknown" && consumables !== "none" ? `${consumables}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Starship class:
                            <span className={TEXT_WHITE}> {vehicle_class}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
