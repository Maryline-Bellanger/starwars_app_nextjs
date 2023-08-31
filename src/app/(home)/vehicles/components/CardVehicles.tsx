import useVehiclesList from "../../../hooks/vehicles/useVehiclesList";
import VehiclesIcon from "../../../../../public/images//vehicles.png"
import Image from "next/image";

type cardVehicleType = {
    vehicles: string[];
}

export default function CardVehicles({vehicles}: cardVehicleType) {
    const {vehiclesName} = useVehiclesList(vehicles)

    return (
        <>
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <h1 className="text-xl font-bold  text-yellow-400">Vehicles</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {vehiclesName.length > 0 ? vehiclesName.map((vehicleList, index) => 
                        <div key={index} className="flex flex-row items-center h-7 text-sm">
                            <Image src={VehiclesIcon} alt="Vehicles" width={20} />
                            <span className="px-2">{vehicleList}</span>
                        </div>) : <span>n/a</span>}
                    </div>
                </div>
            </div>
        </>
    )
}