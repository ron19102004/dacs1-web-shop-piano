import axios from "axios";
import ENV from "../utils/env.json";
import { errorLogin, loginSuccess, startLogin } from "../redux/slide.redux";
import { isEmail } from "./validate";
const env = ENV[0];
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
export { login };
