import React from "react"
import Logo from "./../../../assets/img/logo.png"
export default function Login() {
  return (
    <div className="">
      <div className="welcome-bar w-[100%] bg-[#BFE063] h-[52px] ">
        <p className="text-[24px] font-[600] leading-[52px] ml-[78px]">
          Organic xin chào!
        </p>
        <div>
          <img src={Logo} alt="logo"></img>
          <p>Chào mừng đến với Organic!</p>
          <input
            className="border-[1px]"
            type="text"
            placeholder="Email hoặc số điện thoại"
          />
          <input type="text" />
        </div>
      </div>
    </div>
  )
}
