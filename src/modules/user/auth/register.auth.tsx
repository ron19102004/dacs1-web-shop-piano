import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import videoBG from '../../../assets/video/bg-auth.mp4'
import ROUTE from '../../../utils/routes.json'
const routes = ROUTE[0];
import './style.auth.scss'
import logo from '../../../assets/img/logo/1.png'
const RegisterPage = () => {
  const user = useSelector((state: any) => state.persisted.auth.login.userCurrent);
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  useEffect(() => {
    if (user) navigate('/')
  }, [])
  const submitRegister = (e: any) => {
    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      phone: phoneNumber,
      address: address,
      img: url,
      username: username
    }
    alert(data)
    console.log(passwordConfirmation);
    e.preventDefault();
  }
  return (
    <main className="min-w-screen min-h-screen relative">
      <video src={videoBG}
        autoPlay={true}
        muted={true} loop
        className="w-[100%]"></video>
      <div className="main-login xl:absolute top-0 left-0 w-full h-full text-blue-950 md:text-white flex flex-col justify-center items-center">
        <form className="form-register space-y-2 w-full xl:w-[60rem]  p-11 rounded-md ">
          <div className="img-logo flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="logo rounded-full w-20 cursor-pointer" onClick={() => navigate(routes.routes_user.home)} />
          </div>
          <h1 className="text-center font-extrabold text-3xl text-yellow-500">Đăng ký</h1>
          <div className="wrap-input grid gap-4 grid-cols-1 xl:grid-cols-3">
            <div className="gr-input-item flex flex-col">
              <label>Họ và tên đệm</label>
              <input type="text" placeholder="Nhập họ và tên đệm"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setFirstName(e.target.value)} required/>
            </div>
            <div className="gr-input-item flex flex-col">
              <label>Tên</label>
              <input type="text" placeholder="Nhập tên người dùng"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setLastName(e.target.value)} required/>
            </div>
            <div className="gr-input-item flex flex-col">
              <label>Tên tài khoản</label>
              <input type="text" placeholder="Nhập tên tài khoản"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setUsername(e.target.value)} required/>
            </div>
            <div className="gr-input-item flex flex-col">
              <label>Email</label>
              <input type="email" placeholder="Nhập email"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setEmail(e.target.value)} required/>
            </div>
            <div className="gr-input-item flex flex-col">
              <label>Mật khẩu</label>
              <input type="password" placeholder="Nhập mật khẩu"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setPassword(e.target.value)} required />
            </div>
            <div className="gr-input-item flex flex-col">
              <label>Nhập lại mật khẩu</label>
              <input type="password" placeholder="Nhập lại mật khẩu"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setPasswordConfirmation(e.target.value)} required
              />
            </div>
            <div className="gr-input-item flex flex-col">
              <label>Số điện thoại</label>
              <input type="text" placeholder="Nhập số điện thoại"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="gr-input-item flex flex-col">
              <label>Địa chỉ</label>
              <input type="text" placeholder="Nhập địa chỉ"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setAddress(e.target.value)} />
            </div>
            <div className="gr-input-item flex flex-col">
              <label>URL ảnh đại điện</label>
              <input type="text" placeholder="Nhập url ảnh đại diện"
                className="w-[100%] h-12 rounded-md pl-3 outline-none border-2 cl-1"
                onChange={(e: any) => setUrl(e.target.value)} />
            </div>
          </div>
          <div className="gr-footer-form flex flex-col justify-center items-center space-y-3 pt-2">
            <button className=" w-32 px-5 py-2 rounded-md text-white bg-blue-900 hover:bg-blue-500"
              onClick={(e: any) => submitRegister(e)}
            >Đăng ký</button>
            <div className="line w-full border-[1px] rounded-full"></div>
            <Link to={routes.login} className="">Bạn đã có tài khoản ? <span className="italic text-[red]">Đăng nhập ngay</span></Link>
          </div>
        </form>
      </div>
    </main>
  )
}
export default RegisterPage;