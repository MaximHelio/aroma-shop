"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {menu} from "./main-layout"

const MainTitle = ({id}: {id: string}) => {
  const pathname = usePathname()
  return (
    <div>
      <div className="my-12 lg:my-24 flex flex-col items-center justify-between">
        <h2 className="uppercase text-2xl lg:text-5xl font-bold">{
          menu.find((m) => id.includes(m.id))?.name || "Best Item"
        }</h2>
        <div className="w-14 lg:w-24 h-4 lg:h-8 border-b-4 border-yellow-600"></div>
      </div>
      <nav className={`text-center${pathname === "/home" ? " hidden" : ""}`}>
        <ul className="lg:hidden w-auto mx-auto">
          {menu.map((m, index) => (
            <li key={index} className={`inline-block mx-4 my-1${pathname.includes(
              m.id
            ) ? " text-yellow-700 border-b border-yellow-600" : ""}`}>
              <Link
                href={`/${m.id}`}
                className="no-underline hover:text-yellow-600 text-sm"
              >{m.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MainTitle
