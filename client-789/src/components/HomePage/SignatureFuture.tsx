export default function SignatureFuture() {
  const features = [
    {
      icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/f1.png",
      title: "Thương Hiệu Uy Tín",
      description: "Thương hiệu uy tín được nhiều người chơi lựa chọn.",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/f2.png",
      title: "Đa Dạng Sản Phẩm",
      description:
        "Casino Trực Tuyến, Thể Thao, Nổ Hũ, Bắn Cá, Đá Gà... Nhiều sản phẩm đa dạng bạn có thể lựa chọn.",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/f3.png",
      title: "An Ninh Bảo Mật",
      description: "Phương thức thanh toán đa dạng, đảm bảo an toàn và bảo mật cao.",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/home-feature/f4.png",
      title: "Giao Dịch Nhanh Chóng",
      description:
        "Giao dịch gửi tiền được xử lý trong vòng 1-3 phút khi nhận được khoản chuyển. Thời gian rút tiền trong vòng 5-15 phút.",
    },
  ];
  return (
    <div className="container w-full pt-16 hidden md:flex items-center justify-center flex-col">
      <div className="w-full bg-[url('/images/home-bg-section.png')] bg-contain bg-no-repeat h-[120px] text-center text-[28px] font-black leading-[81px] text-[#337c9d] text-[900] f-noto">
        NHỮNG TÍNH NĂNG VƯỢT TRỘI CỦA 789BET
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white items-center pb-[40px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`items-center px-[25px] py-[10px] flex gap-2 group text-left ${index > 0 && "border-l border-[#357e9f]"}`}
          >
            <div
              className="min-w-[80px] h-[80px] bg-center-top hover:bg-center-bottom"
              style={{
                backgroundImage: `url(${feature.icon})`,
                backgroundRepeat: "no-repeat",
              }}
            />

            <div>
              <p className="font-bold">{feature.title}</p>
              <p>{feature.description}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
