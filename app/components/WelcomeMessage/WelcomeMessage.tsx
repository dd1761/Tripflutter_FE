"use client";

import React from "react";
import styles from "./WelcomeMessage.module.css";
import CreateTripButton from "../CreateTripButton/CreateTripButton";
import Link from "next/link";

const WelcomeMessage: React.FC = () => {
  return (
    <section>
      <div className={styles.container}>
        <span className={styles.heading}>당신을 위한 여행 계획 사이트</span>
        <h1 className={styles.subheading}>트리플러터에서 쉽고 빠르게 여행 계획을 세워보세요.</h1>
        <p className={styles.description}>지금 바로 당신의 여행을 시작하세요.</p>
        <Link href={"/trip-planning"}> <CreateTripButton />
        </Link>
      </div>
    </section>
  );
};

export default WelcomeMessage;
