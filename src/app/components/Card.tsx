import Image from "next/image"

type cardData = {
    id: string,
    name: string,
    image: string,
}

export default function Card({name, image, id}: cardData) {
  return (
    <div key={id} className="card w-40 bg-base-100 shadow-xl m-3">
            <Image
                src={image}
                alt="Image not found"
                width={200}
                height={200}
                className="rounded-t-xl bg-black text-center" />
        <div className="py-3 text-black font-semibold items-center text-center text-xs">
            {name}
        </div>
    </div>
  )
}