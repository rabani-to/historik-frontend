import { type PropsWithChildren } from "react"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import Footer from "./Footer"

function Layout({
  children,
  noFooter,
  noBackButton,
  className,
}: PropsWithChildren<{
  noFooter?: boolean
  className?: string
  noBackButton?: boolean
}>) {
  return (
    <main
      className={`px-4 xl:px-0 xl:max-w-sm w-full min-h-screen pt-4 mx-auto space-y-4 flex flex-col ${className}`}
    >
      {noBackButton || (
        <Link href="/">
          <a className="flex group items-center space-x-2">
            <BsArrowLeft className="group-hover:-translate-x-px" />
            <span>Back</span>
          </a>
        </Link>
      )}
      {children}
      {noFooter || <Footer />}
    </main>
  )
}

export default Layout
