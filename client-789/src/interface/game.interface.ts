export interface IItemGame {
  gpId: any;
  gameId: number;
  gameType: number;
  gameTypeId: number;
  newGameType: number;
  rank: number;
  device: string;
  platform: string;
  provider: string;
  providerId: number;
  rtp: number;
  rows: number;
  reels: number;
  lines: number;
  blockCountries: string[];
  isMaintain: boolean;
  isEnabled: boolean;
  isProvideCommission: boolean;
  hasHedgeBet: boolean;
  gameName: string;
  gameIconUrl: string;
  partnerName: string;
  providerName: string;
  createdAt: string;
  isFavorite: boolean;
}
export interface IItemGameFavorite {
  gameId: number;
  id: number;
  partner_name: string;
  provider_id: string;
  provider_name: string;
  game_type_id: string;
  game_type_name: string;
  game_name: string;
  game_icon_url: string;
  rank: number;
  updated_at: string;
  created_at: string;
  deleted_at: any;
  game_id: string;
  rank_hot: number;
  rank_new: number;
  rank_super: number;
}
