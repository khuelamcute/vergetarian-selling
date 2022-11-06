import React from "react"
import Logo from "./../../../assets/img/logo.png"
import HeroImage from "./../../../assets/img/hero-image.png"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
  const navigate = useNavigate()
  return (
    <div className="w-[100%] h-[2182rem] relative">
      <div className="content-container z-20 absolute w-[100%]">
        <div className="welcome-bar w-[100%] bg-[#BFE063] h-[52rem] ">
          <p className="text-[24rem] font-[600] leading-[52rem] ml-[78rem]">
            Organic xin chào!
          </p>
          <div>
            <div className="title-container ml-[46rem] z-40">
              <img
                className="w-[400rem] mt-[212rem] ml-[148rem]"
                src={Logo}
                alt="logo"
              ></img>
              <p className="font-[800] text-[55rem] leading-[70rem] text-[#777] mt-[68rem]">
                Chào mừng đến với Organic!
              </p>
            </div>

            <div className="input-container ml-[160rem]">
              <input
                className="border-[1rem] py-[24rem] px-[18rem] w-[625rem] text-[34rem] block bg-[#EFEFEF]"
                type="text"
                placeholder="Email hoặc số điện thoại"
              />
              <input
                className="border-[1rem] py-[24rem] px-[18rem] w-[625rem] text-[34rem] mt-[22rem] bg-[#EFEFEF]"
                type="text"
                placeholder="Mật khẩu"
              />
              <div className="checkbox-container w-[100%] mt-[43rem] flex">
                <input
                  type="checkbox"
                  id="acceptant"
                  name="acceptant"
                  value="Boat"
                  className="w-[40rem] h-[40rem] mr-[28rem]"
                ></input>
                <label
                  for="acceptant"
                  className="text-[34rem] w-[555rem] mt-[-10rem] text-[#777]"
                >
                  Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật
                </label>
              </div>
              <button
                className="bg-[#222522] text-[#fff] text-[34rem] py-[19rem] px-auto w-[434rem] font-[600] mt-[35rem] ml-[80rem]"
                onClick={() => navigate("/")}
              >
                Đăng ký
              </button>
            </div>

            <p className="message-container flex ml-[216rem] mt-[40rem]">
              <p className="text-[#777] text-[34rem] mr-[12rem]">
                Bạn đã có tài khoản?
              </p>
              <p
                className="text-[#fff] text-[34rem] cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Đăng nhập
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="background-container z-10 absolute w-[100%]">
        <div className="bg-[#fff] w-[100%] h-[815rem] z-10"></div>
        <div className="bg-[#BFE063] w-[100%] h-[calc(2182rem-815rem)] z-10"></div>
        <img
          className="w-[1105rem] absolute top-[246rem] right-[120rem]"
          src={HeroImage}
          alt="logo"
        ></img>
      </div>
    </div>
  )
}
