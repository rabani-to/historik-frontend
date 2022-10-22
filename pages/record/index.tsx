import { Fragment } from "react"
import Head from "next/head"

import RecordCard from "@/components/RecordCard"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Input from "@/components/Input"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Input placeholder="Search for a hospital or doctor" />
        <Header>My Record</Header>
        <RecordCard withProfile="1" withDate="March 19, 23:30PM - 2022" />
        <RecordCard withProfile="1" withDate="March 19, 23:30PM - 2022" />
        <RecordCard withProfile="1" withDate="March 19, 23:30PM - 2022" />
      </Layout>
    </Fragment>
  )
}
