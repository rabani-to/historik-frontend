import { Fragment } from "react"
import Link from "next/link"
import Head from "next/head"

import { CgPill } from "react-icons/cg"
import { BiDonateBlood } from "react-icons/bi"
import { MdArrowForwardIos } from "react-icons/md"
import { GiMilkCarton } from "react-icons/gi"
import { FaAllergies } from "react-icons/fa"
import { RiHospitalLine } from "react-icons/ri"
import { GrDocumentText } from "react-icons/gr"
import { AiOutlineMedicineBox } from "react-icons/ai"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Input from "@/components/Input"

function InfoCard() {
  return (
    <Link href="/overview">
      <a className="bg-indigo-600 shadow-2xl w-full round-lg p-4 rounded-lg flex flex-col space-y-4">
        <div className="flex text-white items-center space-x-2">
          <div className="w-12 h-12 bg-white rounded-full"></div>
          <p className="font-bold text-lg">Ilya Koslov</p>
        </div>
        <div className="flex text-white items-center space-x-4 w-full justify-between">
          <div className="flex flex-col space-y-2 items-center justify-center">
            <div className="flex items-center space-x-1">
              <BiDonateBlood className="text-2xl" />
              <strong>O+</strong>
            </div>
            <p className="text-sm">Blood Type</p>
          </div>

          <div className="flex flex-col space-y-2 items-center justify-center">
            <div className="flex items-center space-x-1">
              <FaAllergies className="text-2xl" />
              <strong>3+</strong>
            </div>
            <p className="text-sm">Allergies</p>
          </div>

          <div className="flex flex-col space-y-2 items-center justify-center">
            <div className="flex items-center space-x-1">
              <GiMilkCarton className="text-2xl" />
              <strong>3+</strong>
            </div>
            <p className="text-sm">Intolerances</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

function Action({ children, href, Icon }) {
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
      <Layout>
        <Input placeholder="Search for a hospital or doctor" />
        <div className="flex w-full space-x-2 justify-between">
          <Action href="/doctor" Icon={AiOutlineMedicineBox}>
            Doctor
          </Action>
          <Action href="/hospitals" Icon={RiHospitalLine}>
            Hospital
          </Action>
          <Action href="/publics" Icon={GrDocumentText}>
            Public Data
          </Action>
          <Action href="/medicines" Icon={CgPill}>
            Meds
          </Action>
        </div>
        <Header>Overview</Header>
        <InfoCard />
        <Header>Records</Header>
        <RecordCard />
        <RecordCard />
        <RecordCard />
        <RecordCard />
      </Layout>
    </Fragment>
  )
}

function RecordCard() {
  return (
    <Link href="/record/1">
      <a className="bg-zinc-100 p-4 rounded-lg w-full flex space-x-4 items-center">
        <div className="bg-black w-12 h-12 min-w-[3rem] rounded-full"></div>
        <div className="flex-grow text-left">
          <h3 className="font-bold">Agustin Loeches</h3>
          <p className="text-zinc-500 text-sm">
            Heart Specialist - Madrid, Spain
          </p>
          <p className="text-zinc-500 text-xs">September 17, 23:30PM - 2022</p>
        </div>
        <MdArrowForwardIos className="text-xl" />
      </a>
    </Link>
  )
}
