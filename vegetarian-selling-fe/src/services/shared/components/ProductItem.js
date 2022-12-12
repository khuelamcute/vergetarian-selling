import { Rate } from "antd"
import React from "react"

export default function ProductItem() {
  return (
    <div className="text-center w-[300rem] border-[1px]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/1024px-Lemon.jpg"
        alt=""
        className="w-[100%] h-[235rem]"
      />
      <Rate disabled defaultValue={2} className="mt-[20rem]" />
      <p className="mt-[10rem] text-[24rem]">Boysenberry</p>
      <p className="font-[700] text-[#A1AB23] text-[32rem]">$ 23.4</p>
      <div className="bg-[#C9C9C9] h-[1rem] w-[100rem] ml-[96rem] mt-[-20rem]"></div>
      <p className="font-[700] mt-[10rem] hover:cursor-pointer">
        ADD TO CART {">>"}
      </p>
    </div>
  )
}
