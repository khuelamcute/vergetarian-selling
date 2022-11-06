import axios from "axios"
import React, { useEffect } from "react"
import API from "../../../config/API"
import { useNavigate } from "react-router-dom"
import Logo from "../../../assets/img/logo.png"
import Hero2 from "../../../assets/img/hero-2.png"
import { BiBasket, BiHeart, BiSearch, BiUser } from "react-icons/bi"
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
      <div>
        <img className="h-[639rem] object-cover" src={Hero2} alt="logo"></img>
      </div>
    </div>
  )
}
