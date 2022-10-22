import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Layout from "@/components/Layout"
import ProfileImage from "@/components/ProfileImage"
import { HiDotsVertical } from "react-icons/hi"

function Logo() {
  return (
    <div className="w-40">
      <Image
        src="/logo.png"
        width={198}
        height={49}
        alt=""
        layout="responsive"
      />
    </div>
  )
}

export default function Dashboard() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        maxWidth="lg:max-w-4xl"
        className="items-center justify-center"
        noFooter
        noBackButton
      >
        <div className="flex w-full">
          <button className="flex space-x-2 pt-2 items-center">
            <ProfileImage src="/ramon.jpg" className="w-10 h-10" />
            <strong className="whitespace-nowrap">Agustin Gutierres</strong>
            <div className="w-2 h-2 rounded-full bg-green-600" />
          </button>
        </div>

        <div className="pb-20 max-w-sm w-full flex space-y-4 flex-grow flex-col justify-center items-center">
          <div className="flex pb-4 w-full justify-center items-center">
            <Logo />
          </div>
          <Input placeholder="Input user phone number or DNI" />
          <Button isLink href="/dashboard/create">
            Request Data
          </Button>
        </div>
      </Layout>
    </Fragment>
  )
}
