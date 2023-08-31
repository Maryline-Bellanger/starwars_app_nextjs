import Image from "next/image";
import logo from "../../public/images/starwars_logo.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-5">
        <Image src={logo} alt="logo starwars" width={200} className="py-5" />
        <h1 className="text-yellow-400 text-3xl p-5">A long time ago in a galaxy far, far away...</h1>
        <div className="py-5">
            <button className="btn bg-neutral-800 border-neutral-500 opacity-80 hover:bg-neutral-900">
                <Link href={"/"} className="text-xl text-yellow-200">
                    Enter
                </Link>
            </button>
        </div>
    </div>
  )
}
