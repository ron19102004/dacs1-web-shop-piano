import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './style.component.scss'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
interface INavLink {
  title: string;
  to: string;
}
const listLink: INavLink[] = [
  { title: 'Trang chủ', to: '/' },
  { title: 'Sản phẩm', to: '/product' },
  { title: 'Về chúng tôi', to: '/about-us' },
  { title: 'Liên hệ', to: '/contact' }
]
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const changeMenu = () => setOpenMenu(!openMenu);
  return (
    <header className="min-w-screen lg:py-2 z-50 relative lg:static">
      <div className="status-mobile flex justify-between lg:hidden">
        <div className="icon-status">
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
        <div className="lg:hidden logo my-auto px-5">
          <h1 className='font-bold text-2xl'>R O N ~ T</h1>
        </div>
      </div>
      <div className={`${openMenu ? '' : 'hidden'} absolute lg:static w-[100%] lg:block wrap-nav`}>
        <nav className="container mx-auto flex lg:flex-row flex-col justify-around">
          <div className="hidden lg:block logo my-auto">
            <h1 className='font-bold text-4xl'>R O N ~ T</h1>
          </div>
          <ul className="flex flex-col lg:flex-row lg:space-x-7 space-y-4 lg:space-y-0 my-auto lg:py-3 lg:px-10 p-3 bg-slate-200 lg:rounded-3xl shadow-sm bg-4 font-bold text-blue-950">
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
            <NavLink to='/login' className={'login flex font-bold cl-4 space-x-1 border-2 border-cyan-700 py-2 px-3 lg:rounded-full hover:border-cyan-500'}>
              <h1>Login</h1>
              <div className="arrow">
                <ArrowRightAltIcon className='icon-arrow' />
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header;