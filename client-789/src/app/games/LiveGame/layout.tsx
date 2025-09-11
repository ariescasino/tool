"use client";

import LoadingComponent from "@/components/LoadingComponent";
import { useUser } from "@/context/useUserContext";
import { usePathname, useRouter } from "next/navigation";

export default function SportGameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isFetching } = useUser();

  if (!user && isFetching) {
    return isFetching && <LoadingComponent />;
  } else {
    return children;
  }
}
