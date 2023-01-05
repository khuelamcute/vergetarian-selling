import React from "react"

export default function LovedHeader() {
  return (
    <div className="text-center mt-[77rem]">
      <p className="text-[#A1AB23]">Khám phá</p>
      <p className="text-[44rem] font-[700] font-[Lora] mt-[-10rem]">
        Sản phẩm yêu thích
      </p>
      {/* Pagination */}
      <div className="flex justify-end">
        <p className="mr-[26rem] bg-[#0A472E] px-[16rem] py-[4px] text-[#fff] rounded-[24rem] cursor-pointer">
          1
        </p>
        <p className="mr-[26rem] px-[16rem] py-[4px]  cursor-pointer">2</p>
        <p className="mr-[26rem] px-[16rem] py-[4px]  cursor-pointer">3</p>
        <p className="mr-[26rem] px-[16rem] py-[4px]  cursor-pointer">...</p>
        <p className="mr-[26rem] px-[16rem] py-[4px] cursor-pointer">19</p>
        <p className="mr-[26rem] px-[16rem] py-[4px] cursor-pointer">20</p>
      </div>
    </div>
  )
}
