import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"
import Input from "@/components/Input"
import Button from "@/components/Button"

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

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-sm w-full min-h-screen py-4 mx-auto space-y-8 flex flex-col items-center justify-center">
        <Logo />
        <div className="mt-4" />
        <Input placeholder="Input your phone number or DNI" />
        <Button isLink href="/">
          LOGIN
        </Button>
      </main>
    </Fragment>
  )
}
