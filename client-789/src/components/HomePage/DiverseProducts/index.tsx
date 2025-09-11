import Link from "next/link";
import styles from "./DiverseProducts.module.css";

export default function DiverseProducts() {
  return (
    <div className={`hidden md:block ${styles.main} font-roHe`}>
      <div className={styles["head"]}>Sản phẩm đa dạng</div>
      <div className="grid grid-cols-5 gap-[15px] mt-[21px]">
        <Link href={"/lobby/casino"} className="col-span-2">
          <div className={styles["casino"]} />
        </Link>
        <Link href={"/lobby/sport"} className="col-span-1">
          <div className={styles["tt"]} />
        </Link>
        <Link href={"/lobby/game"} className="col-span-1">
          <div className={styles["nh"]} />
        </Link>
        <Link href={"/lobby/fish"} className="col-span-1">
          <div className={styles["bc"]} />
        </Link>
        {/* line2 */}
        <Link href={"/lobby/board"} className="col-span-1">
          <div className={styles["gb"]} />
        </Link>
        <Link href={"/lobby/lottery"} className="col-span-1">
          <div className={styles["xs"]} />
        </Link>
        <Link href={"/lobby/cock-fighting"} className="col-span-1">
          <div className={styles["dg"]} />
        </Link>
        <Link href={"/daily"} className="col-span-1">
          <div className={styles["dl"]} />
        </Link>
        <Link href={"/lobby/promotion"} className="col-span-1">
          <div className={styles["km"]} />
        </Link>
      </div>
    </div>
  );
}
