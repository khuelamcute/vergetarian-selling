import React from "react"
import { FiHeadphones } from "react-icons/fi"
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"
import { Input } from "antd"
import Logo from "../../../assets/img/logo.png"
export default function Footer() {
  return (
    <div className="bg-[#0A472E] w-[100%]">
      <div className="pt-[80rem] flex justify-between">
        <div className="flex ml-[139rem]">
          <FiHeadphones color="#A1AB23" size={36} />
          <div className="ml-[14rem]">
            <p className="text-[16rem] text-[#fff]">Liên hệ 24/7</p>
            <p className="text-[#A1AB23] mt-[-10px]">(028)-38-46-99-51</p>
          </div>
        </div>
        <div>
          <p className="text-[#fff] text-[16rem]">Theo dõi chúng tôi</p>
          <div className="flex gap-x-[10rem]">
            <FaTwitter color="#A1AB23" />
            <FaYoutube color="#A1AB23" />
            <FaFacebook color="#A1AB23" />
            <FaInstagram color="#A1AB23" />
          </div>
        </div>
        <div className="flex gap-x-[20rem] mr-[139rem]">
          <img
            src="https://taichinh.online/wp-content/uploads/2017/02/the-mastercard.png"
            alt=""
            className="w-[80rem] h-[30rem] object-cover"
          />
          <img
            src="https://canhme.com/wp-content/uploads/2016/01/Paypal.png"
            alt=""
            className="w-[80rem] h-[30rem] object-cover"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/800px-American_Express_logo_%282018%29.svg.png"
            alt=""
            className="w-[80rem] h-[30rem] object-cover"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/774/878/original/bitcoin-logo-button-free-vector.jpg"
            alt=""
            className="w-[80rem] h-[30rem] object-cover"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Union_logo.svg/2560px-Western_Union_logo.svg.png"
            alt=""
            className="w-[80rem] h-[30rem] object-cover"
          />
          <img
            src="https://www.bullsportsdirect.com/wp-content/uploads/2019/05/Visa-Logo-design-Vector-Download-300x190.png"
            alt=""
            className="w-[80rem] h-[30rem] object-cover"
          />
        </div>
      </div>
      <div className="flex mt-[118rem] pb-[118rem] px-[139rem] justify-between">
        <div className="">
          <div className="text-[14rem] text-[white]">
            <p className="text-[16rem]">THÔNG TIN CHUNG</p>
            <p className="text-[#ADADAD]">Về chúng tôi</p>
            <p className="text-[#ADADAD]">Blog</p>
            <p className="text-[#ADADAD]">Thanh toán</p>
            <p className="text-[#ADADAD]">Liên hệ</p>
            <p className="text-[#ADADAD]">Dịch vụ</p>
          </div>
        </div>
        <div className="">
          <div className="text-[14rem] text-[white]">
            <p className="text-[16rem]">TÀI KHOẢN CỦA TÔI</p>
            <p className="text-[#ADADAD]">Tài khoản của tôi</p>
            <p className="text-[#ADADAD]">Đánh giá của tôi</p>
            <p className="text-[#ADADAD]">Yêu thích</p>
            <p className="text-[#ADADAD]">Giỏ hàng</p>
          </div>
        </div>
        <div className="">
          <div className="text-[14rem] text-[white]">
            <p className="text-[16rem]">MỤC LỤC</p>
            <p className="text-[#ADADAD]">Trái cây & Rau củ</p>
            <p className="text-[#ADADAD]">Thực phẩm hằng ngày</p>
            <p className="text-[#ADADAD]">Gạo và nếp</p>
            <p className="text-[#ADADAD]">Thịt</p>
            <p className="text-[#ADADAD]">Hải sản</p>
          </div>
        </div>
        <div className="text-[#fff] text-[14rem]">
          <p className="text-[16rem]">SUBSCRIBE US</p>
          <p>Đăng ký và nhận ngay một voucher lên đến 100.000vnđ</p>
          <Input
            placeholder="Email hoặc số điện thoại"
            className="!text-[14rem] !rounded-[20rem]"
          ></Input>
        </div>
        <div>
          <img src={Logo} alt="" className="w-[400rem]" />
        </div>
      </div>
    </div>
  )
}
