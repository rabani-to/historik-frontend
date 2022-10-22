import { Fragment } from "react"
import Head from "next/head"
import { CgPill } from "react-icons/cg"
import { BiDonateBlood } from "react-icons/bi"
import { MdArrowForwardIos } from "react-icons/md"
import { GiMilkCarton, GiPeanut } from "react-icons/gi"
import { FaAllergies, FaBirthdayCake, FaWeight } from "react-icons/fa"
import { RiHospitalLine } from "react-icons/ri"
import { GrDocumentText } from "react-icons/gr"
import { AiOutlineMedicineBox } from "react-icons/ai"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Input from "@/components/Input"
import { BsFillPersonFill } from "react-icons/bs"
import { useState } from "react"

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
          <Record name="Name" value="Ilja Solomovs" Icon={BsFillPersonFill} />
          <Record name="Weight" value="80kg" Icon={FaWeight} />
          <Record name="Birthday" value="Sept. 17" Icon={FaBirthdayCake} />
          <Record name="Allergies" value="Nuts, Peniciline" Icon={GiPeanut} />
          <Record name="Blood Type" value="O-" Icon={BiDonateBlood} />
        </div>
        <Footer />
      </main>
    </Fragment>
  )
}

function Record({ Icon, name, value }) {
  const [color] = useState(() => {
    const hue = Math.random() * 360
    return {
      background: `hsl(${hue}, 33%, 88%)`,
      icon: `hsl(${hue}, 33%, 66%)`,
    }
  })
  return (
    <div className="w-full flex space-x-2 items-center border-b py-4 border-zinc-100">
      <div
        style={{
          background: color.background,
        }}
        className="w-12 flex text-2xl items-center justify-center h-12 bg-black rounded-lg"
      >
        <Icon style={{ color: color.icon }} />
      </div>
      <p className="px-2">{name}</p>
      <div className="flex-grow" />
      <p>{value}</p>
    </div>
  )
}
