const AboutUsPage = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2">
        <img className="w-full h-full lg:rounded-tl-lg lg:rounded-none rounded-t-lg" src="https://cdn.shopify.com/s/files/1/0020/5111/2996/files/XLarge_3840x1546_2x_03_1920x770_crop_center.jpg?v=1613524772" alt="" />
        <div className="flex m-auto justify-center bg-5 lg:rounded-tr-lg">
          <div className="xl:w-1/2 lg:w-5/6 w-full bg-5 p-3">
            <p className="font-medium text-xl">NHÀ BÁN LẺ NHẠC CỤ VÀ ÂM NHẠC UY TÍN</p>
            <p>Được sáng lập vào năm 2020 và có trụ sở tại Đà Nẵng, ngày nay Ron ~ T là nhà bán lẻ, nhà phân phối nhạc cụ đa thương hiệu và phong cách sống hàng đầu Việt Nam. Tuy đã trải qua chặng đường dài nhưng chúng tôi vẫn giữ nguyên lòng nhiệt thành và cam kết hướng đến sự hoàn thiện hệt như những ngày đầu tiên.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:flex order-2 lg:order-1 m-auto justify-center bg-5 lg:rounded-bl-lg lg:rounded-none rounded-b-lg">
          <div className="xl:w-1/2 lg:w-5/6  w-full bg-5 p-3 rounded-b-lg">
            <p className="font-medium text-xl">NHÀ BÁN LẺ NHẠC CỤ VÀ ÂM NHẠC UY TÍN</p>
            <p>Được sáng lập vào năm 2020 và có trụ sở tại Đà Nẵng, ngày nay Ron ~ T là nhà bán lẻ, nhà phân phối nhạc cụ đa thương hiệu và phong cách sống hàng đầu Việt Nam. Tuy đã trải qua chặng đường dài nhưng chúng tôi vẫn giữ nguyên lòng nhiệt thành và cam kết hướng đến sự hoàn thiện hệt như những ngày đầu tiên.</p>
          </div>
        </div>
        <img className="w-full h-full order-1 lg:order-2 lg:rounded-br-lg" src="https://cdn.shopify.com/s/files/1/0020/5111/2996/files/home_for_all_XLarge_3840x1546_2x_450f1362-2356-439b-a36a-575bdc9b4192_1920x770_crop_center.jpg?v=1675127668" alt="" />
      </div>
    </div>
  )
}
export default AboutUsPage;