"use client";

import { useUser } from "@/context/useUserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckUserInAccPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  const router = useRouter();

  if (user) {
    return children;
  } else {
    router.push("/");
    return "";
  }
}
