/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./InterestGame.module.css";

export default function ListGame({ itemActive }: { itemActive: number }) {
  const listHotGame = [
    {
      name: "DG Bacarat",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dg-bcr.png",
      link: "",
    },
    {
      name: "Sexy Bacarat",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/sexy-bcr.png",
      link: "",
    },
    {
      name: "WM Xóc Đĩa",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/wm-xd.png",
      link: "",
    },
    {
      name: "Evolution Tài Xỉu",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/evo-tx.png",
      link: "",
    },
    {
      name: "Saba Thể Thao",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/saba-tt.png",
      link: "",
    },
    {
      name: "GW Xổ Số",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/gw-sx.png",
      link: "",
    },
    {
      name: "TP Bắn cá Dễ Dàng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tp-bcdd.png",
      link: "",
    },
    {
      name: "TP Nhị Gia bắn cá",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tp-ngbc.png",
      link: "",
    },
    {
      name: "FC bắn cá Vũ Trụ",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/fc-bc.png",
      link: "",
    },
    {
      name: "Bài Cào",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/bai-cao.png",
      link: "",
    },
    {
      name: "Tiến Lên",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tien-len.png",
      link: "",
    },
    {
      name: "Lửa Vàng Bùng Nổ 7",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/lvbn7.png",
      link: "",
    },
    {
      name: "Đế quốc hoàng kim",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dqhk.png",
      link: "",
    },
    {
      name: "Đường Mạt Chược",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dmc.png",
      link: "",
    },
    {
      name: "Đường Mạt Chược2",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dmc2.png",
      link: "",
    },
    {
      name: "Bảo thạch Kala",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/bt-kl.png",
      link: "",
    },
    {
      name: "PHI CÔNG",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/phi-cong.png",
      link: "",
    },
    {
      name: "Monopoly Slot Super Bomb",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/mss.png",
      link: "",
    },
  ];

  const listPGgame = [
    {
      name: "Kho Báu Aztec",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/kb-a.png",
      link: "",
    },
    {
      name: "Đường Mạt Chược",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dmc.png",
      link: "",
    },
    {
      name: "Đường Mạt Chược 2",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dmc2.png",
      link: "",
    },
    {
      name: "Neko May Mắn",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/nmm.png",
      link: "",
    },
    {
      name: "Chiến Thắng CaiShen",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ctc.png",
      link: "",
    },
    {
      name: "Wild Đạo Tặc",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/wdt.png",
      link: "",
    },
    {
      name: "Pháo hoa Wild",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/phw.png",
      link: "",
    },
    {
      name: "Giấc Mơ Ma Cao",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/gmmc.png",
      link: "",
    },
    {
      name: "Kỳ Lân Mách Nước",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/klmn.png",
      link: "",
    },
    {
      name: "Kho Báu Ganesha",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/kbg.png",
      link: "",
    },
    {
      name: "Kho Báu Của Thuyền Trưởng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/kbctt.png",
      link: "",
    },
    {
      name: "QUYẾT CHIẾN TIỀN THƯỞNG",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/qctt.png",
      link: "",
    },
    {
      name: "Kho Báu Của Yêu Tinh",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/kbcyt.png",
      link: "",
    },
    {
      name: "Nữ Hoàng Tiền Thưởng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/nhtt.png",
      link: "",
    },
    {
      name: "Quý bà say rượu",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/qbsr.png",
      link: "",
    },
  ];

  const listJiligame = [
    {
      name: "Siêu Cấp Ace",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/sca.png",
      link: "",
    },
    {
      name: "Đế quốc hoàng kim",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dqhk.png",
      link: "",
    },
    {
      name: "Bảo thạch Kala",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/bt-kl.png",
      link: "",
    },
    {
      name: "Quyền Vương",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/qv.png",
      link: "",
    },
    {
      name: "Tiền Đến Rồi",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tdr.png",
      link: "",
    },
    {
      name: "Vương bài vô hạn",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/vbvh.png",
      link: "",
    },
    {
      name: "Điên Cuồng 777",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dc777.png",
      link: "",
    },
    {
      name: "Ali quán ba quán ba",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/aqbqb.png",
      link: "",
    },
    {
      name: "Pháo thủ điên cuồng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ptdc.png",
      link: "",
    },
    {
      name: "Bảng Phong Thần",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/bpt.png",
      link: "",
    },
    {
      name: "Bảo vật Pharaoh",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/bvp.png",
      link: "",
    },
    {
      name: "Trâu Rừng Xung Phong",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/trxp.png",
      link: "",
    },
    {
      name: "Nhân Ngư Ngọt Ngào",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/nnnn.png",
      link: "",
    },
    {
      name: "Thượng Hải Ngọt Ngào",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/thnn.png",
      link: "",
    },
    {
      name: "Tìm vàng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tv.png",
      link: "",
    },
  ];

  const listTPgame = [
    {
      name: "TP Câu cá Phát Tài",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tp-ccpt.png",
      link: "",
    },
    {
      name: "Thần Tài Giáng Lâm",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ttgl.png",
      link: "",
    },
    {
      name: "Thần Tài 777",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tt777.png",
      link: "",
    },
    {
      name: "Crazy 777",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/c777.png",
      link: "",
    },
    {
      name: "Ngôi Sao May Mắn",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/nsmm.png",
      link: "",
    },
    {
      name: "CÂY PHÚ QUÝ",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/cpq.png",
      link: "",
    },
    {
      name: "Mạt Chược Phát Tài 2",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/mcpt2.png",
      link: "",
    },
    {
      name: "Kẻ Cướp Ngân Hàng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/kcnh.png",
      link: "",
    },
    {
      name: "Lửa Vàng Bùng Nổ 7",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/lvbn7.png",
      link: "",
    },
    {
      name: "Phát Phát Phát",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ppp.png",
      link: "",
    },
    {
      name: "Thần tài Phú Quý",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ttpq.png",
      link: "",
    },
    {
      name: "Vua Đá gà",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/vdg.png",
      link: "",
    },
    {
      name: "Kỳ Nghỉ Của Cún",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/kncc.png",
      link: "",
    },
    {
      name: "Tiệc Kẹo Ngọt",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tkn.png",
      link: "",
    },
    {
      name: "5x Kim Cương 7",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/5xkc7.png",
      link: "",
    },
  ];

  const listJiliCCgame = [
    {
      name: "JILI Đánh cá vui vẻ",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/jl-dcvv.png",
      link: "",
    },
    {
      name: "JILI Đoạt bảo truyền kỳ",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dbtk.png",
      link: "",
    },
    {
      name: "JILI Phi Long Tàng Bảo",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/pltb.png",
      link: "",
    },
    {
      name: "JILI Nổ Cá Đến Rồi",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ncdr.png",
      link: "",
    },
    {
      name: "JILI Tiền Long Đánh Cá",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/tldc.png",
      link: "",
    },
    {
      name: "JILI Jackpot Đánh Cá",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/jdc.png",
      link: "",
    },
    {
      name: "JILI Chuyên Gia Săn Rồng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/cgsr.png",
      link: "",
    },
    {
      name: "JILI Vua đánh cá",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/vdc.png",
      link: "",
    },
    {
      name: "JILI Dàn sao đánh cá",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/dsdc.png",
      link: "",
    },
    {
      name: "JILI Nhà tư bản khủng",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/ntbk.png",
      link: "",
    },
    {
      name: "JILI Jackpot Vua Đại Dương",
      logo: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-games/jvdd.png",
      link: "",
    },
  ];
  switch (itemActive) {
    case 1:
      return (
        <div className="w-full grid grid-cols-6 gap-8">
          {listHotGame.map((item, index) => (
            <div className="flex flex-col gap-2 justify-center items-center" key={index}>
              <img src={item.logo} alt="" className="w-[160px] h-[160px]" />
              <div className={styles.buttonGame}>{item.name}</div>
            </div>
          ))}
        </div>
      );

    case 2:
      return (
        <div className="w-full grid grid-cols-6 gap-8">
          {listPGgame.map((item, index) => (
            <div className="flex flex-col gap-2 justify-center items-center" key={index}>
              <img src={item.logo} alt="" className="w-[160px] h-[160px]" />
              <div className={styles.buttonGame}>{item.name}</div>
            </div>
          ))}
        </div>
      );

    case 3:
      return (
        <div className="w-full grid grid-cols-6 gap-8">
          {listJiligame.map((item, index) => (
            <div className="flex flex-col gap-2 justify-center items-center" key={index}>
              <img src={item.logo} alt="" className="w-[160px] h-[160px]" />
              <div className={styles.buttonGame}>{item.name}</div>
            </div>
          ))}
        </div>
      );

    case 4:
      return (
        <div className="w-full grid grid-cols-6 gap-8">
          {listTPgame.map((item, index) => (
            <div className="flex flex-col gap-2 justify-center items-center" key={index}>
              <img src={item.logo} alt="" className="w-[160px] h-[160px]" />
              <div className={styles.buttonGame}>{item.name}</div>
            </div>
          ))}
        </div>
      );

    case 5:
      return (
        <div className="w-full grid grid-cols-6 gap-8">
          {listJiliCCgame.map((item, index) => (
            <div className="flex flex-col gap-2 justify-center items-center" key={index}>
              <img src={item.logo} alt="" className="w-[160px] h-[160px]" />
              <div className={styles.buttonGame}>{item.name}</div>
            </div>
          ))}
        </div>
      );

    default:
      return;
  }
}
