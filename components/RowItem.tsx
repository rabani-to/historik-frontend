import { useState } from "react"

function RowItem({ Icon, name, value }) {
  const [color] = useState(() => {
    const hue = Math.random() * 360
    return {
      background: `hsl(${hue}, 50%, 50%)`,
      icon: `hsl(${hue}, 50%, 80%)`,
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

export default RowItem
