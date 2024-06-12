import React from "react";
import styles from "./CreateTripButton.module.css";

const CreateTripButton: React.FC = () => {
  return (
    <button className={styles.button}>여행 시작하기</button>
  );
};

export default CreateTripButton;
