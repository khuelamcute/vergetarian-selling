import axios from "axios"
import React, { useEffect } from "react"
import API from "../../../config/API"
import Leave from "../../../assets/img/leave.png"
import PageHeader from "../sections/PageHeader"
import Hero from "../sections/Hero"
import Step from "../sections/Step"
import OurProduct from "../sections/OurProduct"
import ProductContainer from "../sections/ProductContainer"
import WhyToChoose from "../sections/WhyToChoose"
import Ranking from "../sections/Ranking"
import BannerBuyNow from "../sections/BannerBuyNow"
import UserComplaint from "../sections/UserComplaint"
import Footer from "../sections/Footer"
import Label from "../../../assets/img/label.png"
export default function Home() {
  return (
    <div className="home-container">
      <PageHeader />
      <Hero />
      <Step />
      <OurProduct />
      <ProductContainer />
      <WhyToChoose />
      <Ranking />
      <BannerBuyNow />
      <UserComplaint />
      <img src={Label} className="w-[100%]" />
      <Footer />
    </div>
  )
}
