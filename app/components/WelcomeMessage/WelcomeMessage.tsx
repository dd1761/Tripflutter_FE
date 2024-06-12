"use client";

import React from "react";
import styles from "./WelcomeMessage.module.css";
import CreateTripButton from "../CreateTripButton/CreateTripButton";
import Link from "next/link";

const WelcomeMessage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TripFlutter에 오신 것을 환영합니다</h1>
      <p className={styles.description}>AI 기반 어시스턴트와 함께 완벽한 여행을 간편하게 계획하고 소통하세요</p>
      <Link href={"/trip-planning"}>
        <CreateTripButton />
      </Link>
    </div>
  );
};

export default WelcomeMessage;
