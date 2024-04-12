import products from "@/mocks/products.json"
import ProductsList from "@/components/products/products-list"
import ProductsSearch from "@/components/products/products-search"
import {shuffle} from "lodash"
import ProductsPaging from "@/components/products/products-paging"

const Vancleef = () => {
  const productsShuffle = shuffle(products)
  return (
    <div>
      <ProductsList products={productsShuffle} />
      <ProductsSearch />
      <ProductsPaging />
    </div>
  )
}

export default Vancleef
