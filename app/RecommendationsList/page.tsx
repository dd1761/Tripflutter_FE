"use client";
import React, { useState, useMemo } from "react";
import styles from "./RecommendationsList.module.css";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  likes: number;
  location: string;
  imageUrl: string;
  category: "관광지" | "맛집";
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "비스타 루프탑 바",
    description:
      "황금 불탑 '쉐다곤 파고다' 배경의 포토 스팟으로 유명한 루프...",
    rating: 5.0,
    reviews: 13,
    likes: 13,
    location: "술집·미얀마",
    imageUrl: "images/reco_1.webp",
    category: "관광지",
  },
  {
    id: 2,
    title: "파스테이스 드 벨렘",
    description: "200년 전통의 에그타르트로 원조 맛집",
    rating: 4.7,
    reviews: 182,
    likes: 3719,
    location: "카페/디저트·리스본",
    imageUrl: "images/reco_2.webp",
    category: "관광지",
  },
  {
    id: 3,
    title: "마켓 광장",
    description: "매년 열리기 전어 축제가 개최되는, 기념품 쇼핑을 즐기기 ...",
    rating: 4.7,
    reviews: 13,
    likes: 377,
    location: "관광명소·헬싱키",
    imageUrl: "images/reco_3.webp",
    category: "관광지",
  },
  {
    id: 4,
    title: "중앙 우체국",
    description: "건물 곳곳이 포토 스팟인 아름다운 우체국",
    rating: 4.0,
    reviews: 422,
    likes: 7664,
    location: "관광명소·호치민",
    imageUrl: "images/reco_4.webp",
    category: "관광지",
  },
  {
    id: 5,
    title: "퀸 프리미어 아웃렛",
    description: "퀸 소령의 콜수 코스로 유명한 아웃렛 쇼핑센터",
    rating: 4.2,
    reviews: 674,
    likes: 17546,
    location: "쇼핑·핀",
    imageUrl: "images/reco_5.webp",
    category: "관광지",
  },
  {
    id: 6,
    title: "세비야 대성당",
    description: "스페인 최대 규모의 성당이자, 여행객들의 필수 사진 명소",
    rating: 4.8,
    reviews: 103,
    likes: 3844,
    location: "관광명소·세비야",
    imageUrl: "images/reco_6.webp",
    category: "관광지",
  },
  {
    id: 7,
    title: "시부야 스카이",
    description: "도쿄를 한눈에 바라보게 만드는 스카이 라인을 자랑하는 전망대",
    rating: 4.6,
    reviews: 243,
    likes: 17025,
    location: "관광명소·도쿄",
    imageUrl: "images/reco_7.webp",
    category: "관광지",
  },
  {
    id: 8,
    title: "베니스 그랜드 캐널 몰",
    description: "곤돌라를 타볼 수 있는, 이탈리아 베니스를 연상케 하는 쇼핑몰",
    rating: 4.4,
    reviews: 110,
    likes: 439,
    location: "쇼핑·마카오",
    imageUrl: "images/reco_8.webp",
    category: "관광지",
  },
  {
    id: 9,
    title: "샹베투 기차역",
    description: "포르투 도심 도시로 이동할 수 있는 '세상에서 아름다운 기차역'",
    rating: 4.2,
    reviews: 136,
    likes: 4397,
    location: "관광명소·포르투",
    imageUrl: "images/reco_1.webp",
    category: "관광지",
  },
  {
    id: 10,
    title: "한 시장",
    description:
      "전통 의복 '아오자이'가 구입되고 유명한 다낭 최대 규모의 실내 재래시...",
    rating: 3.9,
    reviews: 3708,
    likes: 58550,
    location: "쇼핑·다낭",
    imageUrl: "images/reco_1.webp",
    category: "관광지",
  },
];

const RecommendationItem: React.FC<{
  recommendation: Recommendation;
  index: number;
}> = ({ recommendation, index }) => (
  <div className={styles.item}>
    <div className={styles.content}>
      <div className={styles.number}>{index + 1}</div>
      <div className={styles.itemTitle}>{recommendation.title}</div>
      <div className={styles.description}>{recommendation.description}</div>
      <div className={styles.meta}>
        <span className={styles.rating}>★ {recommendation.rating}</span>
        <span className={styles.reviews}>({recommendation.reviews})</span>
        <span className={styles.likes}>♥ {recommendation.likes}</span>
      </div>
      <div className={styles.location}>{recommendation.location}</div>
    </div>
    <img
      className={styles.image}
      src={recommendation.imageUrl}
      alt={recommendation.title}
    />
  </div>
);

const RecommendationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    "관광지" | "맛집" | "전체"
  >("전체");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setActiveSearch(searchTerm);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryChange = (category: "관광지" | "맛집" | "전체") => {
    setActiveCategory(category);
  };

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter(
      (recommendation) =>
        (activeCategory === "전체" ||
          recommendation.category === activeCategory) &&
        (recommendation.title
          .toLowerCase()
          .includes(activeSearch.toLowerCase()) ||
          recommendation.description
            .toLowerCase()
            .includes(activeSearch.toLowerCase()) ||
          recommendation.location
            .toLowerCase()
            .includes(activeSearch.toLowerCase()))
    );
  }, [activeSearch, activeCategory]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="어디든지"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          className={styles.searchInput}
        />
        <button className={styles.searchIcon} onClick={handleSearch}>
          🔍
        </button>
      </div>
      <div className={styles.categoryButtons}>
        <button
          onClick={() => handleCategoryChange("전체")}
          className={`${styles.categoryButton} ${
            activeCategory === "전체" ? styles.active : ""
          }`}
        >
          전체
        </button>
        <button
          onClick={() => handleCategoryChange("관광지")}
          className={`${styles.categoryButton} ${
            activeCategory === "관광지" ? styles.active : ""
          }`}
        >
          관광지
        </button>
        <button
          onClick={() => handleCategoryChange("맛집")}
          className={`${styles.categoryButton} ${
            activeCategory === "맛집" ? styles.active : ""
          }`}
        >
          맛집
        </button>
      </div>
      <h2 className={styles.title}>지금 가장 HOT🔥한 방문지 TOP 10</h2>
      <p className={styles.subtitle}>
        지난 일주일 간 평소보다 더 많이 저장된 관광지 · 맛집
      </p>
      <div className={styles.grid}>
        {filteredRecommendations.map((recommendation, index) => (
          <RecommendationItem
            key={recommendation.id}
            recommendation={recommendation}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
