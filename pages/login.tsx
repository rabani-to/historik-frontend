import { Fragment, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Layout from "@/components/Layout"

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

export default function Login() {
  const [user, setUser] = useState("")
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="items-center justify-center" noFooter noBackButton>
        <Logo />
        <div className="mt-4" />
        <Input
          onInput={({ currentTarget }) => setUser(currentTarget.value)}
          placeholder="Input your phone number or DNI"
        />
        <Button isLink href="/">
          LOGIN
        </Button>
      </Layout>
    </Fragment>
  )
}
