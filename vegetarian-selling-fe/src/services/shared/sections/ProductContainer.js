import React from "react"
import ProductItem from "../components/ProductItem"

export default function ProductContainer() {
  return (
    <div className="flex flex-wrap">
      <ProductItem />
      <ProductItem />
    </div>
  )
}
