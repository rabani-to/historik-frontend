import Link from "next/link"
import { MdArrowForwardIos } from "react-icons/md"
import ProfileImage from "./ProfileImage"

function RecordCard({
  withProfile,
  withDate,
}: {
  withProfile?: string
  withDate?: string
}) {
  return (
    <Link href="/record/1">
      <a className="bg-zinc-100 group p-4 rounded-lg w-full flex space-x-4 items-center">
        {withProfile && (
          <ProfileImage src="/ramon.jpg" className="w-12 h-12 min-w-[3rem]" />
        )}
        <div className="flex-grow text-left">
          <h3 className="font-bold">Leg Fracture</h3>
          <p className="text-zinc-700 text-sm">
            Hospital Santa Sofia - Madrid, Spain
          </p>
          {withDate && <div className="text-xs text-zinc-500">{withDate}</div>}
        </div>
        <MdArrowForwardIos className="text-xl group-hover:translate-x-px" />
      </a>
    </Link>
  )
}

export default RecordCard
