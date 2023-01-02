import React from "react"
import RankingBox from "../components/RankingBox"

export default function Ranking() {
  return (
    <div className="flex mt-[130rem] max-w-[1200rem] mx-auto">
      <RankingBox title={"Bán chạy"}></RankingBox>
      <RankingBox title={"Yêu thích"}></RankingBox>
      <RankingBox title={"Giảm giá"}></RankingBox>
    </div>
  )
}
