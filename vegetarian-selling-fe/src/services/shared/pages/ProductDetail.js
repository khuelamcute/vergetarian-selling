import React from "react"
import ProductShowing from "../components/ProductShowing"
import DetailProductHeader from "../sections/detail-product/DetailProductHeader"
import Hero from "../sections/Hero"
import PageHeader from "../sections/PageHeader"

export default function ProductDetail() {
  return (
    <div className="home-container overflow-x-hidden">
      <PageHeader />
      <Hero />
      <DetailProductHeader />
      <ProductShowing />
      <div className="pb-[600px]"></div>
    </div>
  )
}
