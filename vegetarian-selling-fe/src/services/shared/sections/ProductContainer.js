import { Row, Col } from "antd"
import React from "react"
import ProductItem from "../components/ProductItem"

export default function ProductContainer() {
  return (
    <Row gutter={[16, 16]} className="!mx-[150rem] mt-[90rem]">
      {Array.from(Array(20).keys()).map((val) => {
        return (
          <Col span={6}>
            <ProductItem />
          </Col>
        )
      })}
    </Row>
  )
}
