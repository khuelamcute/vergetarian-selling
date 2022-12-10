import axios from "axios"
import React, { useEffect } from "react"
import API from "../../../config/API"
import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/img/logo.png"
import Hero2 from "../../../assets/img/hero-2.png"
import { BiBasket, BiHeart, BiSearch, BiUser } from "react-icons/bi"
import Leave from "../../../assets/img/leave.png"
import Number1 from "../../../assets/img/number1.svg"
import Number2 from "../../../assets/img/number2.svg"
import Number3 from "../../../assets/img/number3.svg"
import BackGroundNumber from "../../../assets/img/background_number.svg"
import BackGroundNumberGreen from "../../../assets/img/background_number_green.svg"

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home-container">
      <div className="bg-[#BFE063] h-[52rem] w-[100%] flex justify-between">
        <div className="flex justify-between ml-[78rem] font-[600] leading-[52rem]">
          Organic xin chào
        </div>
        <div className="font-[600] text-[24rem] leading-[52rem] flex">
          <div
            className="mr-[10rem] cursor-pointer hover:opacity-80"
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </div>
          <div className="border-r-[1px] border-[#000] h-[30rem] mt-[10rem] mr-[10rem]"></div>
          <div
            className="mr-[10rem] cursor-pointer hover:opacity-80"
            onClick={() => navigate("/sign-up")}
          >
            Đăng ký
          </div>
          <div className="border-r-[1px] border-[#000] h-[30rem] mt-[10rem] mr-[10rem] "></div>
          <div className="mr-[78rem] cursor-pointer hover:opacity-80">
            Liên hệ
          </div>
        </div>
      </div>
      <div className="h-[124rem] border-[1px] flex w-[100%] justify-between">
        <div className="ml-[312rem]"></div>
        <img className="h-[100%] py-[20rem]" src={Logo} alt="logo"></img>
        <div className="icon-container flex mt-[62rem] ">
          <BiSearch size={22} color={"#131A29"} className="mr-[50rem]" />
          <BiUser size={22} color={"#131A29"} className="mr-[50rem]" />
          <BiHeart size={22} color={"#131A29"} className="mr-[50rem]" />
          <BiBasket size={22} color={"#131A29"} className="mr-[114rem]" />
        </div>
      </div>
      <div className="border-[1px]">
        <img
          className="h-[639rem] w-[100%] object-cover py-auto"
          src={Hero2}
          alt="logo"
        ></img>
      </div>
      <div className="flex">
        <img
          src={Leave}
          alt=" "
          className="h-[412rem] w-[278rem] ml-[13rem] mt-[40rem]"
        />
        <div className="w-[100%] flex justify-between mr-[180rem]">
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
              Add in your grocery staples, snacks, and other favorite pantry
              items every week.
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
      <div>
        <p>Khám phá</p>
        <p>Sản phẩm của chúng tôi</p>
        <div>
          <button>Tất cả</button>
          <button>Rau củ</button>
          <button>Trái cây</button>
          <button>Hải sản</button>
        </div>
      </div>
    </div>
  )
}
