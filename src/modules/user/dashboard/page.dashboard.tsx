import { useDispatch, useSelector } from "react-redux";
import ROUTE from '../../../utils/routes.json'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Divider } from "@chakra-ui/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../../utils/resApiAccount";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getMyOrder, statusBooking } from "../../../utils/resApiBooking";
const routes = ROUTE[0]
const DashBoard = () => {
  const user = useSelector((state: any) => state.persisted.auth.login.userCurrent)
  const products = useSelector((state: any) => state.persisted.product.products)
  const [hiddenPass, setHiddenPass] = useState(true)
  const [myOrder, setMyOrder] = useState<any>([]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (!user) navigate(routes.login)
    const init = async () => {
      const myOrder = await getMyOrder(products, user?.id)
      setMyOrder(myOrder)
    }
    init()
  }, [])
  const out = () => {
    logout(dispatch, navigate)
  }
  return (
    <div className="wrap-dashboard min-w-screen mt-3 md:mt-0">
      <div className="wrap-content-dashboard container mx-auto space-y-4">
        <div className="head-dash bg-3 rounded-md p-2 flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between">
          <div className="gr-inf flex space-x-2">
            <span className="my-auto">
              <Avatar
                name={user?.name}
                src={user?.img}
              />
            </span>
            <h1 className="text-xl my-auto font-bold">{user?.firstname} {user?.lastname}</h1>
          </div>
          <button className="flex space-x-1 my-auto" onClick={out}>
            <span className="my-auto"><LogoutIcon /></span>
            <span className="my-auto">Đăng xuất</span>
          </button>
        </div>
        <div className="my-info bg-3 p-2 rounded-md space-y-1">
          <h1 className="font-bold">Thông tin cá nhân</h1>
          <Divider />
          <div className="gr-my-info flex flex-col space-y-1">
            <span>Họ tên đệm:
              <span className="italic"> {user?.firstname}</span>
            </span>
            <span>Tên:
              <span className="italic"> {user?.lastname}</span>
            </span>
            <span>Tên tài khoản:
              <span className="italic"> {user?.username}</span>
            </span>
            <span>
              Mật khẩu:
              <input type={hiddenPass ? 'password' : 'text'} value={user?.password} className="bg-transparent outline-none px-2 w-32" />
              <button onClick={() => setHiddenPass(!hiddenPass)}>
                {hiddenPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </button>
            </span>
            <span>Số điện thoại:
              <span> {user?.phone}</span>
            </span>
            <span>Email:
              <span className="italic"> {user?.email}</span>
            </span>
            <span>Địa chỉ:
              <span> {user?.address}</span>
            </span>
          </div>
        </div>
        <div className="order bg-3 p-2 rounded-md space-y-1">
          <h1 className="font-bold">Đơn hàng</h1>
          <Divider />
          <div className="data-order grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {myOrder.length > 0 && myOrder.map((item: any, index: number) => {
              return (
                <div className="card-order bg-2 p-4 rounded-sm flex flex-col justify-between" key={index}>
                  <div className="my-content">
                    <div className="co-head flex justify-between">
                      <h1>Ngày đặt:
                        <span> {item?.data_origin?.createAt}</span>
                      </h1>
                      <span className={`italic px-2 rounded-sm  ${item?.data_origin?.status === statusBooking.p ? ' bg-[green]' : ' bg-[yellow]'}`}>{item?.data_origin?.status === statusBooking.p ? 'Đã thành công' : 'Đang xử lí'}</span>
                    </div>
                    <div className="co-body flex flex-col">
                      <span>Tên đơn hàng:
                        <span className="italic"> {item?.product?.name}</span>
                      </span>
                      <span>Loại:
                        <span> {item?.product?.category}</span>
                      </span>
                    </div>
                  </div>
                  <div className="co-footer flex justify-end">
                    <button className="bg-4 cl-2 rounded-sm p-1 font-bold"
                    onClick={() => navigate(`/products/${item?.data_origin?.idProduct}`)}
                    >
                      Chi tiết sản phẩm
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashBoard;