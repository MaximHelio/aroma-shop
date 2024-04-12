"use client"
import {useState} from "react"
import Image from "next/image"
import {Skeleton} from "@mui/material"
import Carousel from "react-material-ui-carousel"
import products from "@/mocks/products.json"
import {shuffle} from "lodash"

const BottomCarousel = () => {
  const [isLoading, setIsLoading] = useState(true)
  const productsShuffle = shuffle(products)
  return (
    <div className="px-3">
      <div className="my-12 lg:my-24 flex flex-col items-center justify-between">
        <h2 className="uppercase text-2xl lg:text-5xl font-bold">Best Item</h2>
        <div className="w-14 lg:w-24 h-4 lg:h-8 border-b-4 border-yellow-600"></div>
      </div>
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
