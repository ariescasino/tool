/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

const LiveClock = ({ color }: { color?: "black" | "white" }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = dayjs().utc().utcOffset(-261.5);
      const dayOfWeek = now.format("dddd");
      const dayShort = daysInVietnamese[dayOfWeek];
      const formattedTime = now.format(`DD/MM/YYYY (${dayShort}) HH:mm:ss`);
      setCurrentTime(formattedTime);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const daysInVietnamese: { [key: string]: string } = {
    Sunday: "CN",
    Monday: "T2",
    Tuesday: "T3",
    Wednesday: "T4",
    Thursday: "T5",
    Friday: "T6",
    Saturday: "T7",
  };

  return (
    <div
      className={`${color === "white" ? "text-white" : "text-black"} text-[12px] bg-[#1d1d1d] rounded-[30px] leading-[30px] text-center px-2 font-helvetica`}
    >
      {currentTime}
    </div>
  );
};

export default LiveClock;
