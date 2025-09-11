import GameType from "@/config/GameType";
import Partner from "@/config/Partner";
import ProviderID from "@/config/ProviderID";
import gameName from "@/constant/gameName";

const menuItems = [
  {
    href: "/lobby/sport",
    classIcon: "classIconTheThao",
    classIconActive: "classIconTheThaoActive",
    label: "Thể thao",
    totalItemInline: 4,
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/saba.png",
            link: `/games/SportGame/${gameName.SABA}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/sport.png",
            link: `/games/SportGame/${gameName.IM}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/cmd368.png",
            link: `/games/SportGame/${gameName.CMD}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/sbo.png",
            link: `/games/SportGame/${gameName.SBO}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/ug.png",
            link: `/games/SportGame/${gameName.UG}`,
          },

          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/cs.png",
            link: `/games/SportGame/${gameName.CR}`,
          },
        ],
      },
    ],
  },
  {
    href: "/lobby/casino",
    classIcon: "classIconCasino",
    classIconActive: "classIconCasinoActive",
    label: "casino",
    totalItemInline: 4,
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/wm.png",
            link: `/games/CasinoGame/${gameName.WM}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/dg.png",
            link: `/games/CasinoGame/${gameName.DG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/sexy.png",
            link: `/games/CasinoGame/${gameName.SE}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/mat.png",
            // link: `/games/CasinoGame/${gameName.MT}`,
            link: `/games/CasinoGame/${gameName.SE}`,

          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/ag.png",
            link: `/games/CasinoGame/${gameName.AG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/evo.png",
            link: `/games/CasinoGame/${gameName.EVO}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/sa.png",
            // link: `/games/CasinoGame/${gameName.SA}`,
            link: `/games/CasinoGame/${gameName.AG}`,

          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/db.png",
            link: `/games/CasinoGame/${gameName.DB}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/bg.png",
            link: `/games/CasinoGame/${gameName.BG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/tp.png",
            // link: `/games/CasinoGame/${gameName.TP}`,
            link: `/games/CasinoGame/${gameName.BG}`,

          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/on.png",
            link: `/games/CasinoGame/${gameName.ON}`,
          },
          // {
          //   icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/astar.png",
          // },
        ],
      },
    ],
  },

  {
    href: "/lobby/game",
    label: "Trò chơi",
    classIcon: "classIconNoHu",
    classIconActive: "classIconNoHuActive",
    totalItemInline: 5,
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/pg.png",
            link: `/games/SlotCasino/${gameName.PG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/jili.png",
            link: `/games/SlotCasino/${gameName.Jili}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/tp.png",
            link: `/games/SlotCasino/${gameName.TP}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/fc.png",
            link: `/games/SlotCasino/${gameName.FC}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/cq9.png",
            promotion: true,
            link: `/games/SlotCasino/${gameName.CQ9}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/pp.png",
            link: `/games/SlotCasino/${gameName.PP}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/jdb.png",
            link: `/games/SlotCasino/${gameName.JDB}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/va.png",
            link: `/games/SlotCasino/${gameName.VA}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/mg.png",
            link: `/games/SlotCasino/${gameName.MG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/spribe.png",
            link: `/games/SlotCasino/${gameName.SPRIBE}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/afb.png",
            link: `/games/SlotCasino/${gameName.AFB}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/ka.png",
            link: `/games/SlotCasino/${gameName.KA}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/bng.png",
            link: `/games/SlotCasino/${gameName.BNG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/r88.png",
            link: `/games/SlotCasino/${gameName.R88}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/pt.png",
            link: `/games/SlotCasino/${gameName.PT}`,
          },
          // {
          //   icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/haba.png",
          //   link: "/games/SlotCasino/HB",
          // },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/fg.png",
            link: `/games/SlotCasino/${gameName.FTG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/next.png",
            link: `/games/SlotCasino/${gameName.NS}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/mega.png",
            link: `/games/SlotCasino/${gameName.MW}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/yb.png",
            link: `/games/SlotCasino/${gameName.YB}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/askme.png",
            link: `/games/SlotCasino/${gameName.ASKME}`,
          },
          {
            icon: "/images/new-logo-ncc/ygr.png",
            link: `/games/SlotCasino/${gameName.YGR}`,
          },
          {
            icon: "/images/new-logo-ncc/saw.png",
            link: `/games/SlotCasino/${gameName.hacksaw}`,
          },
        ],
      },
    ],
  },
  {
    href: "/lobby/fish",
    classIcon: "classIconBanCa",
    classIconActive: "classIconBanCaActive",
    label: "bắn Cá",
    totalItemInline: 5,
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/jili.png",
            link: `/games/FishGame/${gameName.Jili}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/tp.png",
            link: `/games/FishGame/${gameName.TP}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/fc.png",
            link: `/games/FishGame/${gameName.FC}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/jdb.png",
            link: `/games/FishGame/${gameName.JDB}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/cq9.png",
            link: `/games/FishGame/${gameName.CQ9}`,
            promotion: true,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/bg.png",
            link: `/games/FishGame/${gameName.BG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/fg.png",
            link: `/games/FishGame/${gameName.FTG}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/ka.png",
            link: `/games/FishGame/${gameName.KA}`,
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/ygr.png",
            link: `/games/FishGame/${gameName.YGR}`,
          },
          // {
          //   icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/r88.png",
          //   link: "/games/FishGame/R88",
          // },
        ],
      },
    ],
  },

  {
    href: "/lobby/board",
    classIcon: "classIconBai3D",
    classIconActive: "classIconBai3DActive",
    label: "game bài",
    totalItemInline: 4,
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            label: "R88 Game Bài 3d",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/r88.png",
            link: `/games/CardGame/${gameName.R88}`,
          },
          {
            label: "V8 Game Bài 3d",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/v8.png",
            link: `/games/CardGame/${gameName.V8}`,
          },
          {
            label: "KM Game Bài 3d",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/km.png",
            link: `/games/CardGame/${gameName.KM}`,
          },
          {
            label: "JILI Game Bài 3d",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/jili.png",
            link: `/games/CardGame/${gameName.Jili}`,
          },
          // {
          //   label: "FG Game Bài 3d",
          //   icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/fg.png",
          //   link: "/games/BoardCasino/FTG",
          // },
          {
            label: "TP Game Bài 3d",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/tp.png",
            link: `/games/CardGame/${gameName.TPCARD}`,
          },
          // {
          //   label: "RTG Game Bài 3d",
          //   icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/rtg.png",
          //   link: "/games/BoardCasino/RTG",
          // },
        ],
      },
    ],
  },
  {
    href: "/lobby/cock-fighting",
    classIcon: "classIconDaGa",
    classIconActive: "classIconDaGaActive",
    label: "Đá gà",
    totalItemInline: 2,
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            label: "Ws168 Đá Gà",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/nav/daga/aog.png",
            link: `/games/CockFighting/${gameName.WS168}`
          },

          {
            label: "Ws168 Đá Gà",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/ws168.png",
            link: `/games/CockFighting/${gameName.WS168}`
          },
        ],
      },
    ],
  },
  {
    href: "/lobby/lottery",
    classIcon: "classIconXoSo",
    classIconActive: "classIconXoSoActive",
    totalItemInline: 3,
    label: "Xổ Số",
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            label: "TP Xổ Số",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/gw.png",
            link: `/games/LotteryGame/${gameName.TP}`
          },
          {
            label: "VR Xổ Số",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/vr.png",
            link: `/games/LotteryGame/${gameName.VR}`
          },
          {
            label: "GW Xổ Số",
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/tp.png",
            link: `/games/LotteryGame/${gameName.GW}`
          },
          // {
          //   label: "SW Xổ Số",
          //   icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/new-logo-ncc/ww.png",
          //   link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
          //   type: "LobbyType2",
          // },
          // {
          //   label: "",
          //   icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/nav/xoso/new.png",
          // },
        ],
      },
    ],
  },
  {
    href: "/lobby/live-game",
    classIcon: "classIconLiveGame",
    classIconActive: "classIconLiveGameActive",
    totalItemInline: 2,
    label: "Live Game",
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/nav/livegame/mt_nav.png",
            type: "LobbyType2",
          },
          {
            icon: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/nav/livegame/updating.png",
            updateItem: true,
          },
        ],
      },
    ],
  },
  {
    href: "/lobby/promotion",
    classIcon: "classIconKM",
    classIconActive: "classIconKMActive",
    label: "Khuyến mãi",
  },
  {
    href: "/download",
    classIcon: "classIconApp",
    classIconActive: "classIconAppActive",
    label: "Tải app",
    newTabs: true,
  },
  {
    href: "/daily",
    label: "Đại lý",
    classIcon: "classIconDL",
    classIconActive: "classIconDLActive",
    newTabs: true,
  },
];

export default menuItems;
