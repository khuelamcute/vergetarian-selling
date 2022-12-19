import { Button, Input } from "antd"
import React from "react"
import { IoMdList } from "react-icons/io"

const { Search } = Input
export default function OurProduct() {
  return (
    <div className="mt-[128rem] text-center font-nunito">
      <p className="font-[400] text-[24rem] mb-0">Khám phá</p>
      <p className="text-[62rem] font-[700] font-lora mb-[12rem]">
        Sản phẩm của chúng tôi
      </p>
      {/* <div>
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
      </div> */}
      <div className="flex justify-between items-center mx-[125rem]">
        <div>
          <Button
            icon={<IoMdList className="mt-[10rem]" color={"#fff"} size={25} />}
            className="!w-[295rem] !bg-[#0A472E] !h-[75rem]"
          >
            <p className="mt-[-62rem] text-[30rem] !text-[#fff] py-[20rem]">
              Mục lục
            </p>
          </Button>
        </div>
        <div>
          <Search
            placeholder=""
            onSearch={() => {}}
            className="!w-[639rem] !h-[66rem]"
          />
        </div>
        <div>
          <p className="text-[18rem] text-[#04211] cursor-pointer">
            Xem tiếp {">>"}
          </p>
        </div>
      </div>
    </div>
  )
}
