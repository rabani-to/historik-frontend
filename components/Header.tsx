function Header({ children }) {
  return (
    <div className="flex w-full pt-2">
      <h2 className="font-bold text-lg">{children}</h2>
    </div>
  )
}

export default Header
