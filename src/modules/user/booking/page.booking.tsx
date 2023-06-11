import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct, findByIdProduct } from "../../../utils/resApiProduct";
import ROUTE from '../../../utils/routes.json'
import QR from '../../../assets/img/bank.jpg'
import { Tooltip } from "@chakra-ui/react";
const routes = ROUTE[0]
const BookingPage = () => {
  const products = useSelector((state: any) => state.persisted.product.products)
  const user = useSelector((state: any) => state.persisted.auth.login.userCurrent);
  const [product, setProduct] = useState<IProduct | any>()
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    // if(!user) navigate(routes.login)
    console.log(user)
    if (id) {
      const init = () => {
        const product = findByIdProduct(products, id);
        if (product) setProduct(product)
        console.log(product);
      }
      init()
    } else navigate(routes.routes_user.product["/"]);
  }, [])
  return (
    <div className="min-w-screen mt-3 lg:mt-0">
      {product ? (
        <div className="wrap-payment container mx-auto space-y-5">
          <div className="title bg-3 rounded-md">
            <h1 className="text-3xl font-bold cl-4 py-1 px-6">Thanh toán</h1>
          </div>
          <div className="info-product bg-3 rounded-md px-6 py-3 space-y-5">
            <div className="wrap-inf flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between border-[1px] border-dotted border-slate-500 p-3">
              <div className="gr-pro-inf my-auto">
                <h1 className="font-bold">Sản phẩm</h1>
                <div className="inf flex lg:space-x-10 flex-col lg:flex-row ">
                  <div className="gr-name-img flex space-x-2 my-auto">
                    <img src={product?.img} alt="img" className="w-12 rounded-md my-auto" />
                    <p className="my-auto text-ellipsis line-clamp-1">{product?.name}</p>
                  </div>
                  <p className="my-auto text-slate-400">Loại: {product?.category}</p>
                </div>
              </div>
              <div className="gr-price my-auto">
                <h1 className="font-bold">Đơn giá</h1>
                <p>{product?.price}</p>
              </div>
            </div>
            <div className="message border-[1px] border-dotted border-slate-500 py-4 px-4">
              <div className="gr-in">
                <label>Lời nhắn: </label>
                <input type="text" placeholder="Lưu ý cho người bán..." className="px-3 py-1 rounded-md outline-none border-[1px] bg-transparent" />
              </div>
            </div>
          </div>
          <div className="payment bg-3 rounded-md">
            <div className="title px-6 py-2 border-b-[1px] border-dotted border-slate-500 rounded-md">
              <h1 className="font-extrabold">Thanh toán</h1>
            </div>
            <div className="methods px-6 py-4">
              <div className="bank flex flex-col justify-center items-center">
                <h1 className="text-center font-semibold">Thanh toán qua mã QR</h1>
                <img src={QR} alt="qr" className="w-80 rounded-md" />
              </div>
            </div>
            <div className="verify-payment flex flex-col justify-center items-center">
              <Tooltip label="Mã xác thực sẽ được gửi về sau khi bạn thanh toán thành công. Vui lòng kiểm tra trong tin nhắn">
                <label className="font-extrabold cursor-pointer">Điền mã xác thực đã thanh toán</label>
              </Tooltip>
              <input type="text" placeholder="Nhập mã xác thực" className="w-64 rounded-md h-8 px-2 outline-none cl-1" />
              <button className="bg-green-500 px-2 py-1 rounded-sm my-2">Xác thực</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="error container mx-auto">
          <h1 className="text-center text-3xl">Sản phẩm không tồn tại.</h1>
        </div>
      )
      }
    </div >
  )
}
export default BookingPage;