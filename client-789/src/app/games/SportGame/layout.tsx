"use client";

import LoadingComponent from "@/components/LoadingComponent";
import NavigationGameComponent from "@/components/NavigationGame";
import { useUser } from "@/context/useUserContext";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SportGameLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useUser();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const showNavigator = searchParams.get("navigator");

  if (!user) {
    router.push(`/lobby/navigation/LoginToSupplier?url=${encodeURIComponent(pathname)}`);
  } else {
    if (showNavigator === "no") {
      return children;
    }
    return <NavigationGameComponent>{children}</NavigationGameComponent>;
  }
}
