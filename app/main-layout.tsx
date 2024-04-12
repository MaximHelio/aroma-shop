"use client"
import {useState} from "react"
import {usePathname} from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {Button, Drawer} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import MainTitle from "@/app/main-title"

export const menu = [
  {id: "vancleef", name: "반클리프"},
  {id: "cartier", name: "까르띠에"},
  {id: "tiffany", name: "티파니"},
  {id: "custom", name: "주문제작문의"},
  {id: "shipped", name: "출고제품"},
  {id: "notice", name: "공지사항"},
  {id: "review", name: "고객후기"}
]

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  return (
    <div className="bg-white max-w-screen-xl mx-auto">
      <header className="fixed top-0 z-10 bg-white w-full max-w-screen-xl">
        <nav className="flex items-center justify-between p-2">
          <div className="mr-4">
            <Link href="/home">
              <Image
                src="https://cdn.imweb.me/thumbnail/20230718/66c58de79d74b.png"
                alt="Logo"
                width={0}
                height={0}
                priority
                sizes="100vw"
                className="w-[54px] lg:w-[114px] h-auto"
              />
            </Link>
          </div>
          <div className="flex-1"></div>
          <MainLayoutMenu prefix="lg" />
          <div className="ml-4 flex items-center">
            <span className="mr-4 text-base cursor-pointer">로그인</span>
            <Button
              className="!bg-yellow-600 hover:!bg-amber-200"
              variant="contained"
              onClick={() => alert("010-5517-2108")}
            >
              <span className="font-['NanumGothic']">문의하기</span>
            </Button>
          </div>
          <MainLayoutMenuIcon />
        </nav>
      </header>
      <div className="pt-[61px] lg:pt-[110px]"></div>
      {pathname !== "/home" && (
        <MainTitle id={pathname.substring(1)} />
      )}
      <main className={`${pathname !== "/home" ? "pt-6" : ""}`}>{children}</main>
      <footer className="mt-12 lg:mt-20 flex bg-[#383838] flex flex-col items-center justify-between py-4 lg:py-8">
        <Image
          src="/images/kakao.png"
          alt="Kakao"
          width={50}
          height={50}
          sizes="100vw"
          className="my-2"
        />
        <ul className="flex flex-col items-center justify-between text-white text-xs lg:text-sm">
          <li className="my-2">제품문의 방법!!</li>
          <li className="my-2">1. 위 카카오톡 링크를 누르세요.</li>
          <li className="my-2">2. PC버전 카카오톡 친구추가 방법</li>
        </ul>
        <small className="mt-4 text-gray-400">Copyright ⓒ 2023 티아라 All rights reserved. Tel 010-5517-2108</small>
      </footer>
    </div>
  )
}

const MainLayoutMenuIcon = () => {
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false)
  return (
    <div className="lg:hidden ml-4">
      <MenuIcon
        className="cursor-pointer"
        onClick={() => setHeaderMenuOpen(true)}
      />
      <Drawer
        anchor="right"
        open={headerMenuOpen}
        onClose={() => setHeaderMenuOpen(false)}
      >
        <MainLayoutMenu prefix="md" setHeaderMenuOpen={setHeaderMenuOpen} />
      </Drawer>
    </div>
  )
}

const MainLayoutMenu = ({
  prefix,
  setHeaderMenuOpen
}: {
  prefix: "lg" | "md",
  setHeaderMenuOpen?: Function
}) => {
  const pathname = usePathname()
  return (
    <ul className={`${prefix === "lg" ? "hidden lg:flex lg:gap-x-4": "w-[300px]"}`}>
      {menu.map((m, index) => (
        <li key={index} className="px-4 py-2 border-b border-50 lg:px-0 lg:py-0 lg:border-none">
          <Link
            href={`/${m.id}`}
            className={`${pathname.includes(m.id) ? "text-yellow-700 " : ""}block no-underline hover:text-yellow-600 text-sm lg:text-base`}
            onClick={() => {
              setTimeout(() => setHeaderMenuOpen?.(), 500)
            }}
          >{m.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MainLayout
