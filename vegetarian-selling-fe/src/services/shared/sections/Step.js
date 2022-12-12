import React from "react"
import Number1 from "../../../assets/img/number1.svg"
import Number2 from "../../../assets/img/number2.svg"
import Number3 from "../../../assets/img/number3.svg"
import BackGroundNumber from "../../../assets/img/background_number.svg"
import BackGroundNumberGreen from "../../../assets/img/background_number_green.svg"
export default function Step() {
  return (
    <div className="flex">
      <div className="w-[100%] flex justify-between mx-[180rem]">
        <div className="ml-[40rem] mt-[154rem] relative ">
          <div className="absolute w-[198rem]">
            <img src={BackGroundNumber} />
          </div>
          <div className="absolute w-[140rem] left-[25rem] h-[160rem] top-[-10rem]">
            <img src={Number1} />
          </div>
          <p className="mt-[240rem] font-[700] text-[40rem] heading-[28rem] ml-[-20rem]">
            Chọn bắt đầu
          </p>
          <p className="w-[360rem] text-center ml-[-70rem] mt-[-20rem]">
            Choose from select produce to start. Keep, add, or remove items
          </p>
        </div>
        <div className="ml-[40rem] mt-[154rem] relative ">
          <div className="absolute w-[198rem]">
            <img src={BackGroundNumberGreen} />
          </div>
          <div className="absolute w-[140rem] left-[25rem] h-[160rem] top-[-10rem]">
            <img src={Number2} />
          </div>
          <p className="mt-[240rem] font-[700] text-[40rem] heading-[28rem] ml-[-20rem]">
            Đi chợ online
          </p>
          <p className="w-[360rem] text-center ml-[-70rem] mt-[-20rem]">
            Add in your grocery staples, snacks, and other favorite pantry items
            every week.
          </p>
        </div>
        <div className="ml-[40rem] mt-[154rem] relative">
          <div className="absolute w-[198rem]">
            <img src={BackGroundNumber} />
          </div>
          <div className="absolute w-[140rem] left-[25rem] h-[160rem] top-[-10rem]">
            <img src={Number3} />
          </div>
          <p className="mt-[240rem] font-[700] text-[40rem] heading-[28rem] ml-[-120rem]">
            We deliver. You enjoy.
          </p>
          <p className="w-[360rem] text-center ml-[-93rem] mt-[-20rem]">
            Save yourself a trip to the store and enjoy tasty meals – how
            delicious is that?
          </p>
        </div>
      </div>
    </div>
  )
}
