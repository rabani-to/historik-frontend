import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import RecordCard from "@/components/RecordCard"

export default function Hospital() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <Header>Hospital Infanta Sofia</Header>
          <p className="text-zinc-500 text-sm">Madrid, Spain</p>
        </section>
        <Header>My Records</Header>
        <div className="flex flex-col w-full space-y-4">
          <RecordCard withProfile="1" withDate="Saturday 16, 23:30PM - 2021" />
          <RecordCard withProfile="1" withDate="Saturday 16, 23:30PM - 2021" />
          <RecordCard withProfile="1" withDate="Saturday 16, 23:30PM - 2021" />
        </div>
      </Layout>
    </Fragment>
  )
}
