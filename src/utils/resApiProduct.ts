import axios from "axios";
import ENV from "../utils/env.json";
import {
  errorUpdateProduct,
  startUpdateProduct,
  updateProduct,
} from "../redux/slide.redux";
const env = ENV[0];
export enum categoryProduct {
  grand = "Grand",
  electronic = "Electronic",
  steinway_sons = "Steinway-sons",
}
export enum statusProduct {
  exists = "CÒN HÀNG",
  end = "HẾT HÀNG",
}
export interface IProduct {
  id: number;
  name: string;
  img: string;
  description: string;
  price: string;
  category: string;
  color: string;
  brand: string;
  origin: string;
  quantity: number;
  status: string;
}
export interface ICreateProductDto {
  name: string;
  img: string;
  description: string;
  price: string;
  category: string;
  color: string;
  brand: string;
  origin: string;
  quantity: number;
  status: string;
}
// const item: IProduct = {
//   name: "ĐÀN PIANO STEINWAY LOUIS M-170",
//   img: "https://pianoductri.com/wp-content/uploads/2023/03/Dan-Piano-Yamaha-YU3SZ.jpg",
//   description: `Thiết kế Louis XV trên đàn Piano Steinway Louis M-170
//   Hoa lan tây (hay còn gọi là Acanthus) là một loại hoa được yêu thích trong nghệ thuật và trang trí, và nó thường được sử dụng để trang trí trên các thiết kế nội thất và đồ dùng trong phong cách Louis XV.
  
//   Phong cách Louis XV xuất hiện ở Pháp vào giữa thế kỷ 18 và được đặc trưng bởi những đường cong mềm mại, hoa văn tinh tế và trang trí tỉ mỉ. Hoa lan tây thường được sử dụng để trang trí các đồ nội thất trong phong cách này.
  
//   Chiếc đàn Piano Steinway này được điểm xuyết bằng họa tiết hoa lan tây tại các khối chân đàn, với sự kết hợp của những đường cong mềm mại của phong cách Louis XV tạo cho chiếc đàn một tổng thể sang trọng và tinh tế.
  
//   Cây đàn piano tuyệt đẹp này được chế tạo trong Kỷ nguyên vàng của sản xuất đàn piano Mỹ. Được biết đến với cái tên ” Model M”, đàn piano này được làm từ gỗ óc chó tuyệt đẹp theo phong cách chạm khắc Louis XV quý hiếm.
  
//   `,
//   price: "1,650,000,000₫",
//   category: categoryProduct.grand,
//   color: "Gỗ",
//   brand: "Steinway & Sons",
//   origin: "New York",
//   id: 1,
//   quantity: 10,
//   status: statusProduct.exists,
// };
const findAllProducts = async (dispatch: any) => {
  dispatch(startUpdateProduct());
  try {
    const res = await axios.get(`${env.api}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 200) return;
    const products: IProduct[] = [];
    for (let i = 0; i < res.data.length; i++) {
      const item: IProduct = res.data[i];
      const index = products.findIndex((p) => p.id === item.id);
      if (index < 0) {
        products.push(item);
      }
    }
    dispatch(updateProduct(products));
  } catch (error) {
    dispatch(errorUpdateProduct());
    console.log("error", error);
  }
};
const findByCategory = (products: IProduct[] | any, category: string) => {
  if (products.length === 0) return [];
  const productsCopy: IProduct[] = [...products];
  const data: IProduct[] = productsCopy.filter(
    (p) => p.category.trim() === category.trim()
  );
  return data;
};
const findByIdProduct = (products: IProduct[] | any, id: string) => {
  for (let i = 0; i < products.length; i++) {
    if ((products[i].id+'').trim()=== id.trim()) {
      return products[i];
    }
  }
  return null;
};
const createProduct = async (product: ICreateProductDto, dispatch: any) => {
  try {
    const data = {
      id: "INCREMENT",
      name: product.name,
      img: product.img,
      description: product.description,
      price: product.price,
      category: product.category,
      color: product.color,
      brand: product.brand,
      origin: product.origin,
      quantity: product.quantity,
      status: product.status,
    };
    const res = await axios.post(`${env.api}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    findAllProducts(dispatch);
  } catch (error) {
    console.log(error);
  }
};
export { findAllProducts, findByCategory, createProduct,findByIdProduct };
