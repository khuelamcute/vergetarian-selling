import { Row, Col, Rate, Button } from "antd"
import React from "react"
import Avocado from "../../../assets/img/avocado.jpg"
export default function ProductShowing() {
  return (
    <div className="px-[200rem] mt-[80rem]">
      <Row gutter={[16, 16]}>
        <Col span={10} className="border-[1px]">
          <img src={Avocado} alt="" />
        </Col>
        <Col span={14} className="border-[1px]">
          <p>
            Bơ Booth <span>-30%</span>
          </p>
          <p>
            Bơ booth cho thịt quả dẻo thơm, có giá trị dinh dưỡng cao nên được
            rất nhiều người yêu thích và lựa chọn trong số các giống bơ khác
            hiện nay.
          </p>
          <p>
            <span>45.000đ</span>
            <span>(55.000đ)</span>
            <Rate defaultValue={4}></Rate>
            <span>(45)</span>
          </p>
          <p>Khối lượng</p>
          <div className="flex">
            {Array.from(Array(4).keys()).map((val) => {
              return (
                <div className="mr-[16rem]">
                  <Button> 1 kg</Button>
                </div>
              )
            })}
          </div>
        </Col>
      </Row>
    </div>
  )
}
