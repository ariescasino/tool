/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import axios from "axios";
import { IItemGameFavorite } from "@/interface/game.interface";
import { useUser } from "./useUserContext";
import gameService from "@/api/services/game.service";
import { useDebounce, useEffectOnce } from "react-use";
import { usePathname } from "next/navigation";
import { getTokenFromLocalStorage } from "@/lib/storage/tokenStorage";

// Định nghĩa kiểu dữ liệu cho Context
type FavoriteContextType = {
  favoriteGames: IItemGameFavorite[];
  setFavoriteGames: (games: IItemGameFavorite[]) => void;
  changeListGameFavorite: (gameId: string, partnerName: string) => void;
  fetchFavoriteGames: () => Promise<void>;
};

const FavoriteGameContext = createContext<FavoriteContextType>({
  favoriteGames: [],
  setFavoriteGames: () => { },
  changeListGameFavorite: () => { },
  fetchFavoriteGames: async () => { },
});

export const FavoriteGameProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteGames, setFavoriteGames] = useState<IItemGameFavorite[]>([]);
  const { user } = useUser();
  const pathname = usePathname();

  const fetchFavoriteGames = async () => {
    const token = await getTokenFromLocalStorage();
    if (token) {
      try {
        await gameService.ListGameFavorite().then((res) => {
          setFavoriteGames(res.data);
        });
      } catch (error) {}
    }
  };

  const [getGameFavorite] = useDebounce(() => {
    pathname &&
      user &&
      !pathname.startsWith("/lobby/navigation") &&
      !pathname.startsWith("/games/SportGame") &&
      !pathname.startsWith("/games/CasinoGame") &&
      !pathname.startsWith("/transfer") &&
      fetchFavoriteGames();
  }, 200);

  useEffect(() => {
    getGameFavorite();
  }, [user, pathname]);

  const changeListGameFavorite = async (
    gameId: string,
    partnerName: string
  ) => {
    const gameExists = Array.isArray(favoriteGames) && favoriteGames.some((g) => g.game_id === gameId);

    if (gameExists) {
      try {
        const res = await gameService.DeleteGameFavorite(gameId, partnerName);

        if (res?.data) {
          setFavoriteGames(res?.data);
        }
      } catch (error) { }
    } else {
      const res = await gameService.AddGameFavorite(gameId, partnerName);
      if (res?.data) {
        setFavoriteGames(res?.data);
      }
    }
  };

  return (
    <FavoriteGameContext.Provider
      value={{
        favoriteGames,
        setFavoriteGames,
        changeListGameFavorite,
        fetchFavoriteGames,
      }}>
      {children}
    </FavoriteGameContext.Provider>
  );
};

// Custom hook để sử dụng context
export const useFavoriteContext = () => {
  const context = useContext(FavoriteGameContext);

  // Nếu context chưa được bọc bởi Provider, ném lỗi
  if (!context) {
    throw new Error(
      "useFavoriteContext must be used within a FavoriteGameProvider"
    );
  }

  return context;
};
