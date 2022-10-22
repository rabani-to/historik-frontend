/* eslint-disable @next/next/no-img-element */

function ProfileImage({ src = "", className = "" }) {
  return (
    <div
      className={`${className} overflow-hidden rounded-full ${
        src && "bg-black"
      }`}
    >
      <img className="object-cover" alt="" src={src} />
    </div>
  )
}

export default ProfileImage
