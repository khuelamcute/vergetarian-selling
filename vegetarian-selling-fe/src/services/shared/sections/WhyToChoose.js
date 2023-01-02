import { Typography } from "antd"
import React from "react"
import SpecialThings from "../../../assets/img/SpecialThings.png"
export default function WhyToChoose() {
  return (
    <div className="text-center">
      <p className="text-[#A1AB23] text-[20rem] mt-[90rem]">Tại sao chọn</p>
      <Typography.Title level={2}>
        Những điều đặc biệt của chúng tôi
      </Typography.Title>
      <img src={SpecialThings} className="w-[100%]"></img>
    </div>
  )
}
