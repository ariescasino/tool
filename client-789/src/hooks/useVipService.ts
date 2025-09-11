import vipService from "@/api/services/vip.service";
import { useQuery } from "@tanstack/react-query";

export const useGetInfoUserBank = () => {
  const {
    data: dataVipInfo,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["getCurrentVipInfo"],
    queryFn: () => vipService.getCurrentVipInfo(),
    refetchOnMount: true,
  });
  return {
    dataVipInfo,
    isLoading,
    isFetching,
    refetch,
  };
};

export const useGetUpgradeHistory = () => {
  const {
    data: dataUpgradeHistory,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["getUpgradeHistory"],
    queryFn: () => vipService.getUpgradeHistory(),
  });
  return {
    dataUpgradeHistory,
    isLoading,
    isFetching,
    refetch,
  };
};
