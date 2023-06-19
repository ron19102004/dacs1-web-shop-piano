import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct, findByIdProduct } from "../../../utils/resApiProduct";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const InfoProduct = () => {
  const products = useSelector((state: any) => state.persisted.product.products)
  const [product, setProduct] = useState<IProduct | any>()
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    if (id) {
      const init = () => {
        const product = findByIdProduct(products, id);
        if (product) setProduct(product)
      }
      init()
    } else navigate('/products');
  }, [])
  return (
    <div className="min-w-screen pt-3 md:pt-0">
      {product ? (
        <div className="container mx-auto space-y-4 pt-2">
          <div className="booking-header bg-3 rounded-md flex py-2 pl-4 shadow-lg shadow-blue-800 ">
            <button onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </button>
            <h1 className="my-auto h-full py-2 pl-4 text-lg lg:text-xl font-bold cl-4">{product.name}</h1>
          </div>
          <div className="info-product lg:flex lg:space-x-5 space-y-3 lg:space-y-0">
            <div className="left-info basis-1/3">
              <img src={product.img} alt="img" className="rounded-md w-full h-full" />
            </div>
            <div className="right-info flex-1 flex flex-col justify-between space-y-4">
              <ul className="list-info space-y-2 text-md">
                <li className="space-x-3">
                  <span>Tên sản phẩm:</span>
                  <span className="italic font-bold">{product.name}</span>
                </li>
                <li className="space-x-3">
                  <span>Giá sản phẩm:</span>
                  <span className="italic font-bold">{product.price}</span>
                </li>
                <li className="space-x-3">
                  <span>Loại:</span>
                  <span className="font-bold">{product.category}</span>
                </li>
                <li className="space-x-3">
                  <span>Xuất sứ:</span>
                  <span className=" font-bold">{product.origin}</span>
                </li>
                <li className="space-x-3">
                  <span>Thương hiệu:</span>
                  <span className="italic font-bold">{product.brand}</span>
                </li>
                <li className="space-x-3">
                  <span>Màu sắc:</span>
                  <span className="italic font-bold">{product.color}</span>
                </li>
                <li className="space-x-3">
                  <span>Mô tả:</span>
                  <span className="italic font-medium text-sm">{product.description}</span>
                </li>
              </ul>
              <div className="btn-order">
                <button className="px-3 py-2 rounded-md bg-4 cl-1 hover:bg-yellow-400"
                onClick={()=>{
                  navigate(`/booking/${id}`)
                }}
                >Đặt ngay</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="error container mx-auto py-4 rounded-xl bg-2 shadow-xl shadow-blue-700 my-4">
          <h1 className="text-center text-base md:text-lg lg:text-2xl xl:text-4xl cl-4 font-bold">Sản phẩm không tồn tại.</h1>
        </div>
      )}
    </div>
  )
}
export default InfoProduct;