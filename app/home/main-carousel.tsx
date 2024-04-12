"use client"
import {useState} from "react"
import Image from "next/image"
import {Skeleton} from "@mui/material"
import Carousel from "react-material-ui-carousel"
import products from "@/mocks/products.json"

const MainCarousel = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="w-full aspect-video">
      {isLoading && (
        <Skeleton
          variant="rounded"
          width={"unset"}
          height={"unset"}
          className="!w-full max-w-screen-xl aspect-video"
        />
      )}
      <Carousel
        indicators={false}
        changeOnFirstRender={true}
        onChange={() => setIsLoading(false)}
      >
        {products.map((product, index) => (
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
    </div>
  )
}

export default MainCarousel
