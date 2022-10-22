/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react"
import Head from "next/head"

import { BsPersonFill } from "react-icons/bs"
import { BiDonateBlood } from "react-icons/bi"
import { GiPeanut } from "react-icons/gi"
import { FaBirthdayCake, FaWeight } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

import Layout from "@/components/Layout"
import ProfileImage from "@/components/ProfileImage"
import RowItem from "@/components/RowItem"

export default function Publics() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="pt-1" />
        <div className="bg-indigo-600 text-white rounded-2xl flex flex-col justify-center items-center">
          <ProfileImage
            src="/tacha.jpg"
            className="w-[7rem] h-[7rem] border-white -mt-6 shadow-lg"
          />
          <strong className="text-xl mt-2">Amerika Linares</strong>
          <div className="flex space-x-3 pb-4 pt-1">
            <div className="flex items-center space-x-1">
              <FaBirthdayCake />
              <span>42</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdLocationOn className="text-lg" />
              <span>Madrid, Spain</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <RowItem name="Weight" value="80kg" Icon={FaWeight} />
          <RowItem
            name="Birthday"
            value="Sept. 17, 1980"
            Icon={FaBirthdayCake}
          />
          <RowItem name="Allergies" value="Nuts, Penicillin" Icon={GiPeanut} />
          <RowItem name="Blood Type" value="O-" Icon={BiDonateBlood} />
          <RowItem
            name="Emergency Contact"
            value="+34 609320123"
            Icon={BsPersonFill}
          />
        </div>
      </Layout>
    </Fragment>
  )
}
