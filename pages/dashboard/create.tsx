import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Layout from "@/components/Layout"

import { CiPill } from "react-icons/ci"
import { MdOutlineMedicalServices, MdOutlineSick } from "react-icons/md"
import { BiCommentDetail } from "react-icons/bi"
import { BsFileEarmarkMedical } from "react-icons/bs"
import Header from "@/components/Header"
import ProfileImage from "@/components/ProfileImage"

export default function Create() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        maxWidth="lg:max-w-4xl"
        className="items-center justify-center"
        noFooter
        noBackButton
      >
        <div className="flex w-full">
          <button className="flex space-x-2 pt-2 items-center">
            <ProfileImage src="/ramon.jpg" className="w-10 h-10" />
            <strong className="whitespace-nowrap">Agustin Gutierres</strong>
            <div className="w-2 h-2 rounded-full bg-green-600" />
          </button>
        </div>

        <div className="pb-20 w-full flex space-y-4 flex-grow flex-col justify-center items-center">
          <section className="pb-2 w-full">
            <Header>Create a new record</Header>
            <p className="text-sm text-zinc-500">
              There{"'"}s is a time limit of an hour to create/update this
              record.
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
        </div>
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
