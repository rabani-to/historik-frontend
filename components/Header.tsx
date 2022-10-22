function Header({ children, className = "" }) {
  return (
    <div className="flex w-full pt-2">
      <h2 className={`font-bold text-lg ${className}`}>{children}</h2>
    </div>
  )
}

export default Header
