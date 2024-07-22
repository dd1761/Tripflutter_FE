"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./TravelSpot.module.css";

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

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>TRIPLE</h1>
        <div className={styles.myReservation}>내 예약</div>
      </header>
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
            <i className="far fa-heart"></i> 위시리스트
          </button>
          <button className={styles.actionButton}>
            <i className="fas fa-check"></i> 방문완료
          </button>
          <button className={styles.actionButton}>
            <i className="far fa-edit"></i> 후기쓰기
          </button>
          <button className={styles.actionButton}>
            <i className="fas fa-share-alt"></i> 공유하기
          </button>
        </div>
        <p className={styles.description}>
          일본 전통 문화가 살아 숨쉬는, 도쿄에서 가장 오래된 사원
        </p>
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
