"use client"
import Image from "next/image"
import {Button} from "@mui/material"

const MainLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="bg-white max-w-screen-xl mx-auto">
      <header className="fixed top-0 z-10 bg-white w-full max-w-screen-xl">
        <nav className="flex items-center justify-between p-2">
          <div className="mr-4">
            <a href="/home">
              <Image
                src="https://cdn.imweb.me/thumbnail/20230718/66c58de79d74b.png"
                alt="Logo"
                width={114}
                height={94}
              />
            </a>
          </div>
          <div className="flex-1"></div>
          <div className="hidden lg:flex gap-x-4">
            <a href="#" className="no-underline text-yellow-700 hover:text-yellow-600">반클리프</a>
            <a href="#" className="no-underline text-black hover:text-yellow-600">까르</a>
            <a href="#" className="no-underline text-black hover:text-yellow-600">티파니</a>
            <a href="#" className="no-underline text-black hover:text-yellow-600">주문제작문의</a>
            <a href="#" className="no-underline text-black hover:text-yellow-600">출고제품</a>
            <a href="#" className="no-underline text-black hover:text-yellow-600">공지사항</a>
            <a href="#" className="no-underline text-black hover:text-yellow-600">고객후기</a>
          </div>
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
        </nav>
      </header>
      <main className="pt-[61px] lg:pt-[110px]">{children}</main>
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
          <li className="my-2">제품문의 방법</li>
          <li className="my-2">1. 위 카카오톡 링크를 누르세요.</li>
          <li className="my-2">2. PC버전 카카오톡 친구추가 방법</li>
        </ul>
        <small className="mt-4 text-gray-400">Copyright ⓒ 2024 Aroma All rights reserved. Tel 010-</small>
      </footer>
    </div>
  )
}

export default MainLayout
