import { Fragment, InputHTMLAttributes, PropsWithChildren } from "react"
import Head from "next/head"
import { CgProfile } from "react-icons/cg"
import { BiDonateBlood, BiHomeAlt } from "react-icons/bi"

function Footer() {
  return (
    <Fragment>
      <div className="flex-grow" />
      <footer className="flex sticky bg-white z-10 bottom-0 w-full border-t border-zinc-100 items-center justify-between">
        <button className="flex py-4 px-2 w-1/3 hover:bg-zinc-100 flex-col space-y-2 items-center justify-center">
          <BiHomeAlt className="text-2xl" />
          <p className="text-sm">Home</p>
        </button>

        <button className="flex py-4 px-2 w-1/3 hover:bg-zinc-100 flex-col space-y-2 items-center justify-center">
          <BiDonateBlood className="text-2xl" />
          <p className="text-sm">Overview</p>
        </button>

        <button className="flex py-4 px-2 w-1/3 hover:bg-zinc-100 flex-col space-y-2 items-center justify-center">
          <CgProfile className="text-2xl" />
          <p className="text-sm">Profile</p>
        </button>
      </footer>
    </Fragment>
  )
}

export default Footer
