import { Fragment } from "react"
import Link from "next/link"
import Head from "next/head"

import { CgPill } from "react-icons/cg"
import { MdArrowForwardIos, MdBloodtype } from "react-icons/md"
import { GiMilkCarton } from "react-icons/gi"
import { FaAllergies } from "react-icons/fa"
import { RiHospitalLine } from "react-icons/ri"
import { GrDocumentText } from "react-icons/gr"
import { AiOutlineMedicineBox } from "react-icons/ai"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Input from "@/components/Input"
import RecordCard from "@/components/RecordCard"
import ProfileImage from "@/components/ProfileImage"
import Button from "@/components/Button"
import { BsArrowRight } from "react-icons/bs"

function InfoCard() {
  return (
    <Link href="/overview">
      <a className="bg-indigo-600 group shadow-2xl w-full round-lg p-4 rounded-lg flex flex-col space-y-4">
        <div className="flex text-white items-center space-x-4">
          <ProfileImage src="/tacha.jpg" className="w-16 h-16" />
          <p className="font-bold text-lg">Amerika Linares</p>
          <div className="flex-grow" />
          <div className="rounded-full p-2 group-hover:bg-white group-hover:text-black transition-colors">
            <MdArrowForwardIos className="text-xl group-hover:scale-110 transition-transform group-hover:translate-x-px duration-500" />
          </div>
        </div>
        <div className="flex text-white items-end space-x-4 w-full justify-between">
          <div className="flex flex-col space-y-2 justify-center">
            <div className="flex items-end justify-center space-x-1">
              <FaAllergies className="text-2xl" />
              <strong>3+</strong>
            </div>
            <p className="text-sm">Allergies</p>
          </div>

          <div className="flex flex-col space-y-2 justify-center">
            <div className="flex items-end justify-center space-x-1">
              <GiMilkCarton className="text-3xl" />
              <strong>3+</strong>
            </div>
            <p className="text-sm">Intolerances</p>
          </div>

          <div className="flex h-full flex-col space-y-2 justify-center">
            <div className="flex items-end justify-center space-x-1">
              <MdBloodtype className="text-3xl" />
              <strong>O+</strong>
            </div>
            <p className="text-sm">Blood Type</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

function QuickAction({ children, href, Icon }) {
  return (
    <Link href={href}>
      <a className="flex flex-col group space-y-1 justify-center items-center">
        <div className="bg-zinc-100 group-hover:outline outline-2 outline-indigo-600 w-16 h-16 flex items-center justify-center rounded-full">
          <Icon className="text-xl" />
        </div>
        <p className="text-sm">{children}</p>
      </a>
    </Link>
  )
}

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout noBackButton>
        <Input placeholder="Search for a hospital or doctor" />
        <div className="flex w-full space-x-2 justify-between">
          <QuickAction href="/doctor" Icon={AiOutlineMedicineBox}>
            Doctors
          </QuickAction>
          <QuickAction href="/hospital" Icon={RiHospitalLine}>
            Hospitals
          </QuickAction>
          <QuickAction href="/publics" Icon={GrDocumentText}>
            Public Data
          </QuickAction>
          <QuickAction href="/medicines" Icon={CgPill}>
            Meds
          </QuickAction>
        </div>
        <Header>Overview</Header>
        <InfoCard />
        <Header>Latest Records</Header>
        <RecordCard withProfile="1" withDate="March 19, 23:30PM - 2022" />
        <RecordCard withProfile="1" withDate="March 19, 23:30PM - 2022" />
        <RecordCard withProfile="1" withDate="March 19, 23:30PM - 2022" />
        <Button
          className="group flex items-center justify-between px-6"
          isLink
          href="/record"
          isSecondary
        >
          <span>View full record</span>
          <BsArrowRight className="text-2xl group-hover:translate-x-px" />
        </Button>
      </Layout>
    </Fragment>
  )
}
