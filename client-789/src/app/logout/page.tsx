/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useUser } from "@/context/useUserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';


export default function LogoutPage() {
  const { logoutUser } = useUser();
  const queryClient = useQueryClient();
  
  useEffect(() => {
    queryClient.clear();
    logoutUser();
  }, []);

  return null;
}
