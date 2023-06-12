import { useEffect, useState } from "react";
// import { login } from "../../../utils/resApiAccount";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import videoBG from '../../../assets/video/bg-auth.mp4'
import { useNavigate } from "react-router-dom";
import './style.auth.scss'
import ROUTE from '../../../utils/routes.json'
import logo from '../../../assets/img/logo/1.png'
import { login } from "../../../utils/resApiAccount";
const routes = ROUTE[0];
const LoginPage = () => {
  const user = useSelector((state: any) => state.persisted.auth.login.userCurrent);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast({ position: 'top', duration: 3000, isClosable: true })
  useEffect(() => {
    if (user) navigate('/')
  }, [])
  const submitLogin = (e: Event) => {
    const data = {
      username: username,
      password: password,
      dispatch: dispatch,
      toast: toast,
    }
    console.log(data);
    e.preventDefault()
    login({ username, password }, dispatch, toast, navigate)
  }
  return (
    <main className="min-w-screen min-h-screen relative">
      <video src={videoBG}
        autoPlay={true}
        muted={true} loop
        className="w-[100%]"></video>
      <div className="main-login xl:absolute top-0 left-0 w-full h-full text-blue-950 xl:text-white flex flex-col justify-center items-center">
        <form className="form-login space-y-2 w-full md:w-[28rem]  p-11 rounded-md ">
          <div className="img-logo flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="logo rounded-full w-20 cursor-pointer" onClick={() => navigate(routes.routes_user.home)} />
          </div>
          <h1 className="text-center font-extrabold text-3xl text-yellow-500">Đăng nhập</h1>
          <div className="gr-input-item flex flex-col">
            <label>Tên tài khoản / email</label>
            <input type="text" placeholder="Nhập tên tài khoản hoặc email"
              className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 xl:border-0 cl-1" required
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </div>
          <div className="gr-input-item flex flex-col">
            <label>Mật khẩu</label>
            <input type="password" placeholder="*****************"
              className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 xl:border-0 cl-1" required
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className="gr-footer-form flex flex-col justify-center items-center space-y-3 pt-2">
            <button className=" w-32 px-5 py-2 rounded-md text-white bg-blue-900 hover:bg-blue-500" onClick={(e: any) => submitLogin(e)}>Đăng nhập</button>
            <div className="line border-[1px] w-full"></div>
            <button className="w-32 px-5 py-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-300 hover:text-blue-900" onClick={(e: any) => {
              e.preventDefault();
              navigate(routes.register)
            }}>Đăng ký</button>
          </div>
        </form>
      </div>
    </main>
  )
}
export default LoginPage;