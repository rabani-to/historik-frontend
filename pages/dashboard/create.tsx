import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Layout from "@/components/Layout"

import { CiPill } from "react-icons/ci"
import { MdOutlineMedicalServices, MdOutlineSick } from "react-icons/md"
import { BiCommentDetail } from "react-icons/bi"
import { FaFileMedicalAlt } from "react-icons/fa"
import { BsFileEarmarkMedical } from "react-icons/bs"
import Header from "@/components/Header"

function Logo() {
  return (
    <div className="w-40">
      <Image
        src="/logo.png"
        width={198}
        height={49}
        alt=""
        layout="responsive"
      />
    </div>
  )
}

export default function Dashboard() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="mb-12" noFooter noBackButton>
        <Logo />
        <div className="mt-4" />
        <section className="pb-2">
          <Header>Create a new record</Header>
          <p className="text-sm text-zinc-500">
            There{"'"}s is a time limit of an hour to create/update this record.
          </p>
        </section>
        <FormInput placeholder="Input Symptoms" Icon={MdOutlineSick}>
          Symptoms
        </FormInput>
        <FormInput placeholder="Input Diagnosis" Icon={BsFileEarmarkMedical}>
          Diagnosis
        </FormInput>
        <FormInput placeholder="Input Comments" Icon={BiCommentDetail}>
          Comments
        </FormInput>

        <FormInput
          placeholder="Input Treatment"
          Icon={MdOutlineMedicalServices}
        >
          Treatment
        </FormInput>

        <FormInput placeholder="Input Medication" Icon={CiPill}>
          Medication
        </FormInput>
        <div className="mt-2" />
        <Button>SEND TRANSACTION</Button>
      </Layout>
    </Fragment>
  )
}

function FormInput({ children, placeholder, Icon }) {
  return (
    <Fragment>
      <div className="flex w-full items-center space-x-2">
        <Icon className="text-2xl" />
        <strong>{children}</strong>
      </div>
      <Input placeholder={placeholder} />
    </Fragment>
  )
}
