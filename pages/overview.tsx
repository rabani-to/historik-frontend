import { Fragment } from "react"
import Head from "next/head"

import { BsFillPersonFill } from "react-icons/bs"
import { BiDonateBlood } from "react-icons/bi"
import { GiPeanut } from "react-icons/gi"
import { FaBirthdayCake, FaWeight } from "react-icons/fa"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Button from "@/components/Button"
import RowItem from "@/components/RowItem"

export default function Overview() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <Header>Record Overview</Header>
          <p>
            Your individual parameters are based on the visits with your
            doctors.
          </p>
        </section>
        <div className="flex flex-col w-full">
          <RowItem
            name="Name"
            value="Amerika Linares"
            Icon={BsFillPersonFill}
          />
          <RowItem name="Weight" value="80kg" Icon={FaWeight} />
          <RowItem name="Birthday" value="Sept. 17" Icon={FaBirthdayCake} />
          <RowItem name="Allergies" value="Nuts, Penicillin" Icon={GiPeanut} />
          <RowItem name="Blood Type" value="O-" Icon={BiDonateBlood} />
        </div>
        <Button isLink href="/publics">
          View my public data
        </Button>
      </Layout>
    </Fragment>
  )
}
