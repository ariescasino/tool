import Partner from "@/config/Partner";
import ProviderID from "@/config/ProviderID";

export interface GameMobileData {
  id: number;
  name: string;
  gpIds: string[];
  partner?: string;
  img: string;
  hot?: boolean;
  event?: boolean;
}

export const dataGameNoHu: GameMobileData[] = [
  {
    id: 0,
    name: "Giới thiệu Điện Tử",
    gpIds: [
      `${ProviderID.AsiaGaming}`,
      `${ProviderID.PragmaticPlay}`,
      `${ProviderID.CQ9}`,
      `${ProviderID.PlayTech}`,
      `${ProviderID.JDB}`,
      `${ProviderID.Jili}`,
      `${ProviderID.KAGaming}`,
      `${ProviderID.NextSpin}`,
      `${ProviderID.Fachai}`,
      `${ProviderID.Live22}`,
      `${ProviderID.EvoPlay}`,
      `${ProviderID.PlayStar}`,
    ],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/RecommendGame.png",
  },
  {
    id: 1,
    name: "PG Điện Tử",
    gpIds: [`${ProviderID.PGSoft}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/pg.png",
  },
  {
    id: 2,
    name: "JILI Điện Tử",
    gpIds: [`${ProviderID.Jili}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/jili.png",
    hot: true,
  },
  {
    id: 3,
    name: "TP Điện Tử",
    gpIds: [`${ProviderID.PlayTech}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/tp.png",
    hot: true,
    event: true,
  },
  {
    id: 4,
    name: "Fc Điện Tử",
    gpIds: [`${ProviderID.Fachai}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/fc.png",
    hot: true,
    event: true,
  },
  {
    id: 5,
    name: "CQ9 Điện Tử",
    gpIds: [`${ProviderID.CQ9}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/cq9.png",
  },
  {
    id: 6,
    name: "PP Điện Tử",
    gpIds: [`${ProviderID.PragmaticPlay}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/pp.png",
    event: true,
  },
  {
    id: 7,
    name: "JDB Điện Tử",
    gpIds: [`${ProviderID.JDB}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/jdb.png",
  },
  {
    id: 9,
    name: "MG Điện Tử",
    gpIds: [`${ProviderID.MP}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/mg.png",
    partner: Partner.MB,
    event: true,
  },
  {
    id: 10,
    name: "Spribe Điện Tử",
    gpIds: [`${ProviderID.PlayTech}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/spribe.png",
  },
  {
    id: 12,
    name: "KA Điện Tử",
    gpIds: [`${ProviderID.KAGaming}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ka.png",
  },
  {
    id: 14,
    name: "R88 Điện Tử",
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/r88.png",
    gpIds: [`${ProviderID.R88}`],
    partner: Partner.MB,
  },
  {
    id: 21,
    name: "YGR Điện Tử",
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ygr.png",
    gpIds: [`${ProviderID.YesGetRich}`],
    partner: Partner.MB,
  },
  {
    id: 17,
    name: "NS Điện Tử",
    gpIds: ["1116"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ns.png",
  },
  {
    id: 8,
    name: "VA Điện Tử",
    gpIds: ["1116"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/va.png",
  },
 
  {
    id: 11,
    name: "AFB Điện Tử",
    // gpIds: [`${ProviderID.AFB}`],
    gpIds: ["1116"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/afb.png",
  },

  {
    id: 13,
    name: "BNG Điện Tử",
    // gpIds: ["1025"],
    gpIds: ["1116"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/bng.png",
  },

  {
    id: 15,
    name: "PT Điện Tử",
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/pt.png",
    // gpIds: ["1025"],
    gpIds: ["1116"],

  },
  {
    id: 16,
    name: "FTG Điện Tử",
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ftg.png",
    // gpIds: [`${ProviderID.FTG}`],
    gpIds: [`${ProviderID.PGSoft}`],

  },

  {
    id: 18,
    name: "MW Điện Tử",
    gpIds: [`${ProviderID.PGSoft}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/mw.png",
    event: true,
  },
  {
    id: 19,
    name: "YB Điện Tử",
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/yb.png",
    // gpIds: [`${ProviderID.YB}`],
    gpIds: ["1116"],
    event: true,
  },
  {
    id: 20,
    name: "Askme Điện Tử",
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/askme.png",
    // gpIds: [`${ProviderID.Askme}`],
    gpIds: ["1116"],

  },

  // {
  //   id: 12,
  //   name: "PS Điện Tử",
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ps.png",
  //   gpIds: [`${ProviderID.PlayStar}`],
  // },
  // {
  //   id: 16,
  //   name: "GEM Điện Tử",
  //   gpIds: [],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/gem.png",
  // },

  // {
  //   id: 17,
  //   name: "T1 Điện Tử",
  //   gpIds: [`${ProviderID.T1Gaming}`],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/t1.png",
  //   partner: Partner.MB,
  // },

  // {
  //   id: 20,
  //   name: "EvoPlay Điện Tử",
  //   gpIds: [`${ProviderID.EvoPlay}`],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/evoplay.png",
  // },
  // {
  //   id: 21,
  //   name: "Live22 Điện Tử",
  //   gpIds: [`${ProviderID.Live22}`],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/live22.png",
  // },
];

export const dataBacaratMobile: GameMobileData[] = [
  // {
  //   id: 0,
  //   name: "Giới thiệu Điện Tử",
  //   gpIds: [`${ProviderID.V8}`],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/RecommendGame.png",
  //   partner: Partner.MB,
  // },

  {
    id: 1,
    name: "R88 Game Bài 3d",
    gpIds: ["1026"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons_ncc/r88.png",
  },
  {
    id: 2,
    name: "V8 Game Bài 3d",
    gpIds: [`${ProviderID.V8}`],
    partner: Partner.MB,
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons_ncc/v8_new.png",
  },
  {
    id: 3,
    name: "KM Game Bài 3d",
    gpIds: ["1033"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons_ncc/km.png",
  },
  {
    id: 4,
    name: "JILI Game Bài 3d",
    gpIds: ["1020"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons_ncc/jili.png",
  },
  {
    id: 5,
    name: "TP Game Bài 3d",
    gpIds: ["4"],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons_ncc/tp.png",
  },
  // {
  //   id: 6,
  //   name: "MG Game Bài 3d",
  //   gpIds: ["29"],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/icons_ncc/mg.png",
  // },
];

export const dataFishMobile: GameMobileData[] = [
  {
    id: 0,
    name: "JILI Bắn Cá",
    gpIds: [`${ProviderID.Jili}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/jili.png",
  },
  {
    id: 2,
    name: "Fc Bắn Cá",
    gpIds: [`${ProviderID.Fachai}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/fc.png",
  },
  {
    id: 3,
    name: "JDB Bắn Cá",
    gpIds: [`${ProviderID.JDB}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/jdb.png",
  },
  {
    id: 4,
    name: "CQ9 Bắn Cá",
    gpIds: [`${ProviderID.CQ9}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/cq9.png",
  },
  {
    id: 8,
    name: "MG Bắn Cá",
    gpIds: [`${ProviderID.MP}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/mg.png",
    partner: Partner.MB,
  },
  {
    id: 5,
    name: "BG Bắn Cá",
    // gpIds: [`${ProviderID.BigGame}`],
    gpIds: [`${ProviderID.MP}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/bg.png",
    partner: Partner.MB,
  },
  {
    id: 1,
    name: "TP Bắn Cá",
    // gpIds: [`${ProviderID.PlayTech}`],
    gpIds: [`${ProviderID.Fachai}`],

    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/tp.png",
  },
  {
    id: 6,
    name: "FTG Bắn Cá",
    // gpIds: [`${ProviderID.FTG}`],
    gpIds: [`${ProviderID.Fachai}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ftg.png",
  },
  {
    id: 7,
    name: "KA Bắn Cá",
    // gpIds: [`${ProviderID.KAGaming}`],
    gpIds: [`${ProviderID.Fachai}`],
    img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ka.png",
  },
  // {
  //   id: 6,
  //   name: "R88 Bắn Cá",
  //   gpIds: [],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/r88.png",
  // },
  // {
  //   id: 7,
  //   name: "MG Bắn Cá",
  //   gpIds: [`${ProviderID.MP}`],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/mg.png",
  //   partner: Partner.MB,
  // },
  // {
  //   id: 8,
  //   name: "BSP Bắn Cá",
  //   gpIds: [],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/bsp.png",
  // },
  // {
  //   id: 9,
  //   name: "NS Bắn Cá",
  //   gpIds: [`${ProviderID.NextSpin}`],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ns.png",
  // },
  // {
  //   id: 10,
  //   name: "VA Bắn Cá",
  //   gpIds: [],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/va.png",
  // },
  // {
  //   id: 11,
  //   name: "YGR Bắn Cá",
  //   gpIds: [],
  //   img: "https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/logo-ncc/ygr.png",
  // },
];
