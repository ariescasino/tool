"use client";

import VipMobile from "@/components/VipMobile";
import VipPagePC from "@/components/VipPage";
import { useBreakpoint } from "@/utils/check";

export default function VipPage() {
  const breakpoint = useBreakpoint();
  return <div>{breakpoint === "S" ? <VipMobile /> : <VipPagePC />}</div>;
}
