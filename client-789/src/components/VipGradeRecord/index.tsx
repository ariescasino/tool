import { faUndo, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./VipGradeRecord.module.css";
import { useState } from "react";
import Link from "next/link";

export default function VipGradeRecord() {
  const [filterDate, setFilterDate] = useState("now");
  const [filterData, setFilterData] = useState("all");
  return (
    <>
      <div className={styles.panel}>
        <div className={styles["panel-heading"]}>
          <Link className={styles["panel-undo"]} href="/account/vip">
            <FontAwesomeIcon icon={faUndo} />
          </Link>
          <span>Yêu cầu nhận thưởng</span>
        </div>
        <div className={styles["panel-body"]}>
          <section>
            <ul className={styles["list-filter"]}>
              <li
                className={filterDate === "now" ? styles["active"] : ""}
                onClick={() => setFilterDate("now")}>
                <span>Hôm nay</span>
              </li>
              <li
                className={filterDate === "yesterday" ? styles["active"] : ""}
                onClick={() => setFilterDate("yesterday")}>
                <span>Hôm qua</span>
              </li>
              <li
                className={filterDate === "7days" ? styles["active"] : ""}
                onClick={() => setFilterDate("7days")}>
                <span>Trong vòng 7 ngày</span>
              </li>
              <li
                className={filterDate === "30days" ? styles["active"] : ""}
                onClick={() => setFilterDate("30days")}>
                <span>Trong vòng 30 ngày</span>
              </li>
            </ul>
            <ul className={styles["list-filter-data"]}>
              <li
                className={filterData === "all" ? styles["active"] : ""}
                onClick={() => setFilterData("all")}>
                <span className="ng-scope">Tất cả</span>
              </li>
              <li
                className={filterData === "upgrade" ? styles["active"] : ""}
                onClick={() => setFilterData("upgrade")}>
                <span className="ng-scope">nâng cấp</span>
              </li>
              <li
                className={filterData === "downgrade" ? styles["active"] : ""}
                onClick={() => setFilterData("downgrade")}>
                <span className="ng-scope">hạ cấp</span>
              </li>
            </ul>
            <section>
              <div className={styles["alert"]}>
                <span className="ng-scope text-[14px]">
                  Không có bất kì thông tin nào
                </span>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
