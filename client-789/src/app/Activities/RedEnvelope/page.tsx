import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function RedEnvelope() {
  return (
    <div className="w-full h-full min-h-screen bg-[#fbd35a] font-roHe">
      <div className="relative">
        <Image
          width={0}
          height={0}
          className="w-full h-full bg-cover"
          sizes="100vw"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/hongbao/bg_hongbao.png"
          alt="hongbao"
          unoptimized
        />
        <div
          className="absolute w-full h-full top-0 left-0 pt-[8%] text-center font-bold capitalize"
          style={{
            textShadow: "2px 2px 3px #000",
          }}
        >
          <span className="text-[#fbdd61] leading-7 text-[23px]">
            Hồng Bao May Mắn
          </span>
          <small className="block mt-[.5%] text-[15px] text-[#fffdc7]">
            giải thưởng lớn không dừng lại
          </small>
        </div>
      </div>

      <div className="pt-[45px] text-center">
        <h2 className="mb-[3px] text-red-500 text-[18px]">
          bạn hiện không có hồng bao có thể nhận
        </h2>
        <p className="text-[#000] text-[14px]">
          chơi trò chơi để lấy may mắn nào
        </p>
      </div>
    </div>
  );
}
