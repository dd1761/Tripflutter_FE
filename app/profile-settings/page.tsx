import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "../styles/trip-detail.module.css";

const MyPageMain = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 35.6895,
    lng: 139.6917,
  };

  const locations = [
    { lat: 35.7115, lng: 139.7967 }, // 카미나리몬
    { lat: 35.7148, lng: 139.7967 }, // 센소지
    { lat: 35.7132, lng: 139.7978 }, // 푸글렌 아사쿠사 점
    { lat: 35.7101, lng: 139.8107 }, // 도쿄 소라마치
  ];

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
        <button className={styles.Day_button}>1일 차</button>
        <button className={styles.Day_button}>2일 차</button>
        <button className={styles.Day_button}>3일 차</button>
        <button className={styles.Day_button}>4일 차</button>
      </div>
      <div className={styles.googleMap}></div>
      <div className={styles.LocationList}>
        <div className={styles.LocationItem}>
          <span className={styles.LocationNumber}>1</span>
          <div className={styles.LocationDetails}>
            <p className={styles.LocationName}>카미나리몬</p>
            <p className={styles.LocationInfo}>관광명소 • 아사쿠사</p>
          </div>
          <p className={styles.LocationTime}>14:00</p>
        </div>
        <div className={styles.LocationItem}>
          <span className={styles.LocationNumber}>2</span>
          <div className={styles.LocationDetails}>
            <p className={styles.LocationName}>센소지</p>
            <p className={styles.LocationInfo}>관광명소 • 아사쿠사</p>
          </div>
          <p className={styles.LocationTime}>14:10</p>
        </div>
        <div className={styles.LocationItem}>
          <span className={styles.LocationNumber}>3</span>
          <div className={styles.LocationDetails}>
            <p className={styles.LocationName}>푸글렌 아사쿠사 점</p>
            <p className={styles.LocationInfo}>카페/디저트 • 아사쿠사</p>
          </div>
          <p className={styles.LocationTime}>15:20</p>
        </div>
        <div className={styles.LocationItem}>
          <span className={styles.LocationNumber}>4</span>
          <div className={styles.LocationDetails}>
            <p className={styles.LocationName}>도쿄 소라마치</p>
            <p className={styles.LocationInfo}>쇼핑 • 아사쿠사</p>
          </div>
          <p className={styles.LocationTime}>16:30</p>
        </div>
      </div>
    </div>
  );
};

export default MyPageMain;
