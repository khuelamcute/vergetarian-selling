import React from "react"
import Hero from "../sections/Hero"
import LovedHeader from "../sections/loved-section/LovedHeader"
import PageHeader from "../sections/PageHeader"
import ProductContainer from "../sections/ProductContainer"
import Label from "../../../assets/img/label.png"
import Footer from "../sections/Footer"

export default function LovedProduct() {
  return (
    <div className="home-container">
      <PageHeader />
      <Hero />
      <LovedHeader />
      <ProductContainer />
      <img src={Label} className="w-[100%]" />
      <Footer />
    </div>
  )
}
