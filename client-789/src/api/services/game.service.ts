/* eslint-disable import/no-anonymous-default-export */
import Partner from "@/config/Partner";
import apiClient from "../apiClient";
import { SignInReq } from "../types/auth.interface";
import { ConfigGameEndPoint, ConfigAuthEndPoint } from "./contants";

const GameAvalible = ({
  category,
  game,
}: {
  category: string;
  game: string | null;
}) =>
  apiClient.get<any>({
    url: `${ConfigGameEndPoint.GETGAMELIST}?category=${category}&game=${game}`,
  });

const lauchgame = ({
  username,
  device,
  lang,
  gameid,
  gpid,
}: {
  username: string;
  device: string;
  lang: string;
  gameid: number;
  gpid: number;
}) =>
  apiClient.get<any>({
    url: `${ConfigGameEndPoint.LAUCHGAME}?username=${username}&device=${device}&lang=${lang}&gameid=${gameid}&gpid=${gpid}`,
  });

const lauchgameType2 = async ({
  supplier,
  device,
  lang,
  gameid,
  type,
  gpid,
}: {
  supplier: string;
  device: string;
  lang: string;
  gameid: number | string;
  gpid: number | string;
  type: number | string;
}) =>
  await apiClient.get<any>({
    url: `${ConfigGameEndPoint.LAUCHGAME}/${supplier}?&device=${device}&lang=${lang}&gameid=${gameid}&gpid=${gpid}&type=${type}`,
  });

const GameAvalibleV2 = async (data: {
  gpIds: string[];
  gameTypes: string[];
  maxRank?: number;
  partner?: string;
}) =>
  await apiClient.post<any>({
    url: ConfigGameEndPoint.GAME_AVALIBLE_NEW,
    data: {
      ...data,
      pn: data.partner ? data.partner : Partner.FE,
    },
  });

const GameAvalibleNewV2 = async (data: {
  gpIds: string[] | undefined;
  gameTypes: string[] | undefined;
  rankType?: "rank" | "rank_super" | "rank_hot" | "rank_new";
  pn: string | null;
  page?: number;
  limit?: number;
}) => {
  const res = await apiClient.post<any>({
    url: ConfigGameEndPoint.GAME_AVALIBLE_NEW_V2,
    data: {
      ...data,
      rankType: data?.rankType ? data?.rankType : "rank",
    },
  });
  return res?.data?.data;
};

const AddGameFavorite = async (gameId: number | string, partnerName: string) =>
  await apiClient.post<any>({
    url: ConfigGameEndPoint.FAVORITE_ADD,
    data: {
      gameId: gameId,
      partnerName: partnerName,
    },
  });
const ListGameFavorite = async () => {
  const res = await apiClient.get<any>({
    url: ConfigGameEndPoint.FAVORITE_LIST,
  });
  return res.data;
};

const DeleteGameFavorite = async (
  gameId: number | string,
  partnerName: string
) =>
  await apiClient.post<any>({
    url: ConfigGameEndPoint.FAVORITE_DELETE,
    data: {
      gameId: gameId,
      partnerName: partnerName,
    },
  });
export default {
  lauchgame,
  GameAvalible,
  lauchgameType2,
  GameAvalibleV2,
  GameAvalibleNewV2,
  AddGameFavorite,
  ListGameFavorite,
  DeleteGameFavorite,
};
