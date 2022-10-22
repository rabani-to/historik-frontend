import { Fragment } from "react"
import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Link from "next/link"
import Button from "@/components/Button"
import { BsPersonFill } from "react-icons/bs"

export default function Profile() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <Header>My Profile</Header>
          <p>
            Your individual parameters are based on the visits with your
            doctors.
          </p>
        </section>

        <strong className="border-b py-2">Emergency Contacts</strong>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2 py-2 items-center">
            <BsPersonFill className="text-xl" />
            <span className="text-zinc-700">+34 609320123</span>
          </div>
          <div className="flex space-x-2 py-2 items-center">
            <BsPersonFill className="text-xl" />
            <span className="text-zinc-700">+34 609320123</span>
          </div>
        </div>

        <strong className="border-b py-2">Anonymous Data Sharing</strong>
        <p className="text-zinc-500 text-sm">
          Your individual parameters are based on the visits with your doctors.
        </p>

        <strong className="border-b py-2">
          Share differently with Historik
        </strong>
        <p className="text-zinc-500 text-sm">
          Should you want to share your data with your a hospital, you can do so
          anoynousmly through Historik{"'"}s export button.
        </p>
        <p className="text-zinc-500 text-sm">
          Anoymous sharing will share your undentifiable attributes to the
          hospital of your choice. Read more at{" "}
          <Link href="/">
            <a className="hover:underline font-bold">
              historik.com/sharing-my-data
            </a>
          </Link>
        </p>
        <Button>Export my data</Button>
      </Layout>
    </Fragment>
  )
}
