import axios from "axios";
import ENV from "../utils/env.json";
import { IProduct, findByIdProduct } from "./resApiProduct";
const env = ENV[0];
export enum statusBooking {
  s = "success",
  p = "processing",
}
export interface IBooking {
  id:string
  idUser: string;
  idProduct: string;
  verify: string;
  createAt: string;
  status: string;
}
const createBooking = async (payload: IBooking, toast: any, navigate: any) => {
  try {
    await axios.post(`${env.api}?sheet=booking`, payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    toast({
      title:"Đã đặt hàng thành công",
      status: "success",
    })
    navigate('/dashboard')
  } catch (error) {
    toast({
      title:"Đã sảy ra lỗi",
      status:"error",
    })
  }
};
const getMyOrder = async(products:IProduct[]|any, idUser:string)=>{
    try {
      const res = await axios.get(`${env.api}/search?sheet=booking&idUser=${idUser.trim()}`)
      const data = res.data;
      const response = [];
      for (let i=0; i<data.length; i++) {
        const product = findByIdProduct(products, data[i].idProduct);
        response.push({
          data_origin: data[i],
          product: product
        })
      }
      return response;
    } catch (error) {
      console.log('error', error);
      return [];
    }
}
export {
  createBooking,
  getMyOrder
}