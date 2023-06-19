import IMG1 from '../../../assets/img/STORE-Slider2_42e26862f319ef0b818c028a88d7f2c4.webp';
import IMG2 from '../../../assets/img/maxresdefault.jpg'
const AboutUsPage = () => {
  return (
    <div className="container mx-auto my-4 shadow-lg shadow-blue-700 rounded-lg">
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 bg-2 lg:rounded-tl-lg lg:rounded-none rounded-t-lg lg:rounded-tr-lg">
        <img className="w-[100%] h-56 md:h-64 lg:h-72 xl:h-80 lg:rounded-tl-lg object-cover lg:rounded-none rounded-t-lg overflow-hidden" src={IMG1} alt="" />
        <div className="flex m-auto justify-center bg-2 lg:rounded-tr-lg">
          <div className="xl:w-1/2 lg:w-5/6 w-full bg-2 p-3 space-y-2">
            <p className="font-bold text-xl">ÂM NHẠC NÊN MANG ĐẾN CẢM GIÁC THOẢI MÁI NHƯ Ở NHÀ</p>
            <p className='text-base font-medium'>Tại RON ~ T, chúng tôi tôn vinh mọi phong cách, mọi kỹ năng trong không gian đặc trưng, được thiết kế để nuôi dưỡng nơi người chơi cảm giác thân thuộc và gắn bó với âm nhạc. Dù bạn là nhạc công chuyên nghiệp hoặc bạn chơi nhạc vì sở thích - bạn sẽ tìm được cả thế giới của mình cùng chúng tôi.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 bg-2 lg:rounded-bl-lg lg:rounded-none rounded-b-lg lg:rounded-br-lg">
        <div className="lg:flex order-2 lg:order-1 m-auto justify-center bg-2 lg:rounded-bl-lg lg:rounded-none rounded-b-lg">
          <div className="xl:w-1/2 lg:w-5/6 w-full bg-2 p-3 rounded-b-lg space-y-2 ">
            <p className="font-bold text-xl">ĐƯA BẠN ĐẾN GẦN HƠN VỚI RUNG CẢM ÂM NHẠC CỦA MÌNH</p>
            <p className='text-base font-medium'>Là nhà bán lẻ nhạc cụ và âm nhạc được tín nhiệm nhất châu Á, chúng tôi là ngôi nhà chung của nhiều thương hiệu và vô số nhãn hiệu nổi tiếng. Cả online và offline, đội ngũ chuyên viên của chúng tôi giàu kỹ năng và kinh nghiệm để hỗ trợ người yêu nhạc theo cách ý nghĩa nhất.</p>
          </div>
        </div>
        <img className="w-[100%] object-cover h-56 md:h-64 lg:h-72 xl:h-80 order-1 lg:order-2 lg:rounded-br-lg overflow-hidden" src={IMG2} alt="" />
      </div>
    </div>
  )
}
export default AboutUsPage;