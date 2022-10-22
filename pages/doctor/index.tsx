import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Link from "next/link"
import { MdArrowForwardIos } from "react-icons/md"
import DoctorCard from "@/components/DoctorCard"

export default function DoctorList() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>My Doctors</Header>
        <DoctorCard withProfile="1" />
        <DoctorCard withProfile="1" />
        <DoctorCard withProfile="1" />
      </Layout>
    </Fragment>
  )
}
