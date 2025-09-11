'use client';

import LoadingComponent from "@/components/LoadingComponent";
import { useUser } from "@/context/useUserContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CMDGame() {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  if (!user) {
    router.push(`/lobby/navigation/LoginToSupplier?url=${pathname}`);
    return null;
  }
  return <LoadingComponent />;
}
