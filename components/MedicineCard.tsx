import Link from "next/link"
import { CgPill } from "react-icons/cg"
import { MdArrowForwardIos } from "react-icons/md"

function MedicineCard() {
  return (
    <Link href="/medicines">
      <a className="bg-zinc-100 group p-4 rounded-lg w-full flex space-x-4 items-center">
        <div className="px-1">
          <CgPill className="text-3xl" />
        </div>
        <div className="flex-grow text-left">
          <h3 className="font-bold">Penicillin</h3>
          <p className="text-zinc-700 text-sm">2 pills/day</p>
          <p className="text-xs text-zinc-500">Doctor Agustin Gutierres</p>
        </div>
        <MdArrowForwardIos className="text-xl group-hover:translate-x-px" />
      </a>
    </Link>
  )
}

export default MedicineCard
