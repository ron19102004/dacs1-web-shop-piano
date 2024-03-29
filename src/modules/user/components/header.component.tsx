import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './style.component.scss'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assets/img/logo/1.png';
import ROUTE from '../../../utils/routes.json'
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Tooltip } from '@chakra-ui/react';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout } from '../../../utils/resApiAccount';
const routes = ROUTE[0];
interface INavLink {
  title: string;
  to: string;
}
const listLink: INavLink[] = [
  { title: 'Trang chủ', to: routes.routes_user.home },
  { title: 'Sản phẩm', to: routes.routes_user.product['/'] },
  { title: 'Về chúng tôi', to: routes.routes_user.about_us },
]
const Header = () => {
  const user = useSelector((state: any) => state.persisted.auth.login.userCurrent)
  const [openMenu, setOpenMenu] = useState(false);
  const changeMenu = () => setOpenMenu(!openMenu);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    logout(dispatch, navigate)
  }
  return (
    <header className="min-w-screen lg:py-2 z-50 relative lg:static">
      <div className="status-mobile flex justify-between lg:hidden">
        <div className="icon-status my-auto mx-1">
          {openMenu ?
            <button onClick={changeMenu}>
              <CloseIcon className='border-2 rounded-md' style={{
                fontSize: '35px'
              }} />
            </button> :
            <button onClick={changeMenu}>
              <MenuIcon className='border-2 rounded-md' style={{
                fontSize: '35px'
              }} />
            </button>
          }
        </div>
        <div className="lg:hidden my-auto flex space-x-3 py-1">
          <h1 className='font-bold text-2xl my-auto'>R O N ~ T</h1>
          <img src={logo} alt="logo" className='logo w-10 rounded-full shadow-yellow-400 shadow-md cursor-pointer' onClick={() => navigate('/')} />
        </div>
      </div>
      <div className={`${openMenu ? '' : 'hidden'} absolute lg:static w-[100%] lg:block wrap-nav`}>
        <nav className="container mx-auto flex lg:flex-row flex-col justify-around">
          <div className="hidden my-auto lg:flex space-x-2">
            <img src={logo} alt="logo" className='logo w-14 rounded-full cursor-pointer' onClick={() => navigate('/')} />
            <h1 className='font-bold text-4xl my-auto'>R O N ~ T</h1>
          </div>
          <ul className="flex flex-col lg:flex-row lg:space-x-7 space-y-4 lg:space-y-0 my-auto lg:py-3 lg:px-10 p-3 bg-slate-200 lg:rounded-3xl bg-4 font-bold text-blue-950">
            {listLink.map((item: INavLink, index: number) => {
              return (
                <li key={index} className='li-list' onClick={changeMenu}>
                  <NavLink to={item.to}
                    end={index === 0 ? true : false}
                    className={({ isActive }) => isActive ? 'navLink-active ' : 'navLink'}
                  >
                    {item.title}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className="gr-status-right my-auto flex flex-col lg:flex-row bg-1">
            {user ? (
              <div className="wrap-acc flex flex-col lg:flex-row lg:space-x-5">
                <Tooltip label={user?.username}>
                  <NavLink to={routes.routes_user.dashboard} className={'flex space-x-2 border-t-2 border-l-2 border-r-2 lg:border-2 border-cyan-700 p-1 lg:rounded-full hover:border-cyan-500'}>
                    <Avatar
                      name={user?.name}
                      src={user?.img}
                    />
                    <span className='my-auto font-bold text-base'>{user?.lastname}</span>
                  </NavLink>
                </Tooltip>
                <button className='font-bold text-base flex space-x-1 border-2 border-cyan-700 p-1 lg:rounded-full hover:border-cyan-500' onClick={logOut}>
                  <span className='my-auto'><LogoutIcon /></span>
                  <span className='my-auto'>Đăng xuất</span>
                </button>
              </div>
            ) : (<NavLink to={routes.login} className={'login flex font-bold cl-4 space-x-1 border-2 border-cyan-700 py-2 px-3 lg:rounded-full hover:border-cyan-500'}>
              <div className="flex space-x-1">
                <span className='my-auto'><AccountCircleIcon /></span>
                <h1 className='my-auto'>Đăng nhập</h1>
              </div>
              <div className="arrow">
                <ArrowRightAltIcon className='icon-arrow' />
              </div>
            </NavLink>)}
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header;