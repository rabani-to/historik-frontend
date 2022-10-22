import { PropsWithChildren } from "react"
import Footer from "./Footer"

function Layout({
  children,
  noFooter,
  className,
}: PropsWithChildren<{ noFooter?: boolean; className?: string }>) {
  return (
    <main
      className={`max-w-sm w-full min-h-screen pt-4 mx-auto space-y-4 flex flex-col ${className}`}
    >
      {children}
      {noFooter || <Footer />}
    </main>
  )
}

export default Layout
