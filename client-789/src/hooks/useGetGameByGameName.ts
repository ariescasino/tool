import gameService from "@/api/services/game.service";

import GameType from "@/config/GameType";
import Partner from "@/config/Partner";
import ProviderID from "@/config/ProviderID";
import gameName from "@/constant/gameName";
import useLaunchGameDevice from "./useLaunchGameDevice";
import { useQuery } from "@tanstack/react-query";

const listOptionsGameSlot = {
  all: "all",
  hot: "hot",
  new: "new",
  elec: "elec",
  fish: "fish",
  noi: "noi",
  other: "other",
  casino: "casino",
  undetermined: "undetermined",
  introduce: "introduce",
  entertainment: "entertainment",
  viewed: "viewed",
  co: "co",
};

//rankType=0: mặc định trò chơi đề xuất
//rankType=1: giới thiệu
//rankType=2: trò chơi hot nhất
//rankType=3: trò chơi khác

export const OptionsSlotGame = {
  all: { value: listOptionsGameSlot.all, title: "Tất Cả Các Trò Chơi", typeRank: "rank" },
  hot: { value: listOptionsGameSlot.hot, title: "Trò Chơi Hot Nhất", typeRank: "rank_hot" },
  new: { value: listOptionsGameSlot.new, title: "Trò Chơi Mới Nhất", typeRank: "rank_new" },
  elec: { value: listOptionsGameSlot.elec, title: "Trò Chơi Điện Tử", typeRank: "rank" },
  introduce: {
    value: listOptionsGameSlot.introduce,
    title: "Giới Thiệu Trò Chơi",
    typeRank: "rank_super",
  },
  entertainment: {
    value: listOptionsGameSlot.entertainment,
    title: "Giải Trí",
    typeRank: "rank_super",
  },
  viewed: { value: listOptionsGameSlot.viewed, title: "Đã Xem Gần Đây", typeRank: "rank_hot" },
  fish: {
    value: listOptionsGameSlot.fish,
    title: "Chuyên Gia Bắn Cá",
    typeRank: "rank",
    typeGame: "fish",
  },
  noi: { value: listOptionsGameSlot.noi, title: "Trò Chơi Nồi", typeRank: "rank" },
  other: { value: listOptionsGameSlot.other, title: "Trò Chơi Khác", typeRank: "rank" },
  casino: {
    value: listOptionsGameSlot.casino,
    title: "Casino Live",
    typeRank: "rank",
    typeGame: "live",
  },
  undetermined: {
    value: listOptionsGameSlot.undetermined,
    title: "Khu Vực Công Bố Phơi Bày",
    typeRank: "rank",
  },
  co: {
    value: listOptionsGameSlot.co,
    title: "Trò Chơi Cờ",
    typeRank: "rank",
  },
};

const getValueSportGame = (nameOfGame: string) => {
  let gameType;
  let providerID;
  let partner;
  let gameID;
  switch (nameOfGame) {
    case gameName.IM:
      gameType = GameType.SB;
      providerID = ProviderID.Panda;
      partner = Partner.MB;
      gameID = 0;
      break;

    case gameName.SBO:
      gameType = GameType.SPORT_BOOK;
      providerID = ProviderID.SBO;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.CR:
      gameType = GameType.SB;
      providerID = ProviderID.CR;
      partner = Partner.MB;
      gameID = 0;
      break;

    case gameName.CMD:
      gameType = GameType.SPORT_BOOK;
      providerID = ProviderID.CMD;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.SABA:
      gameType = GameType.SPORT_BOOK;
      providerID = ProviderID.SABA;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.UG:
      gameType = GameType.SB;
      providerID = ProviderID.UG;
      partner = Partner.MB;
      gameID = 0;
      break;

    default:
      break;
  }

  return {
    gameType,
    providerID,
    partner,
    gameID,
  };
};

export const getValueCasinoGame = (nameOfGame: string) => {
  let gameType;
  let providerID;
  let partner;
  let gameID;
  switch (nameOfGame) {
    case gameName.AG:
      gameType = GameType.LIVE_CASINO;
      providerID = ProviderID.AsiaGaming;
      partner = Partner.FE;
      gameID = 1;
      break;

    case gameName.BG:
      gameType = GameType.LIVE_CASINO;
      providerID = ProviderID.BigGame;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.DB:
      gameType = "";
      providerID = "";
      partner = "";
      gameID = 0;
      break;

    case gameName.DG:
      gameType = GameType.LIVE_CASINO;
      providerID = ProviderID.DreamGaming;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.EVO:
      gameType = GameType.LIVE_CASINO;
      providerID = ProviderID.EvolutionGaming;
      partner = Partner.FE;
      gameID = 2;
      break;

    case gameName.MG:
      gameType = "";
      providerID = "";
      partner = "";
      gameID = 0;
      break;

    case gameName.MT:
      gameType = "";
      providerID = "";
      partner = "";
      gameID = 0;
      break;

    case gameName.ON:
      gameType = GameType.LC;
      providerID = ProviderID.OnCasino;
      partner = Partner.MB;
      gameID = 0;
      break;

    case gameName.PT:
      gameType = GameType.LIVE_CASINO;
      providerID = ProviderID.PlayTech;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.SA:
      gameType = "";
      providerID = "";
      partner = "";
      gameID = 0;
      break;

    case gameName.SE:
      gameType = GameType.LIVE_CASINO;
      providerID = ProviderID.SexyGaming;
      partner = Partner.FE;
      gameID = "MX-LIVE-001";
      break;

    case gameName.TP:
      gameType = "";
      providerID = "";
      partner = "";
      gameID = 0;
      break;

    case gameName.WM:
      gameType = GameType.LIVE_CASINO;
      providerID = ProviderID.WMCasino;
      partner = Partner.FE;
      gameID = 0;
      break;
  }

  return {
    gameType,
    providerID,
    partner,
    gameID,
  };
};

export const getValueSlotGame = (nameOfGame: string) => {
  const gameConfig = {
    [gameName.PG]: {
      gpIds: [`${ProviderID.PGSoft}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      GameType: GameType.SLOT,
      partner: Partner.FE,
    },
    [gameName.ASKME]: {
      gpIds: [`${ProviderID.Askme}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      GameType: GameType.SLOT,
      partner: Partner.FE,
    },
    [gameName.PT]: {
      gpIds: [`${ProviderID.PlayTech}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      GameType: GameType.SLOT,
      partner: Partner.FE,
    },
    [gameName.FTG]: {
      gpIds: [`${ProviderID.FTG}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      GameType: GameType.SLOT,
      partner: Partner.FE,
    },
    [gameName.TP]: {
      gpIds: [`${ProviderID.TP}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.casino,
        OptionsSlotGame.introduce,
        OptionsSlotGame.other,
        OptionsSlotGame.undetermined,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.AFB]: {
      gpIds: [`${ProviderID.AFB}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.casino,
        OptionsSlotGame.introduce,
        OptionsSlotGame.other,
        OptionsSlotGame.undetermined,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.FC]: {
      gpIds: [`${ProviderID.Fachai}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.fish,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.CQ9]: {
      gpIds: [`${ProviderID.CQ9}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.entertainment,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.PP]: {
      gpIds: [`${ProviderID.PragmaticPlay}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.MG]: {
      gpIds: [`${ProviderID.Microgaming}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.fish,
        OptionsSlotGame.entertainment,
        OptionsSlotGame.other,
      ],
      GameType: GameType.SL,
      partner: Partner.MB,
    },
    [gameName.JDB]: {
      gpIds: [`${ProviderID.JDB}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.fish,
        OptionsSlotGame.entertainment,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.BNG]: {
      gpIds: [``],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.VA]: {
      gpIds: [``],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.fish,
        OptionsSlotGame.introduce,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.KA]: {
      gpIds: [`${ProviderID.KAGaming}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.fish,
        OptionsSlotGame.viewed,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.R88]: {
      gpIds: [`${ProviderID.R88}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.elec,
        OptionsSlotGame.fish,
        OptionsSlotGame.other,
      ],
      partner: Partner.MB,
      GameType: GameType.SL,
    },
    [gameName.SPRIBE]: {
      gpIds: [``],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.NS]: {
      gpIds: [`${ProviderID.NextSpin}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.introduce,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.MW]: {
      gpIds: [``],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.YGR]: {
      gpIds: [`${ProviderID.YesGetRich}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.other,
      ],
      partner: Partner.MB,
      GameType: GameType.SL,
    },
    [gameName.Jili]: {
      gpIds: [`${ProviderID.Jili}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.noi,
        OptionsSlotGame.fish,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
    [gameName.YB]: {
      gpIds: [`${ProviderID.YB}`],
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.elec,
        OptionsSlotGame.noi,
        OptionsSlotGame.fish,
        OptionsSlotGame.other,
      ],
      partner: Partner.FE,
      GameType: GameType.SLOT,
    },
  };

  return (
    gameConfig[nameOfGame] || {
      gameTypes: undefined,
      gpIds: undefined,
      listGameOption: [],
      GameType: null,
      partner: null,
    }
  );
};

export const getValueFishGame = (nameOfGame: string) => {
  const gameConfig = {
    [gameName.Jili]: {
      gpIds: [`${ProviderID.Jili}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.TP]: {
      gpIds: [`${ProviderID.TP}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.new,
        OptionsSlotGame.fish,
        OptionsSlotGame.other,
      ],
    },
    [gameName.JDB]: {
      gpIds: [`${ProviderID.JDB}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.FC]: {
      gpIds: [`${ProviderID.Fachai}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.CQ9]: {
      gpIds: [`${ProviderID.CQ9}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.KA]: {
      gpIds: [`${ProviderID.KAGaming}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.new,
        OptionsSlotGame.fish,
        OptionsSlotGame.other,
      ],
    },
    [gameName.MG]: {
      gpIds: [`${ProviderID.Microgaming}`],
      partner: Partner.MB,
      GameType: GameType.FH,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.VA]: {
      gpIds: [``],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.BG]: {
      gpIds: [``],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.FTG]: {
      gpIds: [`${ProviderID.FTG}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
    [gameName.YGR]: {
      gpIds: [`${ProviderID.YGR}`],
      partner: Partner.FE,
      GameType: GameType.FISHING,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.fish, OptionsSlotGame.other],
    },
  };

  return (
    gameConfig[nameOfGame] || {
      gameTypes: undefined,
      gpIds: undefined,
      partner: null,
      GameType: null,
    }
  );
};

export const getValueCardGame = (nameOfGame: string) => {
  const gameConfig = {
    [gameName.KM]: {
      gpIds: [`${ProviderID.KingMidas}`],
      partner: Partner.MB,
      GameType: GameType.CB,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.co, OptionsSlotGame.other],
    },
    [gameName.R88]: {
      gpIds: [`${ProviderID.R88}`],
      partner: Partner.MB,
      GameType: GameType.CB,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.co, OptionsSlotGame.other],
    },
    [gameName.V8]: {
      gpIds: [`${ProviderID.V8}`],
      partner: Partner.MB,
      GameType: GameType.CB,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.co, OptionsSlotGame.other],
    },
    [gameName.Jili]: {
      gpIds: [`${ProviderID.Jili}`],
      partner: Partner.MB,
      GameType: GameType.CB,
      listGameOption: [OptionsSlotGame.hot, OptionsSlotGame.co, OptionsSlotGame.other],
    },
    [gameName.TP]: {
      gpIds: [`${ProviderID.TP}`],
      partner: Partner.MB,
      GameType: GameType.CB,
      listGameOption: [
        OptionsSlotGame.hot,
        OptionsSlotGame.all,
        OptionsSlotGame.new,
        OptionsSlotGame.co,
      ],
    },
  };

  return (
    gameConfig[nameOfGame] || {
      gameTypes: undefined,
      gpIds: undefined,
      partner: null,
      GameType: undefined,
    }
  );
};

export const getValueCockGame = (nameOfGame: string) => {
  let gameType;
  let providerID;
  let partner;
  let gameID;
  switch (nameOfGame) {
    case gameName.AOG:
      gameType = GameType.OTHERS;
      providerID = ProviderID.WS168;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.WS168:
      gameType = GameType.OTHERS;
      providerID = ProviderID.WS168;
      partner = Partner.FE;
      gameID = 0;
      break;

    default:
      break;
  }

  return {
    gameType,
    providerID,
    partner,
    gameID,
  };
};

export const getValueLoteryGame = (nameOfGame: string) => {
  let gameType;
  let providerID;
  let partner;
  let gameID;
  switch (nameOfGame) {
    case gameName.TP:
      gameType = GameType.LOTTERY;
      providerID = ProviderID.TP;
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.VR:
      gameType = GameType.LOTTERY;
      providerID = "";
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.GW:
      gameType = GameType.LOTTERY;
      providerID = "";
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.SW:
      gameType = GameType.LOTTERY;
      providerID = "";
      partner = Partner.FE;
      gameID = 0;
      break;

    case gameName.TCG:
      gameType = GameType.LOTTERY;
      providerID = "";
      partner = Partner.FE;
      gameID = 0;
      break;

    default:
      break;
  }

  return {
    gameType,
    providerID,
    partner,
    gameID,
  };
};

export const useGetIframeGameByGameName = (gameName: string, typeGame: string) => {
  let gT: string | number | undefined;
  let pID: string | number | undefined;
  let p: string | undefined;
  let gID: string | number | undefined;
  if (typeGame === "sport") {
    const { gameType, providerID, partner, gameID } = getValueSportGame(gameName);
    gT = gameType;
    pID = providerID;
    p = partner;
    gID = gameID;
  } else if (typeGame === "casino") {
    const { gameType, providerID, partner, gameID } = getValueCasinoGame(gameName);
    gT = gameType;
    pID = providerID;
    p = partner;
    gID = gameID;
  } else if (typeGame === "cockFigting") {
    const { gameType, providerID, partner, gameID } = getValueCockGame(gameName);
    gT = gameType;
    pID = providerID;
    p = partner;
    gID = gameID;
  } else if (typeGame === "lottery") {
    const { gameType, providerID, partner, gameID } = getValueLoteryGame(gameName);
    gT = gameType;
    pID = providerID;
    p = partner;
    gID = gameID;
  }
  const deviceC = useLaunchGameDevice();
  const queryKey = ["gameName", gameName];
  const queryFn = async () => {
    const data = await gameService.lauchgameType2({
      device: deviceC || "",
      gameid: gID || 0,
      gpid: pID || "",
      type: gT || "",
      supplier: p || "",
      lang: "en",
    });
    return data?.data;
  };

  const {
    data: dataGame,
    isLoading,
    isFetching,
    refetch,
    isError,
    status,
  } = useQuery({
    queryKey,
    queryFn,
  });

  return {
    dataGame,
    isLoading,
    isFetching,
    refetch,
    status,
    isError,
  };
};

export const useGetGameAvalibleNewV2ByGameName = ({
  querykey,
  gameName,
  rankType,
  typeGame,
}: {
  querykey: string;
  gameName: string;
  rankType: "rank" | "rank_super" | "rank_hot" | "rank_new";
  typeGame: string;
}) => {
  let gameTypes: string[] | undefined;
  let gpIds: string[] | undefined;
  let pn: string | null;
  if (typeGame === "slot") {
    const { gpIds: GPID, partner, GameType: gt } = getValueSlotGame(gameName);
    gameTypes = [`${gt}`];
    gpIds = GPID;
    pn = partner;
  } else if (typeGame === "fish") {
    const { gpIds: GPID, partner, GameType: gt } = getValueFishGame(gameName);
    gameTypes = [`${gt}`];
    gpIds = GPID;
    pn = partner;
  } else if (typeGame === "card") {
    const { gpIds: GPID, partner, GameType: gt } = getValueCardGame(gameName);
    gameTypes = [`${gt}`];
    gpIds = GPID;
    pn = partner;
  }

  const { data, isLoading, isFetching, refetch, isError } = useQuery({
    queryKey: [querykey],
    queryFn: () =>
      gameService.GameAvalibleNewV2({
        gpIds: gpIds,
        gameTypes: gameTypes,
        rankType: rankType,
        pn: pn,
      }),
  });

  return { data, isLoading, isFetching, refetch, isError };
};

export const useGetGameIntroduction = ({ type }: { type: any[] }) => {
  const { data, isLoading, isFetching, refetch, isError } = useQuery({
    queryKey: [`${type}-game-introduct`],
    queryFn: () =>
      gameService.GameAvalibleNewV2({
        gpIds: [],
        gameTypes: type.map(String) || [],
        rankType: "rank_hot",
        pn: null,
        limit: 15,
        page: 1,
      }),
  });

  return { data, isLoading, isFetching, refetch, isError };
};

export const useGetDataRecommend = ({ gameTypes }: { gameTypes: any[] }) => {
  const { data, isLoading, isFetching, refetch, isError } = useQuery({
    queryKey: [`${gameTypes}-game-recommend`],
    queryFn: () =>
      gameService.GameAvalibleNewV2({
        gpIds: [],
        gameTypes: gameTypes.map(String) || [],
        rankType: "rank_super",
        pn: null,
        limit: 999,
        page: 1,
      }),
  });

  return { data, isLoading, isFetching, refetch, isError };
};
