"use client"
import {useState} from "react"
import Image from "next/image"
import {Skeleton} from "@mui/material"
import Carousel from "react-material-ui-carousel"
import products from "@/mocks/products.json"
import {shuffle} from "lodash"
import MainTitle from "@/app/main-title"

const BottomCarousel = () => {
  const [isLoading, setIsLoading] = useState(true)
  const productsShuffle = shuffle(products)
  return (
    <div className="px-3">
      <MainTitle id="home" />
      <div>
        <div className="hidden lg:block w-full aspect-[32/9]">
          {isLoading && (
            <Skeleton
              variant="rounded"
              width={"unset"}
              height={"unset"}
              className="!w-full aspect-[32/9]"
            />
          )}
          <Carousel
            className={`${isLoading ? "hidden" : "block"}`}
            animation="slide"
            changeOnFirstRender={true}
            onChange={() => setIsLoading(false)}
          >
            {productsShuffle.map((product, index) => (
              <div key={index} className="flex justify-between">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-[24%] aspect-square object-cover"
                />
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-[24%] aspect-square object-cover"
                />
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-[24%] aspect-square object-cover"
                />
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-[24%] aspect-square object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="lg:hidden w-full aspect-[16/10]">
          {isLoading ? (
            <Skeleton
              variant="rounded"
              width={"unset"}
              height={"unset"}
              className="!w-full aspect-[16/10]"
            />
          ) : (
            <Carousel
              className={`${isLoading ? "hidden" : "block"}`}
              animation="slide"
            >
              {productsShuffle.map((product, index) => (
                <Image
                  key={index}
                  src={product.src}
                  alt={product.alt}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-full aspect-video object-cover"
                />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  )
}

export default BottomCarousel
