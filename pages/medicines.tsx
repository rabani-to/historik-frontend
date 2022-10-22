import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"

export default function Medicines() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-24 h-24 bg-black rounded-full" />
        <section>
          <Header>Agustin Gutierres</Header>
          <p className="text-zinc-500 text-sm">
            Heart Specialist - Madrid, Spain
          </p>
        </section>
      </Layout>
    </Fragment>
  )
}
