import { InputHTMLAttributes } from "react"
import { BiSearch } from "react-icons/bi"

function Input(
  allProps: InputHTMLAttributes<HTMLInputElement> & { isSearch?: boolean }
) {
  return (
    <label className="flex w-full focus-within:outline outline-1 outline-indigo-600 space-x-2 items-center bg-zinc-100 p-4 rounded-lg">
      {allProps.isSearch && <BiSearch className="text-zinc-500" />}
      <input {...allProps} className="bg-transparent flex-grow outline-none" />
    </label>
  )
}

export default Input
