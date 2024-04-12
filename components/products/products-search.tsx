"use client"
import {Pagination} from "@mui/material"

const ProductsPaging = () => {
  return (
    <div className="mt-8 flex justify-center">
      <Pagination count={10} variant="outlined" color="primary" />
    </div>
  )
}

export default ProductsPaging
