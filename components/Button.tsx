import Link from "next/link"
import { classnames } from "@/lib/helpers"

function Button({
  children = null,
  isSecondary = false,
  isLink = false,
  className = "",
  href = "",
}) {
  const Container = isLink ? Link : "button"
  const cx = classnames(
    className,
    "w-full text-center font-bold p-4 rounded-full",
    isSecondary ? "hover:bg-zinc-50" : "bg-indigo-600 text-white"
  )
  return (
    <Container className={cx} href={href}>
      {isLink ? <a className={cx}>{children}</a> : children}
    </Container>
  )
}

export default Button
