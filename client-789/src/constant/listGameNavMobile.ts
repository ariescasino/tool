import GameType from "@/config/GameType";
import Partner from "@/config/Partner";
import ProviderID from "@/config/ProviderID";

const listGameNavMobile = [
  {
    href: "/?kind=Sport",
    classIcon: "classIconTheThaoMobile",
    classIconActive: "classIconTheThaoMobileActive",
    label: "Thể thao",
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            label: "IM Thể Thao",
            icon: "/images/nav/thethao/im.png",
            game: {
              gameid: 0,
              gpid: ProviderID.IM,
              type: GameType.ESPORT,
              supplier: Partner.FE,
            },
          },
          {
            label: "SABA Thể Thao",
            icon: "/images/nav/thethao/saba.png",
            game: {
              gameid: 0,
              gpid: ProviderID.SABA,
              type: GameType.SPORT_BOOK,
              supplier: Partner.FE,
            },
          },
          {
            label: "CMD Thể Thao",
            icon: "/images/nav/thethao/cmd.png",
            game: {
              gameid: 0,
              gpid: ProviderID.CMD,
              type: GameType.SPORT_BOOK,
              supplier: Partner.FE,
            },
          },
          {
            label: "SBO Thể Thao",
            icon: "/images/nav/thethao/sbo.png",
            game: {
              gameid: 0,
              gpid: ProviderID.SBO,
              type: GameType.SPORT_BOOK,
              supplier: Partner.FE,
            },
          },
          {
            label: "UG Thể Thao",
            icon: "/images/nav/thethao/ug.png",
            game: {
              gameid: 0,
              gpid: ProviderID.UG,
              type: GameType.SB,
              supplier: Partner.MB,
            },
          },
          {
            label: "CR Thể Thao",
            icon: "/images/nav/thethao/cr.png",
            game: {
              gameid: 0,
              gpid: ProviderID.CR,
              type: GameType.SB,
              supplier: Partner.MB,
            },
          },
        ],
      },
    ],
    query: "Sport",
  },
  {
    href: "/?kind=Live",
    classIcon: "classIconCasinoMobile",
    classIconActive: "classIconCasinoMobileActive",
    label: "casino",
    query: "Live",
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            label: "WM Trực Tuyến",
            icon: "/images/nav/casino/wm.png",
            game: {
              gameid: 0,
              gpid: ProviderID.WMCasino,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },

          {
            label: "DG Trực Tuyến",
            icon: "/images/nav/casino/dg.png",
            game: {
              gameid: 0,
              gpid: ProviderID.DreamGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "SE Trực Tuyến",
            icon: "/images/nav/casino/se.png",
            game: {
              gameid: "MX-LIVE-001",
              gpid: ProviderID.SexyGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "MT Trực Tuyến",
            icon: "/images/nav/casino/mt.png",
            game: {
              gameid: 0,
              gpid: ProviderID.AsiaGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "AG Trực Tuyến",
            icon: "/images/nav/casino/ag.png",
            game: {
              gameid: 0,
              gpid: ProviderID.AsiaGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "EVO Trực Tuyến",
            icon: "/images/nav/casino/evo.png",
            game: {
              gameid: 0,
              gpid: ProviderID.EvolutionGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "SA Trực Tuyến",
            icon: "/images/nav/casino/sa.png",
            game: {
              gameid: 0,
              gpid: ProviderID.EvolutionGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "DB Trực Tuyến",
            icon: "/images/nav/casino/db.png",
            game: {
              gameid: 0,
              gpid: ProviderID.WMCasino,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "BG Trực Tuyến",
            icon: "/images/nav/casino/bg.png",
            game: {
              gameid: 0,
              gpid: ProviderID.EvolutionGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          {
            label: "TP Trực Tuyến",
            icon: "/images/nav/casino/tp.png",
            game: {
              gameid: 0,
              gpid: ProviderID.EvolutionGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },

          {
            label: "ON Trực Tuyến",
            icon: "/images/nav/casino/on.png",
            game: {
              gameid: "MX-LIVE-001",
              gpid: ProviderID.SexyGaming,
              type: GameType.LIVE_CASINO,
              supplier: Partner.FE,
            },
          },
          // {
          //   label: 'ASTAR Trực Tuyến',
          //   icon: '/images/nav/casino/astar.png',
          // },
        ],
      },
    ],
  },

  {
    href: "/lobby/game",
    label: "Nổ Hũ",
    classIcon: "classIconNoHuMobile",
    classIconActive: "classIconNoHuMobileActive",
  },
  {
    href: "/lobby/fish",
    classIcon: "classIconBanCaMobile",
    classIconActive: "classIconBanCaMobileActive",
    label: "bắn cá",
  },

  {
    href: "/lobby/board",
    classIcon: "classIconBai3DMobile",
    classIconActive: "classIconBai3DMobileActive",
    label: "game bài",
  },
  {
    href: "/?kind=Cockfighting",
    classIcon: "classIconDaGaMobile",
    classIconActive: "classIconDaGaMobileActive",
    label: "Đá gà",
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            label: "AOG Đá Gà",
            icon: "/images/nav/daga/aog_mb.png",
            game: {
              gameid: 0,
              gpid: ProviderID.WS168,
              type: GameType.OTHERS,
              supplier: Partner.FE,
            },
          },
          {
            label: "Ws168 Đá Gà",
            icon: "/images/nav/daga/ws.png",
            game: {
              gameid: 0,
              gpid: ProviderID.WS168,
              type: GameType.OTHERS,
              supplier: Partner.FE,
            },
          },
        ],
      },
    ],
    query: "Cockfighting",
  },

  {
    href: "/?kind=LiveGame",
    classIcon: "classIconLiveGameMobile",
    classIconActive: "classIconLiveGameMobileActive",
    label: "Live Game",
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            href: "/game-1",
            label: "MT ĐUA BI",
            icon: "/images/nav/livegame/mt_mobile.png",
            link: "portfolio=SeamlessGame&gameid=1&gpid=1070",
            type: "LobbyType2",
          },
          {
            label: "ĐANG CẬP NHẬT",
            icon: "/images/nav/livegame/update_mobile.png",
          },
        ],
      },
    ],
    query: "LiveGame",
  },
  {
    href: "/?kind=Lottery",
    classIcon: "classIconXoSoMobile",
    classIconActive: "classIconXoSoMobileActive",
    label: "Xổ Số",
    subItems: [
      {
        label: "Dòng 1",
        items: [
          {
            label: "GW Xổ Số",
            icon: "/images/nav/xoso/gw.png",
            link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
            type: "LobbyType2",
          },
          {
            label: "VR Xổ Số",
            icon: "/images/nav/xoso/vr.png",
            link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
            type: "LobbyType2",
          },
          {
            label: "TP Xổ Số",
            icon: "/images/nav/xoso/tp.png",
            link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
            type: "LobbyType2",
          },
          // {
          //   label: "SW Xổ Số",
          //   icon: "/images/nav/xoso/sw.png",
          //   link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
          //   type: "LobbyType2",
          // },
          {
            label: "Xổ Số Miền Bắc",
            icon: "/images/nav/xoso/mienbac.png",
            link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
            type: "LobbyType2",
          },
          {
            label: "Xổ Số Miền Trung",
            icon: "/images/nav/xoso/mientrung.png",
            link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
            type: "LobbyType2",
          },
          {
            label: "Xổ Số Miền Nam",
            icon: "/images/nav/xoso/miennam.png",
            link: "portfolio=SeamlessGame&gameid=3&gpid=1049",
            type: "LobbyType2",
          },
        ],
      },
    ],
    query: "Lottery",
  },
];

export default listGameNavMobile;
