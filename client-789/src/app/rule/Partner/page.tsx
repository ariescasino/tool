/* eslint-disable @next/next/no-img-element */
import RulePartner from "@/components/RulePartner";
import styles from "@/styles/rule.module.css";
import Image from "next/image";

export default function Partner() {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex w-full flex-col justify-center items-center">
        <Image
          width={298}
          height={67}
          sizes="100vw"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/doitac1.png"
          alt=""
        />
        <Image
          width={581}
          height={254}
          className="mt-8"
          sizes="100vw"
          src="https://cdn.jsdelivr.net/gh/snail5555/akv@main/789bet/images/rule/doitac2.png"
          alt=""
        />
      </div>
      <RulePartner />
    </div>
  );
}
