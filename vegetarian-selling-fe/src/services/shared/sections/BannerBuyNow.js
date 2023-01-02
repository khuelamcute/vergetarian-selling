import { Button } from "antd"
import React from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
export default function BannerBuyNow() {
  return (
    <div className="flex justify-around mt-[60rem]">
      <div className="border-[1px] h-[480rem] bg-[#fddd19] w-[45%]">
        <div className="ml-[40%]">
          <p className="mt-[66rem] text-[16rem] text-[#ED8D8F] font-[700]">
            Khuyến mãi đến 50%{" "}
          </p>
          <p className="text-[#fff] text-[42rem] font-[700] font-[Lora]">
            Thực phẩm sạch tươi mới với Organic
          </p>
          <Button>
            <div className="flex">
              <p>Mua ngay</p>
              <AiOutlineArrowRight className="ml-[12rem] mt-[8rem]" />
            </div>
          </Button>
        </div>
      </div>
      <div className="border-[1px] h-[480rem] bg-[#f59597] w-[45%]">
        <div className="ml-[40%]">
          <p className="mt-[66rem] text-[16rem] text-[#FFDF3E] font-[700]">
            Giá hot cho hải sản
          </p>
          <p className="text-[#fff] text-[42rem] font-[700] font-[Lora]">
            Giảm <span className="text-[#FE2525]">30.000 vnđ</span> cho tất cả
            các sản phẩm
          </p>
          <Button>
            <div className="flex">
              <p>Mua ngay</p>
              <AiOutlineArrowRight className="ml-[12rem] mt-[8rem]" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
