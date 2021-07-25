import React from "react";
import { HIGHLIGHT_CARD_TYPE } from "../../../constants";
import styles from "../../../styles/Main.module.css";

const HighlightCardImpl = (type: any, infos: any) => {
  switch (type) {
    case HIGHLIGHT_CARD_TYPE.WIND:
      return (
        <div className={styles.highlightCardBig}>
          <p>Wind Status</p>
          <p className={styles.highlightCardInfo}>{infos.speed}mph</p>
          <div className={styles.highlightCardSubInfo}>{infos.degree}deg</div>
        </div>
      );
    case HIGHLIGHT_CARD_TYPE.HUMIDITY:
      return (
        <div className={styles.highlightCardBig}>
          <p>Humidity</p>
          <p className={styles.highlightCardInfo}>{infos}%</p>
          <div className={styles.highlightCardGraph}>
            <div
              className={styles.highlightCardGraphInner}
              style={{ width: `${(infos * 320) / 100}px` }}
            />
          </div>
        </div>
      );
    case HIGHLIGHT_CARD_TYPE.AIRPRESSURE:
      return (
        <div className={styles.highlightCard}>
          <p className={styles.highlightCardTitle}>Air Pressure</p>
          <p className={styles.highlightCardInfo}>{infos}mb</p>
        </div>
      );
    case HIGHLIGHT_CARD_TYPE.VISIBILITY:
      return (
        <div className={styles.highlightCard}>
          <p className={styles.highlightCardTitle}>Visibility</p>
          <p className={styles.highlightCardInfo}>{infos}</p>
        </div>
      );
    default:
      return <div className={styles.highlightCard}>No Info</div>;
  }
};

export default HighlightCardImpl;
