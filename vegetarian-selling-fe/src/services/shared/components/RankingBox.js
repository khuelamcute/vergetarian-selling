import { Divider, Rate } from "antd"
import React from "react"

export default function RankingBox(props) {
  const title = "Bán chạy"

  const productElement = (props) => {
    return (
      <div className="">
        <div className="flex pl-[20rem] pr-[100rem]">
          <img
            src="https://media.loveitopcdn.com/22794/thit-bo-phi-le.jpg"
            className="w-[90rem] h-[90rem] mt-[12rem]"
            alt="Bò phi lê"
          ></img>
          <div>
            <p className="mb-[0] text-[16rem] font-[700] mt-[12rem]">
              Bò phi lê
            </p>
            <Rate
              disabled
              defaultValue={2}
              className="mt-[-20rem]"
              style={{ fontSize: 10 }}
            />
            <p className="text-[#A1AB23] text-[24rem] mt-[6rem] font-[700]">
              200.000vnđ
            </p>
          </div>
        </div>
        <div className="!mt-[0px] !mb-[0px] !ml-[40rem] !w-[calc(100%-40rem)] h-[1px] bg-[#c9c9c9] mt-[12rem]" />
        {props?.isLastElement && (
          <p className="text-[18rem] text-[#04211] cursor-pointer text-center mt-[10rem]">
            Xem tiếp {">>"}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="relative mr-[20rem]">
      <p className="font-[700] font-[Nunito] absolute top-[-20rem] left-[40rem] bg-[#fff] px-[10rem]">
        {props.title}
      </p>
      <div className="border-[1px] p-[12rem]">
        {[
          productElement({ isLastElement: false }),
          productElement({ isLastElement: false }),
          productElement({ isLastElement: true })
        ]}
      </div>
    </div>
  )
}
