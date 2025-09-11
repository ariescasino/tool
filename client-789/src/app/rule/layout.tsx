import MarqueeDesktop from "@/components/MarqueeDesktop";
import RuleNav from "@/components/RuleNav";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function LayoutRule({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-col items-center justify-center">
      <div className="bg-rule flex flex-col justify-center items-center">
        <div className="w-full h-[246px] bg-[url('/images/banner.png')] bg-center bg-no-repeat"></div>
        <MarqueeDesktop />
        <div className="max-w-[1200px] min-h-screen w-full h-auto flex relative  pt-[17px] gap-[17px]">
          <RuleNav />
          <div className="w-full p-6 rounded-[10px] bg-[#fffdff33]">
            <div className="borderRuleLayout">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
