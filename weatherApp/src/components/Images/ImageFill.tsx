import Image from "next/image";
import styles from "../../styles/Side.module.css";
import React from "react";

export function ImageFill(src: string) {
  return (
    <div
      className={styles.weatherIcon}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Image src={src} sizes="10%" layout="fill" objectFit="contain" />
    </div>
  );
}
