"use client";
import style from "./myPage.module.css";
import { useState } from "react";
import Link from "next/link";
import EmptyTripCard from "../components/MyPage/EmptyTripCard";
import Datatable from "../components/Common/Datatable";

/**
 작성자 : 정승민
 작성일 : 2024.07.11
 DESC : 마이페이지 메인은 최근 여정 관리를 기본으로 보여줍니다.
*/

const EmptyDataBanner: React.FC<{
  message: string;
  link: string;
  linkMessage: string;
}> = ({ message, linkMessage, link }) => {
  return (
    <div className={style.empty_data_banner}>
      <p className={style.banner_message}>{message}</p>
      <Link href={link}>{linkMessage}</Link>
    </div>
  );
};

const MyPageMain: React.FC = () => {
  // 여정 데이터 중 가장 최근에 생성된 데이터를 가져올 state.
  const [recentData, setRecentData] = useState<any>(null);

  return (
    <div className={style.myPageContentsContainer}>
      <div className={style.myPageContentsTitle}>
        <p className={style.topic}>여정 관리</p>
        <p className={style.title}>최근에 생성한 여정</p>
      </div>

      {!recentData ? (
        <div className={style.myPageContents}>
          <EmptyTripCard />
        </div>
      ) : (
        <div className={style.myPage_contents_not_empty}>
          <div className={style.recentTrip}>
            <p className={style.generateDate}>여정 생성일 : 2024.06.30</p>
            <div className={style.tripLocation}>
              <div className={style.locationAndDate}>
                <p className={style.locationTitle}>
                  도쿄 <span>Tokyo / 일본 (Japan)</span>
                </p>
                <p className={style.schedule}>
                  2024. 07. 07 (일) ~ 2024. 07. 12 (금)
                </p>
              </div>

              <div className={style.trip_banner_dummy}>
                <h3>여행지 배너 (미구현)</h3>
              </div>
            </div>

            {/* 친구 목록*/}
            <div className={style.friendsList}>
              <p className={style.locationTitle}>함께 여행하는 친구</p>
              <EmptyDataBanner
                message={"아직 함께 여행하는 친구가 없습니다."}
                linkMessage={"여정에 친구 초대하기 >"}
                link={"/trip-planning"}
              />
            </div>

            {/* 예약 정보 목록*/}
            <div className={style.friendsList}>
              <p className={style.locationTitle}>여정의 예약 정보</p>
              <EmptyDataBanner
                message={"여정의 예약 정보가 없습니다."}
                linkMessage={"호텔 / 관광지 예약하기 >"}
                link={"/trip-planning"}
              />
              <Datatable />
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setRecentData(!recentData);
        }}
      >
        정보 유/무 변경 (테스트용 버튼)
      </button>
    </div>
  );
};

export default MyPageMain;
