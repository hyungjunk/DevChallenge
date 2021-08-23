import styles from "../styles/Home.module.css";
import React from "react";
import Main from "./main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
      <style jsx global>{`
        .mainLayout {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          padding: 4rem 0;
        }
        :root {
          --main-bg-color: rgb(16, 20, 33);
          --div-bg-color: rgb(25, 31, 44);
        }
      `}</style>
    </div>
  );
}
