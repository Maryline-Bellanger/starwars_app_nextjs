type CardSpecieType = {
    name: string,
    average_height: string,
    average_lifespan: string,
    classification: string,
    designation: string,
    eye_colors: string,
    hair_colors: string,
    homeworld: string,
    language: string,
    skin_colors: string,
}

const TEXT_TITLE = "py-1 font-bold text-sm text-yellow-200"
const TEXT_WHITE = "font-normal text-white"

export default function CardSpecieDetail({
    name,
    average_height,
    average_lifespan,
    classification,
    designation,
    eye_colors,
    hair_colors,
    homeworld,
    language,
    skin_colors
}: CardSpecieType) {
    return (
        <div>
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <div>
                        <h1 className="text-xl font-bold text-yellow-400">{name}</h1>
                        <p className={TEXT_TITLE}>Average height:
                            <span className={TEXT_WHITE}> {average_height !== "unknown" ? `${average_height} cm` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Average lifespan:
                            <span className={TEXT_WHITE}> {average_lifespan !== "unknown" ? `${average_lifespan}` : "n/a"} years</span>
                        </p>
                        <p className={TEXT_TITLE}>Classification:
                            <span className={TEXT_WHITE}> {classification !== "unknown" ? `${classification}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Designation:
                            <span className={TEXT_WHITE}> {designation}</span>
                        </p>
                        <p className={TEXT_TITLE}>Eye colors:
                            <span className={TEXT_WHITE}> {eye_colors !== "unknown" ? `${eye_colors}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Hair colors:
                            <span className={TEXT_WHITE}> {hair_colors !== "unknown" && hair_colors !== "none" ? `${hair_colors}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Homeworld:
                            <span className={TEXT_WHITE}> {homeworld}</span>
                        </p>
                        <p className={TEXT_TITLE}>Language:
                            <span className={TEXT_WHITE}> {language !== "unknown" ? `${language}` : "n/a"}</span>
                        </p>
                        <p className={TEXT_TITLE}>Skin colors:
                            <span className={TEXT_WHITE}> {skin_colors}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}