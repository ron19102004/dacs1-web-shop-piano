import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import React from 'react';
import logo from '../../../assets/img/logo/1.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import ROUTE from '../../../utils/routes.json'
import Copyright from '@mui/icons-material/Copyright';
const routes = ROUTE[0];
interface IContact {
  icon: React.ReactNode;
  content: string;
}
interface IGoods {
  content: string;
  href: string;
}
interface ISupport {
  content: string;
  href: string;
}
interface IConnect {
  icon: React.ReactNode;
  href: string;
}
const listContacts: IContact[] = [
  {
    icon: <LocalPhoneIcon style={{
      border: '1px solid white',
      borderRadius: '100%',
    }} />, content: "0392477615"
  },
  {
    icon: <LocalPhoneIcon style={{
      border: '1px solid white',
      borderRadius: '100%',
    }} />, content: "0386069287"
  },
  { icon: <EmailIcon />, content: routes.routes_user.social.email },
]
const bestSeller: IGoods[] = [
  { content: "Grand Piano", href: routes.routes_user.product['grand-piano'] },
  { content: "Piano điện", href: routes.routes_user.product['piano-electronic'] },
  { content: "Piano Steinway & Sons", href: routes.routes_user.product['piano-steinway-sons'] }
]
const listSupports: ISupport[] = [
  { content: "Chính sách bảo hành", href: routes.routes_user.policy['warranty-policy'] },
  { content: "Chính sách nâng cấp", href: routes.routes_user.policy['upgrade-policy'] },
  { content: "Chính sách thanh toán", href: routes.routes_user.policy['payment-policy'] },
  { content: "Chính sách giao hàng", href: routes.routes_user.policy['delivery-policy'] },
]
const listConnect: IConnect[] = [
  { icon: <FacebookIcon />, href: routes.routes_user.social.facebook },
  { icon: <InstagramIcon />, href: routes.routes_user.social.instagram },
  { icon: <LocationOnIcon />, href: routes.routes_user.social.map }
]
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="min-w-screen">
      <div className="container mx-auto space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-16">
          <ul className="contact space-y-3 p-3">
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold cl-4'>LIÊN HỆ</h1>
            {listContacts.map((item: IContact, index: number) => {
              return (
                <li className='flex space-x-2 cursor-pointer' key={index}>
                  {item.icon}
                  <h3>{item.content}</h3>
                </li>
              )
            })}
            <li>
              <NavLink to={routes.routes_user.social.website} className={'flex space-x-2'}>
                <PublicIcon />
                <h3>{routes.routes_user.social.website}</h3>
              </NavLink>
            </li>
          </ul>
          <ul className='goods-best-seller space-y-3 p-3'>
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold cl-4'>SẢN PHẨM THẾ MẠNH</h1>
            {bestSeller.map((item: IGoods, index: number) => {
              return (
                <li key={index}>
                  <NavLink to={item.href}>
                    {item.content}
                  </NavLink>
                </li>
              )
            })}
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold cl-4'>KẾT NỐI VỚI RON ~ T</h1>
            <div className="connect flex space-x-1">
              {listConnect.map((item: IConnect, index: number) => {
                return (
                  <li key={index}>
                    <NavLink to={item.href}>
                      {item.icon}
                    </NavLink>
                  </li>
                )
              })}
            </div>
          </ul>
          <ul className='support space-y-3 p-3'>
            <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold cl-4'>HỖ TRỢ</h1>
            {listSupports.map((item: IGoods, index: number) => {
              return (
                <li key={index} className='hover:underline'>
                  <NavLink to={item.href}>
                    {item.content}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
        <Divider style={{
          borderColor: 'white'
        }} />
        <div className="flex flex-col space-y-4 justify-center items-center">
          <img src={logo} alt="logo" className='logo rounded-full w-24 md:w-28 lg:w-32 xl:w-36 cursor-pointer' onClick={() => navigate('/')}/>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-center'>ÂM NHẠC - NIỀM VUI CUỘC SỐNG</h1>
        </div>
        <div className="location px-3">
          <h1 className='text-center'>
            Công ty TNHH Âm nhạc RON ~ T - MST: 0392477615 - Do Sở kế hoạch và đầu tư TPDN cấp ngày 19/10/2023
          </h1>
          <h2 className='text-center'>
            Trụ sở chính: Ngũ Hành Sơn, Đà Nẵng
          </h2>
        </div>
        <p className='text-center pb-3'><Copyright />2023 ~ RON</p>
      </div>
    </footer>
  )
}
export default Footer;