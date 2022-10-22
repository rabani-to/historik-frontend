import { Fragment, InputHTMLAttributes, PropsWithChildren } from "react"
import Head from "next/head"
import { CgProfile } from "react-icons/cg"
import { BiDonateBlood, BiHomeAlt } from "react-icons/bi"
import Link from "next/link"

function Action({ href, Icon, children }) {
  return (
    <Link href={href}>
      <a className="flex py-4 px-2 w-1/3 hover:bg-zinc-100 flex-col space-y-2 items-center justify-center">
        <Icon className="text-2xl" />
        <p className="text-sm">{children}</p>
      </a>
    </Link>
  )
}

function Footer() {
  return (
    <Fragment>
      <div className="flex-grow" />
      <footer className="flex sticky bg-white z-10 bottom-0 w-full border-t border-zinc-100 items-center justify-between">
        <Action Icon={BiHomeAlt} href="/">
          <p className="text-sm">Home</p>
        </Action>

        <Action Icon={BiDonateBlood} href="/overview">
          <p className="text-sm">Overview</p>
        </Action>
        <Action Icon={CgProfile} href="/profile">
          <p className="text-sm">Profile</p>
        </Action>
      </footer>
    </Fragment>
  )
}

export default Footer
