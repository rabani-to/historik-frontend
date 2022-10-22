import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"

export default function Record() {
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
      </Layout>
    </Fragment>
  )
}
