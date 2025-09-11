"use client";
import React, { useRef } from "react";
import styles from "./styles.css";
import Link from "next/link";

function IframeWithButton() {
  const iframeRef = useRef(null);

  return (
    <div className="relative w-[100vw] h-[100vh] overflow-y-hidden">
      <iframe
        src="https://gbqrjoc2ttrypoxd7wsyynmltvs8flysgzzesn2x4le2fpe50iagwvk.cskh66.com/"
        width="100%"
        height="100%"
        ref={iframeRef}
        style={{ pointerEvents: "auto" }}
      />
      <Link href="/" target="_blank" rel="noopener noreferrer" />
    </div>
  );
}

export default IframeWithButton;
