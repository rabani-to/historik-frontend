import Link from "next/link"

function Button({ children = "", isLink, href }) {
  const Container = isLink ? Link : "button"
  const className =
    "w-full text-white text-center font-bold p-4 rounded-full bg-indigo-600"
  return (
    <Container className={className} href={href}>
      {isLink ? (
        <a className="w-full text-white text-center font-bold p-4 rounded-full bg-indigo-600">
          {children}
        </a>
      ) : (
        children
      )}
    </Container>
  )
}

export default Button
