import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import RecordCard from "@/components/RecordCard"
import ProfileImage from "@/components/ProfileImage"

export default function Doctor() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="flex flex-col items-center">
          <ProfileImage src="/ramon.jpg" className="w-20 h-20" />
          <Header className="w-full text-center">Agustin Gutierres</Header>
          <p className="text-zinc-500 text-sm">
            Heart Specialist - Madrid, Spain
          </p>
        </section>
        <Header>My Records</Header>
        <RecordCard />
      </Layout>
    </Fragment>
  )
}
