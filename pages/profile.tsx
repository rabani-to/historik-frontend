import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"

export default function Profile() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>My Profile</Header>
        <p>
          Your individual parameters are base on the visits with your doctors.
        </p>
      </Layout>
    </Fragment>
  )
}
