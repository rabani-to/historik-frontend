import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import { TiLocation } from "react-icons/ti"
import { VscFilePdf } from "react-icons/vsc"
import { BsFillFileEarmarkPdfFill } from "react-icons/bs"
import Link from "next/link"
import { GoLocation } from "react-icons/go"
import { MdOutlineSick, MdSick } from "react-icons/md"
import DoctorCard from "@/components/DoctorCard"
export default function Record() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <Header>Leg Fracture</Header>
          <p className="text-xs text-zinc-600">
            Saturday March 29, 23:30PM - 2022
          </p>
        </section>

        <div className="flex text-sm items-center space-x-1">
          <GoLocation className="text-2xl" />
          <span>Hospital Infata Sofia, Madrid, Spain</span>
        </div>
        <div className="flex text-sm items-center space-x-1">
          <MdOutlineSick className="text-2xl" />
          <span>Pain, Swelling</span>
        </div>

        <strong className="pt-2">Doctor</strong>
        <DoctorCard withProfile="1" />

        <strong className="border-b py-2">Diagnosis</strong>
        <p className="text-zinc-500 text-sm">
          AP xray of left tib/fib, in a skeletally mature individual with an
          open comminuted midshaft tibia fracture and a segmental midshaft
          fibula fracture
        </p>
        <strong className="border-b py-2">Treatment</strong>
        <p className="text-zinc-500 text-sm">
          Leg was placed in a cast for the next 6 months. The patient should
          limit their mobility and walk with crutches for the first 4 months.
        </p>
        <p className="text-zinc-500 text-sm">
          After this period, the patient will have another appointment where the
          next steps will be established.
        </p>
        <strong className="border-b py-2">Comments</strong>
        <p className="text-zinc-500 text-sm">N/A</p>

        <strong>Attachments</strong>
        <div className="flex flex-wrap">
          <Link href="/example.png">
            <a
              target="_blank"
              className="bg-purple-200 hover:outline text-sm text-black p-4 pr-5 flex items-center rounded-lg space-x-2"
            >
              <BsFillFileEarmarkPdfFill className="text-2xl" />
              <strong>Fractured Leg X-RAY</strong>
            </a>
          </Link>
        </div>
      </Layout>
    </Fragment>
  )
}
