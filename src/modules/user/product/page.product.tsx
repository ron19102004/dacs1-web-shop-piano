import { useEffect, useState } from "react";
import { IProduct, categoryProduct, findByCategory } from "../../../utils/resApiProduct";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Divider } from "@chakra-ui/react";
import logo from '../../../assets/img/banner-grand-piano-duc-tri.jpg'
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [listProduct, setListProduct] = useState<IProduct[] | any>();
  const products = useSelector((state: any) => state.persisted.product.products)
  const [selected, setSelected] = useState('0');
  const navigate = useNavigate()
  useEffect(() => {
    const init =  () => {
      setListProduct(products);
    }
    init();
  }, [])
  const filterCategory = () => {
    if (selected.trim() === '0') {
      setListProduct(products);
      return;
    }
    if (selected.trim() === categoryProduct.electronic.trim()) {
      const data = findByCategory(products, categoryProduct.electronic);
      setListProduct(data);
      return
    }
    if (selected.trim() === categoryProduct.grand.trim()) {
      const data = findByCategory(products, categoryProduct.grand);
      setListProduct(data);
      return
    }
    if (selected.trim() === categoryProduct.steinway_sons.trim()) {
      const data = findByCategory(products, categoryProduct.steinway_sons);
      setListProduct(data);
      return
    }
  }
  return (
    <div className="wrap-product container mx-auto space-y-5">
      <div className="gr-product-header lg:flex justify-between items-center px-3">
        <h1 className="text-2xl font-bold cl-4">Tất cả sản phẩm</h1>
        <div className="gr-header-right sm:flex sm:space-x-5 space-y-2 sm:space-y-0">
          <h1 className="text-lg cl-4 font-semibold">Bộ lọc theo danh mục:</h1>
          <div className="gr-filter space-x-2">
            <select className="category text-black outline-none h-7 rounded-md"
              onChange={(e: any) => setSelected(e.target.value)}
            >
              <option value="0">Tất cả</option>
              <option value={categoryProduct.grand}>Piano grand</option>
              <option value={categoryProduct.electronic}>Piano điện</option>
              <option value={categoryProduct.steinway_sons}>Piano Steinway & Sons</option>
            </select>
            <button className="border-2 rounded-lg border-yellow-400"
              onClick={filterCategory}
            >
              <FilterAltIcon style={{
                color: 'yellow'
              }} />
            </button>
          </div>
        </div>
      </div>
      <Divider style={{
        borderColor: 'white'
      }} />
      <div className="body-product grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {listProduct && listProduct.map((item: IProduct, index: number) => {
          return (
            <div className="card-product bg-2 hover:shadow-lg hover:shadow-blue-900 transition-all rounded-lg p-4 space-y-3 flex flex-col justify-between" key={index}>
              <div className="content-product-card space-y-3">
                <div className="card-header-product w-full">
                  <img src={logo} alt="img-product" className="object-cover rounded-lg" />
                </div>
                <div className="card-body-product">
                  <h1 className="name-product font-semibold text-ellipsis line-clamp-2">{item.name}</h1>
                  <p className="price italic">{item.price}</p>
                </div>
                <div className="description">
                  <h2 className="cl-4 italic underline">Mô tả:</h2>
                  <p className="text-ellipsis line-clamp-2 text-gray-200">{item.description}</p>
                </div>
              </div>
              <div className="card-footer-product flex justify-around ">
                <button className="border-2 py-1 px-4 rounded bg-4 cl-1 hover:bg-yellow-900 hover:text-yellow-50 transition-all"
                  onClick={() => {
                    navigate(`/booking/${item.id}`)
                  }}
                >Đặt ngay </button>
                <button className="transition-all border-2 py-1 px-4 rounded hover:bg-white hover:text-black"
                  onClick={() => {
                    navigate(`/products/${item.id}`)
                  }}
                >Xem thêm</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Products;