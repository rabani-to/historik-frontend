import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"

export default function Doctor() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-24 h-24 bg-black rounded-full" />
        <Header>Agustin Loeches</Header>
        <p className="text-zinc-500 text-sm">
          Heart Specialist - Madrid, Spain
        </p>
        <Header>My Records</Header>
        <div className="border-t flex flex-col space-y-2 border-zinc-100 py-2">
          <p className="text-zinc-500 text-xs">September 17, 23:30PM - 2022</p>
          <p>
            Your individual parameters are base on the visits with your doctors.
          </p>
        </div>
      </Layout>
    </Fragment>
  )
}
