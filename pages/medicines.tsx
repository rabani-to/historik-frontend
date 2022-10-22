import { Fragment } from "react"
import Head from "next/head"

import MedicineCard from "@/components/MedicineCard"
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
        <Header>My Medicine</Header>
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
      </Layout>
    </Fragment>
  )
}
