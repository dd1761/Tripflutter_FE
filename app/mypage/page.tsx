"use client";
import MyPageLayout from "./layout";
import style from "./myPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/**
 작성자 : 정승민
 작성일 : 2024.07.11
 DESC : 마이페이지 메인은 최근 여정 관리를 기본으로 보여줍니다.
*/

const MyPageMain: React.FC = () => {
  const [recentData, setRecentData] = useState<any>(null);

  return (
    <div className={style.myPageContentsContainer}>
      <div className={style.myPageContentsTitle}>
        <p className={style.topic}>여정 관리</p>
        <p className={style.title}>최근에 생성한 여정</p>
      </div>

      <div className={style.myPageContents}>
        <div className={style.none_data_card}>
          <Image
            src={"/images/none_data_airplane.png"}
            width={150}
            height={158}
            alt={"none data"}
          />
          <div className={style.card_description}>
            <p id={style.none_data_title}>아직 생성된 여정이 없습니다.</p>
            <p id={style.none_data_description}>
              트리플러터에서 새로운 여행을 계획해보세요!
            </p>
            <Link href={"/trip-planning"}>여행 계획하러 가기 &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageMain;
