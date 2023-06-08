// import { useState } from "react";
// import { login } from "../../../utils/resApiAccount";
// import { useDispatch } from "react-redux";
// import { useToast } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo/1.png'
const LoginPage = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('')
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const toast = useToast({ position: 'top', duration: 3000, isClosable: true })
  const submitLogin = (e: Event) => {
    e.preventDefault()
    // login({ username, password }, dispatch, toast, navigate)
  }
  return (
    <div className="wrap-login min-w-screen min-h-screen bg-1 flex flex-col justify-center items-center">
      <div className="wrap-from flex flex-col justify-center items-center space-y-9">
        <NavLink to={'/'}><img src={logo} alt="logo" className="logo w-40 rounded-full" /></NavLink>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96 bg-4">
          <h1 className=" text-center text-3xl font-bold cl-2">Đăng nhập</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-1" type="button" onClick={(e:any)=> submitLogin(e)}>
              Đăng nhập
            </button>
            <a className="cl-1 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Quên mật khẩu?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginPage;