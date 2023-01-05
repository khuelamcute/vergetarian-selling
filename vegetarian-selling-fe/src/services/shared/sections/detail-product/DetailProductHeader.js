import React from "react"
import { Button, Select, Input } from "antd"
import { IoMdList } from "react-icons/io"
const { Search } = Input
export default function DetailProductHeader() {
  return (
    <div className="text-center mt-[77rem]">
      <p className="text-[#A1AB23]">Khám phá</p>
      <p className="text-[44rem] font-[700] font-[Lora] mt-[-10rem]">
        Sản phẩm của chúng tôi
      </p>
      {/* Pagination */}

      <div className="flex justify-between items-center mx-[125rem]">
        <div>
          <Button
            icon={<IoMdList className="mt-[10rem]" color={"#fff"} size={25} />}
            className="!w-[295rem] !bg-[#0A472E] !h-[75rem]"
          >
            <p className="mt-[-62rem] text-[30rem] !text-[#fff] pt-[20rem]">
              Mục lục
            </p>
            <Select
              defaultValue="all"
              style={{
                width: 120
              }}
              className="!mt-[-60px] !ml-[-60px]"
              // onChange={handleChange}
              options={[
                {
                  value: "all",
                  label: "Tất cả"
                },
                {
                  value: "vegetable",
                  label: "Rau củ"
                },
                {
                  value: "fruit",
                  label: "Trái cây"
                },
                {
                  value: "Yiminghe",
                  label: "Hải sản"
                },
                {
                  value: "meat",
                  label: "Thịt"
                }
              ]}
            />
          </Button>
        </div>
        <div>
          <Search
            placeholder=""
            onSearch={() => {}}
            className="!w-[639rem] !h-[66rem]"
          />
        </div>
      </div>
    </div>
  )
}
