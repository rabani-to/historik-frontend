import { Fragment } from "react"
import Head from "next/head"

import { BiDonateBlood } from "react-icons/bi"
import { GiPeanut } from "react-icons/gi"
import { BsFillPersonFill } from "react-icons/bs"
import { FaBirthdayCake, FaWeight } from "react-icons/fa"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Input from "@/components/Input"
import RowItem from "@/components/RowItem"

export default function RecordList() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-sm w-full min-h-screen pt-4 mx-auto space-y-4 flex flex-col items-center">
        <Input placeholder="Search for a hospital or doctor" />
        <Header>My Record</Header>
        <p>
          Your individual parameters are base on the visits with your doctors.
        </p>
        <div className="flex flex-col w-full">
          <RowItem
            name="Name"
            value="Amerika Linares"
            Icon={BsFillPersonFill}
          />
          <RowItem name="Weight" value="80kg" Icon={FaWeight} />
          <RowItem name="Birthday" value="Sept. 17" Icon={FaBirthdayCake} />
          <RowItem name="Allergies" value="Nuts, Peniciline" Icon={GiPeanut} />
          <RowItem name="Blood Type" value="O-" Icon={BiDonateBlood} />
        </div>
        <Footer />
      </main>
    </Fragment>
  )
}
