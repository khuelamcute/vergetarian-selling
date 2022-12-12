import React from "react"

export default function OurProduct() {
  return (
    <div className="mt-[128rem] text-center font-nunito">
      <p className="font-[400] text-[24rem] mb-0">Khám phá</p>
      <p className="text-[62rem] font-[700] font-lora mb-[12rem]">
        Sản phẩm của chúng tôi
      </p>
      <div>
        <button className="border-[1rem] px-[24rem] py-[8rem] mr-[32rem] bg-[#0A472E] text-[#fff] rounded-[80rem]">
          Tất cả
        </button>
        <button className="px-[24rem] py-[8rem] mr-[32rem] text-[#042117]">
          Rau củ
        </button>
        <button className="px-[24rem] py-[8rem] mr-[32rem] text-[#042117]">
          Trái cây
        </button>
        <button className="px-[24rem] py-[8rem] mr-[32rem] text-[#042117]">
          Hải sản
        </button>
      </div>
    </div>
  )
}
