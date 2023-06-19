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
const findAllProducts = async (dispatch: any) => {
  dispatch(startUpdateProduct());
  try {
    const res = await axios.get(`${env.api}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log('res', res);
    if (res.status !== 200) return;
    const products: IProduct[] = res.data;
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
    (p) => p.category.trim().toUpperCase() === category.trim().toUpperCase()
  );
  return data;
};
const findByIdProduct = (products: IProduct[] | any, id: string) => {
  for (let i = 0; i < products.length; i++) {
    if ((products[i].id + "").trim() === id.trim()) {
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
export { findAllProducts, findByCategory, createProduct, findByIdProduct };
