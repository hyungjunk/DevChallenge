import React from "react";
import styles from "../../../../styles/Side.module.css";

const CloseButton = (props) => {
  return (
    <button
      type={"button"}
      className={styles.closeBtn}
      onClick={() => props.close()}
    >
      X
    </button>
  );
};

export default CloseButton;
