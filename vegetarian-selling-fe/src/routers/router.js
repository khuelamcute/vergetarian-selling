import React from "react"
import LovedProduct from "../services/shared/pages/LovedProduct.js"

const Login = React.lazy(() => import("../services/authen/pages/Login.js"))
const SignUp = React.lazy(() => import("../services/authen/pages/SignUp.js"))
const Home = React.lazy(() => import("../services//shared/pages/Home.js"))
const ProductDetail = React.lazy(() =>
  import("../services//shared/pages/ProductDetail.js")
)
// Những route chỉ truy xuất khi chưa đăng nhập
const publicRoute = [
  { path: "/login", name: "Login", element: <Login /> },
  { path: "/sign-up", name: "SignUp", element: <SignUp /> },
  { path: "/", name: "Home", element: <Home /> },
  { path: "/loved-product", name: "LovedProduct", element: <LovedProduct /> },
  { path: "/product-detail", name: "ProductDetail", element: <ProductDetail /> }
]

// Những route dùng khi đã đăng nhập
const protectedRoute = [{ path: "/", name: "Home", element: <Home /> }]

// route dùng cho mọi trường hợp
const commonRoute = []

// Route dùng cho manager
const managerRoute = []

const routes = {
  publicRoute,
  commonRoute,
  protectedRoute,
  managerRoute
}

export default routes
