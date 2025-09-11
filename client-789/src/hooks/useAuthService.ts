import authServicer, { getBalance } from "@/api/services/auth.servicer";
import { useQuery } from "@tanstack/react-query";

export const useGetMailBoxes = (data: {
  page: number;
  size: number;
  mailTypes: string[];
}) => {
  const {
    data: dataMailBoxes,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["getMailBoxes"],
    queryFn: () => authServicer.getMailBoxes(data),
    refetchOnMount: true,
  });
  return {
    dataMailBoxes,
    isLoading,
    isFetching,
    refetch,
  };
};
export const useGeBalance = () => {
const token=localStorage?.getItem('token')
  const {
    data: dataBalance,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["getBalance"],
    queryFn: () => getBalance(),
    enabled:!!token,
  });
  return {
    dataBalance,
    isLoading,
    isFetching,
    refetch,
  };
};