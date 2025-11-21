import Link from "next/link"

const ScrollUp = () => {
  return (
  <Link href="#hero"
        className="flex cursor-pointer hover:bg-white/15 hover:scale-105 ease-in-out duration-200 place-items-start justify-center gap-5 p-2 px-8 rounded-4xl text-xs bg-white/8">
    SCROLL TO TOP
  </Link>
  )
}

export default ScrollUp