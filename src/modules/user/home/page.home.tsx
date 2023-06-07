import banner from '../../../assets/baner-landingpage.png'
import banner_grand from '../../../assets/banner-grand-piano-duc-tri.jpg'
import banner_electron from '../../../assets/home-product-banner-3.png'
import banner_s from '../../../assets/home-product-banner-4.png'
import trust1 from '../../../assets/home-1.svg'
import trust2 from '../../../assets/home-2.svg'
import trust3 from '../../../assets/home-3.svg'
import trust4 from '../../../assets/home-4.svg'
import './style.home.scss'
const HomePage = () => {
  return (
    <div className="main space-y-3 sm:space-y-5 lg:space-y-8 xl:space-y-10">
      <div className="banner">
        <img src={banner} alt="banner" className='w-screen h-28 sm:h-52 lg:h-96 object-cover' />
      </div>
      <div className="trust container mx-auto space-y-4">
        <h1 className='text-center font-bold text-xl lg:text-2xl xl:text-3xl cl-4 '>VÌ SAO NÊN CHỌN CHÚNG TÔI</h1>
        <ul className="gr-trust grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6">
          <li className='flex justify-center space-x-3 border-2 py-4 px-6 rounded-xl'>
            <img src={trust1} alt="trust1" className='w-12 md:w-16 xl:w-16' />
            <h2 className='my-auto'>Dịch vụ hoàn hảo</h2>
          </li>
          <li className='flex justify-center space-x-3 border-2 py-4 px-6 rounded-xl'>
            <img src={trust2} alt="trust2" className='w-12 md:w-16 xl:w-16' />
            <h2 className='my-auto'>Tư vấn tận tâm</h2>
          </li>
          <li className='flex justify-center space-x-3 border-2 py-4 px-6 rounded-xl'>
            <img src={trust3} alt="trust3" className='w-12 md:w-16 xl:w-16' />
            <h2 className='my-auto'>Sản phẩm khác biệt</h2>
          </li>
          <li className='flex justify-center space-x-3 border-2 py-4 px-6 rounded-xl'>
            <img src={trust4} alt="trust4" className='w-12 md:w-16 xl:w-16' />
            <h2 className='my-auto'>Tối ưu ngân sách</h2>
          </li>
        </ul>
      </div>
      <div className="content-main container mx-auto space-y-3 sm:space-y-5 lg:space-y-8 xl:space-y-10 ">
        <div className="intro-banner-grand relative flex flex-col justify-center items-center">
          <img src={banner_grand} alt="banner-grand" className='w-[100%] filter_grayscale rounded-lg' />
          <div className="content-pic absolute w-full h-full flex flex-col justify-center top-0 left-0 rounded-md">
            <div className="lg:w-[400px] space-y-5 pl-5 lg:pl-10">
              <h1 className='font-extrabold lg:text-4xl text-xl'>Đàn Piano Grand</h1>
              <div className="hidden lg:block content">
                <p className='lg:text-3'>
                  Những chiếc đàn piano được đặt hàng riêng và sản xuất với số lượng giới hạn, nói lên đẳng cấp và thẩm mỹ của người sở hữu.
                </p>
              </div>
              <button className='border-2 px-7 py-2 hover:bg-white hover:text-yellow-800'>
                Xem thêm
              </button>
            </div>
          </div>
        </div>
        <div className="intro-banner-electric relative flex flex-col justify-center items-center">
          <img src={banner_electron} alt="banner-e" className='w-[100%] filter_grayscale rounded-md' />
          <div className="content-pic absolute w-full h-full flex flex-col justify-center top-0 left-0 rounded-md ">
            <div className="lg:w-[400px] space-y-5 pl-5 lg:pl-10">
              <h1 className='font-extrabold lg:text-4xl text-xl'>Đàn piano Điện</h1>
              <div className="hidden lg:block content">
                <p className='lg:text-3'>
                  Âm thanh mạnh mẽ, phím đàn phản hồi tinh tế cùng vẻ ngoài sang trọng, chiếc Piano luôn đem lại trải nghiệm tốt nhất cho người chơi
                </p>
              </div>
              <button className='border-2 px-7 py-2 hover:bg-white hover:text-yellow-800'>
                Xem thêm
              </button>
            </div>
          </div>
        </div>
        <div className="intro-banner-s relative flex flex-col justify-center items-center">
          <img src={banner_s} alt="banner-s" className='w-[100%] filter_grayscale rounded-md' />
          <div className="content-s absolute w-full h-full flex flex-col justify-center lg:items-end top-0 left-0 rounded-md ">
            <div className="lg:w-[400px] space-y-5 pl-5 lg:pl-10">
              <h1 className='font-extrabold lg:text-4xl text-xl'>Đàn piano Steinway & Sons</h1>
              <div className="hidden lg:block content">
                <p className='lg:text-3'>
                  Âm thanh mạnh mẽ, phím đàn phảnĐẳng cấp trong thiết kế và thẩm mỹ âm thanh được thể hiện toàn diện trong những siêu phẩm ấn tượng.
                  hồi tinh tế cùng vẻ ngoài sang trọng, chiếc Piano luôn đem lại trải nghiệm tốt nhất cho người chơi
                </p>
              </div>
              <button className='border-2 px-7 py-2 hover:bg-white hover:text-yellow-800'>
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;