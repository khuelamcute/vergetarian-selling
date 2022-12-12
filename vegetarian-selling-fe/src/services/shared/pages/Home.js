import axios from "axios"
import React, { useEffect } from "react"
import API from "../../../config/API"
import Leave from "../../../assets/img/leave.png"
import PageHeader from "../sections/PageHeader"
import Hero from "../sections/Hero"
import Step from "../sections/Step"
import OurProduct from "../sections/OurProduct"
import ProductContainer from "../sections/ProductContainer"

export default function Home() {
  return (
    <div className="home-container">
      <PageHeader />
      <Hero />
      <Step />
      <OurProduct />
      <ProductContainer />
      <div className="pb-[120rem]"></div>
    </div>
  )
}
