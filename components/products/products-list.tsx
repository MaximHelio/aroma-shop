"use client"
import {usePathname} from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {Product} from "@/types/productsTypes"

const ProductsList = ({products}: {products: Product[]}) => {
  const pathname = usePathname()
  return (
    <div className="text-center">
      <ul>
        {products.map((product, index) => (
          <li key={index} className="inline-block mx-1 w-[47%] md:w-[48%] lg:w-[24%]">
            <div className="flex flex-col">
              <Link href={`${pathname}/detail/1`}>
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={0}
                  height={0}
                  priority
                  sizes="100vw"
                  className="w-full aspect-square object-cover block"
                />
              </Link>
              <h3 className="mt-3 mb-6">{product.alt}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList
