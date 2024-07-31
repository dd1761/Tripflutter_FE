"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./TravelSpot.module.css";
import GoogleMapComponent from "@/app/components/GoogleMap/GoogleMapComponent";

const TravelSpot: React.FC = () => {
  const images = [
    "images/sensoji.jpg",
    "images/reco_1.webp",
    "images/reco_2.webp",
    // 추가 이미지들...
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5초마다 이미지 변경

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // 오른쪽으로 스와이프
      nextImage();
    }

    if (touchStart - touchEnd < -75) {
      // 왼쪽으로 스와이프
      prevImage();
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  const locations = [
    {
      lat: 35.7149,
      lng: 139.7967,
    },
  ]

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.spotName}>센소지</h2>
        <div className={styles.spotInfo}>
          <span className={styles.category}>도쿄 · 관광지</span>
          <div className={styles.rating}>
            <span className={styles.stars}>★★★★☆</span>
            <span className={styles.ratingCount}>678</span>
            <span className={styles.likeCount}>
              <i className="fas fa-heart"></i> 30,572
            </span>
          </div>
          <span className={styles.photographer}>아사쿠사</span>
        </div>
        <div
            className={styles.imageContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={carouselRef}
        >
          <div
              className={styles.imageWrapper}
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
                transition: "transform 0.3s ease-out",
              }}
          >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`센소지 사진 ${index + 1}`}
                    className={styles.image}
                />
            ))}
          </div>
          <div className={styles.imageCount}>{`${currentImageIndex + 1} / ${
              images.length
          }`}</div>
        </div>
        <div className={styles.actions}>
          <button className={styles.actionButton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6"
                 style={{width: '25px', height: '25px'}}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
            </svg>
            저장하기
          </button>
          <button className={styles.actionButton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6"
                 style={{width: '25px', height: '25px'}}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"/>
            </svg>
            일정추가
          </button>
          <button className={styles.actionButton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6"
                 style={{width: '25px', height: '25px'}}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
            </svg>
            후기쓰기
          </button>
          <button className={styles.actionButton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6"
                 style={{width: '25px', height: '25px'}}
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"/>
            </svg>
            공유하기
          </button>
        </div>

        <p className={styles.description}>
          일본 전통 문화가 살아 숨쉬는, 도쿄에서 가장 오래된 사원
        </p>
        <div className={styles.googleMap}>
          <GoogleMapComponent
              mapContainerStyle={mapContainerStyle}
              center={center}
              locations={locations}
          />
          <div className={styles.mapDescription}>
            <p>주소</p>
            <p>111-0032 도쿄도 台東区 浅草2-3-1</p>
          </div>
        </div>
        <div className={styles.reviewSection}>
          <h3 className={styles.reviewTitle}>리뷰 5</h3>
          <div className={styles.reviewItem}>
            <div className={styles.reviewContent}>
              <span className={styles.reviewStars}>★★★★★</span>
              <p>
                적당히 시끄럽고 적당히 분위기가 좋아서 여러모로 좋았네요 ^_^
              </p>
            </div>
            <div className={styles.reviewerName}>피드피드백</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TravelSpot;

const mapContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 35.6895,
  lng: 139.6917,
};