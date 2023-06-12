import axios from "axios";
import ENV from "../utils/env.json";
import {
  errorLogin,
  loginSuccess,
  logoutError,
  logoutSuccess,
  startLogin,
} from "../redux/slide.redux";
import { isEmail } from "./validate";
const env = ENV[0];
export enum Role {
  admin = "admin",
  user = "user",
}
export interface IRegister {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  username: string;
  email: string;
  password: string;
  address: string;
  img: string;
  role: string;
  accept: number;
}
const login = async (
  payload: { username: string; password: string },
  dispatch: any,
  toast: any,
  navigate: any
) => {
  dispatch(startLogin());
  let selectBy = "username";
  if (isEmail(payload.username.trim())) {
    selectBy = "email";
  }
  try {
    const res = await axios.get(
      `${env.api}/search?sheet=account&${selectBy}=${payload.username}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data.length > 0) {
      const user = res.data[0];
      if (user.password.trim() !== payload.password.trim()) {
        toast({
          title: "Đăng nhập thất bại",
          description: "Mật khẩu xác thực sai",
          status: "error",
        });
        return;
      }
      dispatch(loginSuccess(user));
      toast({
        title: "Đăng nhập thành công",
        status: "success",
      });
      navigate("/");
    } else
      toast({
        title: "Username không hợp lệ",
        status: "error",
      });
  } catch (error) {
    dispatch(errorLogin());
    console.log(error);
  }
};
const logout = (dispatch: any, navigate: any) => {
  try {
    dispatch(logoutSuccess());
    navigate("/");
  } catch (error) {
    dispatch(logoutError());
    console.log("error", error);
  }
};
const register = async (payload: IRegister, toast: any, navigate: any) => {
  try {
    await axios.post(`${env.api}?sheet=account`, payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    toast({
      title:'Đăng kí thành công',
      status:"success"
    })
    navigate('/login')
  } catch (error) {
    toast({
      title:'Lỗi đăng kí. Xin thử lại',
      status: 'error',
    })
    console.log("error", error);
  }
};
export { login, logout , register};
