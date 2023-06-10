import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct, findByIdProduct } from "../../../utils/resApiProduct";
import ROUTE from '../../../utils/routes.json'
const routes = ROUTE[0]
const BookingPage = () => {
  const products = useSelector((state: any) => state.persisted.product.products)
  const user = useSelector((state: any) => state.persisted.auth.login.userCurrent);
  const [product, setProduct] = useState<IProduct | any>()
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    if(!user) navigate(routes.login)
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
    <div className="min-w-screen">
      {product ? (
        <>
          hi
        </>
      ) : (
        <div className="error container mx-auto">
          <h1 className="text-center text-3xl">Sản phẩm không tồn tại.</h1>
        </div>
      )}
    </div>
  )
}
export default BookingPage;