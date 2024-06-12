"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
<<<<<<< Updated upstream
import styles from "../styles/trip-detail.module.css";

const GoogleMapComponent = dynamic(
  () => import("../components/GoogleMapComponent"),
=======
import styles from "../components/TripDetails/TripDetails.module.css";

const GoogleMapComponent = dynamic(
  () => import("../components/GoogleMap/GoogleMapComponent"),
>>>>>>> Stashed changes
  {
    ssr: false,
  }
);

type Location = {
  name: string;
  info: string;
  time: string;
  lat: number;
  lng: number;
};

type TripData = {
  [key: string]: Location[];
};

const tripData: TripData = {
  "1일차": [
    {
      name: "카미나리몬",
      info: "관광명소 • 아사쿠사",
      time: "14:00",
      lat: 35.7115,
      lng: 139.7967,
    },
    {
      name: "센소지",
      info: "관광명소 • 아사쿠사",
      time: "14:10",
      lat: 35.7148,
      lng: 139.7967,
    },
    {
      name: "푸글렌 아사쿠사 점",
      info: "카페/디저트 • 아사쿠사",
      time: "15:20",
      lat: 35.7132,
      lng: 139.7978,
    },
    {
      name: "도쿄 소라마치",
      info: "쇼핑 • 아사쿠사",
      time: "16:30",
      lat: 35.7101,
      lng: 139.8107,
    },
  ],
  "2일차": [
    {
      name: "센소지",
      info: "관광명소 • 아사쿠사",
      time: "10:00",
      lat: 35.7148,
      lng: 139.7967,
    },
    {
      name: "쿠라마에 거리",
      info: "관광명소 • 아사쿠사",
      time: "11:30",
      lat: 35.7088,
      lng: 139.7894,
    },
    {
      name: "긴자식스",
      info: "쇼핑 • 긴자",
      time: "13:00",
      lat: 35.6695,
      lng: 139.7644,
    },
    {
      name: "이토야 긴자 본점",
      info: "쇼핑 • 긴자",
      time: "15:00",
      lat: 35.6721,
      lng: 139.7671,
    },
    {
      name: "아자부다이 힐즈 모리 JP 타워",
      info: "관광명소 • 롯폰기",
      time: "16:30",
      lat: 35.6586,
      lng: 139.7454,
    },
    {
      name: "팀랩 보더리스",
      info: "테마/체험 • 롯폰기",
      time: "18:00",
      lat: 35.6586,
      lng: 139.7282,
    },
  ],
  "3일차": [
    {
      name: "기치조지",
      info: "관광명소",
      time: "10:00",
      lat: 35.7033,
      lng: 139.5795,
    },
    {
      name: "이노카시라 온시 공원",
      info: "관광명소",
      time: "11:30",
      lat: 35.7005,
      lng: 139.5703,
    },
    {
      name: "지브리 미술관",
      info: "관광명소",
      time: "12:30",
      lat: 35.6961,
      lng: 139.5706,
    },
    {
      name: "고엔지 거리",
      info: "쇼핑",
      time: "15:00",
      lat: 35.7048,
      lng: 139.6502,
    },
    {
      name: "시모키타자와",
      info: "관광명소",
      time: "17:00",
      lat: 35.6613,
      lng: 139.6687,
    },
  ],
  "4일차": [
    {
      name: "네즈 미술관",
      info: "관광명소",
      time: "10:00",
      lat: 35.6616,
      lng: 139.7213,
    },
    {
      name: "에비스 가든 플레이스",
      info: "쇼핑 • 시부야",
      time: "12:30",
      lat: 35.6487,
      lng: 139.7016,
    },
    {
      name: "스타벅스 리저브 로스터리 도쿄 점",
      info: "카페/디저트",
      time: "15:00",
      lat: 35.6667,
      lng: 139.7019,
    },
    {
      name: "다이칸야마",
      info: "관광명소 • 시부야",
      time: "16:30",
      lat: 35.6581,
      lng: 139.7013,
    },
    {
      name: "가구라자카",
      info: "관광명소 • 신주쿠",
      time: "19:00",
      lat: 35.6938,
      lng: 139.7037,
    },
  ],
};

const Trip_Detail: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("1일차");

  const mapContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 35.6895,
    lng: 139.6917,
  };

  const locations = tripData[selectedDay].map((location) => ({
    lat: location.lat,
    lng: location.lng,
  }));

  return (
    <div className={styles.Trip_detail_Container}>
      <div>
        <h1 className={styles.Trip_detail_corseTitle}>도쿄 추천 코스 👍</h1>
        <p className={styles.Trip_detail_corse_SubTitle}>
          세계적인 대도시 중 하나인 만큼 도쿄를 제대로 돌아보려고 하면 일주일도
          빠듯하다. 그러나 바쁜 여행자들에게는 3박 4일의 짧은 일정을 짜는 것은
          지혜가 필요하다. 도쿄를 둘러보는 가장 효율적인 동선을 소개한다.
        </p>
      </div>
      <div className={styles.Trip_detail_buttonGroup}>
        {Object.keys(tripData).map((day) => (
          <button
            key={day}
            className={styles.Day_button}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className={styles.googleMap}>
        <GoogleMapComponent
<<<<<<< Updated upstream
          mapContainerStyle={mapContainerStyle}
=======
          // mapContainerStyle={mapContainerStyle}
>>>>>>> Stashed changes
          center={center}
          locations={locations}
        />
      </div>
      <div className={styles.LocationList}>
        {tripData[selectedDay].map((location, index) => (
          <div key={index} className={styles.LocationItem}>
            <span className={styles.LocationNumber}>{index + 1}</span>
            <div className={styles.LocationDetails}>
              <p className={styles.LocationName}>{location.name}</p>
              <p className={styles.LocationInfo}>{location.info}</p>
            </div>
            <p className={styles.LocationTime}>{location.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trip_Detail;
