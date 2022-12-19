import { Rate } from "antd"
import React from "react"

export default function RankingBox() {
  const title = "Bán chạy"
  return (
    <div>
      <p>{title}</p>
      <div className="flex">
        <img
          src="https://media.loveitopcdn.com/22794/thit-bo-phi-le.jpg"
          className="w-[90rem] h-[90rem]"
        ></img>
        <div>
          <p className="mb-[0]">Bò phi lê</p>
          <Rate
            disabled
            defaultValue={2}
            className="mt-[-20rem]"
            style={{ fontSize: 10 }}
          />
          <p className="text-[#A1AB23] text-[26rem]">200.000vnđ</p>
        </div>
      </div>
    </div>
  )
}
