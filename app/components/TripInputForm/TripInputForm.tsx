"use client";

import React, { useState } from "react";
import styles from "./TripInputForm.module.css";

interface TripInputFormProps {
  onSubmit: (formData: any) => void;
}
  
const TripInputForm: React.FC<TripInputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<any>({
    destination: "",
    startDate: "",
    endDate: "",
    city: "",
    tripPeriod: "",
    companions: [],
    travelStyle: [],
    schedulePreference: "",
    budget: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [name]: checkbox.checked
          ? [...prevFormData[name], value]
          : prevFormData[name].filter((item: string) => item !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>떠나고 싶은 도시는?
        <small className={styles.small}> (도시 1곳을 선택해주세요.)</small>
      </label>
      <select name="city" onChange={handleChange} className={styles.select}>
        <option value="">도시 선택</option>
        <optgroup label="대한민국">
          <option value="가평양평">가평양평</option>
          <option value="강릉속초">강릉속초</option>
          <option value="경주">경주</option>
          <option value="부산">부산</option>
          <option value="여수">여수</option>
          <option value="인천">인천</option>
          <option value="전주">전주</option>
          <option value="제주">제주</option>
          <option value="춘천홍천">춘천홍천</option>
          <option value="태안">태안</option>
          <option value="통영거제남해">통영거제남해</option>
          <option value="포항안동">포항안동</option>
        </optgroup>
        <optgroup label="일본">
          <option value="도쿄">도쿄</option>
          <option value="후쿠오카">후쿠오카</option>
          <option value="오사카">오사카</option>
          <option value="시즈오카">시즈오카</option>
          <option value="나고야">나고야</option>
          <option value="삿포로">삿포로</option>
          <option value="오키나와">오키나와</option>
        </optgroup>
        <optgroup label="동남아시아">
          <option value="나트랑">나트랑</option>
          <option value="치앙마이">치앙마이</option>
          <option value="푸꾸옥">푸꾸옥</option>
          <option value="라오스">라오스</option>
          <option value="쿠알라룸푸르">쿠알라룸푸르</option>
          <option value="달랏">달랏</option>
          <option value="다낭">다낭</option>
          <option value="방콕">방콕</option>
          <option value="세부">세부</option>
          <option value="코타키나발루">코타키나발루</option>
          <option value="싱가포르">싱가포르</option>
          <option value="하노이">하노이</option>
          <option value="호치민">호치민</option>
          <option value="발리">발리</option>
          <option value="푸켓">푸켓</option>
          <option value="보라카이">보라카이</option>
        </optgroup>
      </select>

      <label className={styles.label}>여행 기간
        <small className={styles.small}> (원하는 기간을 선택해 주세요.)</small>
      </label>
      <select name="tripPeriod" onChange={handleChange} className={styles.select}>
        <option value="">여행 기간 선택</option>
        <option value="당일치기">당일치기</option>
        <option value="1박 2일">1박 2일</option>
        <option value="2박 3일">2박 3일</option>
        <option value="3박 4일">3박 4일</option>
        <option value="4박 5일">4박 5일</option>
        <option value="5박 6일">5박 6일</option>
      </select>

      <label className={styles.label}>누구와 떠나나요?
        <small className={styles.small}> (다중 선택이 가능해요.)</small>
      </label>
      <div className={styles.checkboxGroup}>
        {["혼자", "친구와", "연인과", "배우자와", "아이와", "부모님과", "기타 등"].map((companion) => (
          <label key={companion}>
            <input
              type="checkbox"
              name="companions"
              value={companion}
              onChange={handleChange}
            />
            {companion}
          </label>
        ))}
      </div>

      <label className={styles.label}>내가 선호하는 여행 스타일은?
        <small className={styles.small}> (다중 선택이 가능해요.)</small>
      </label>
      <div className={styles.checkboxGroup}>
        {["체험액티비티", "SNS 핫플레이스", "자연과 함께", "유명 관광지는 필수", "여유롭게 힐링", "문화예술역사", "여행지 느낌 물씬", "쇼핑은 열정적으로", "관광보다는 먹방"].map((style) => (
          <label key={style}>
            <input
              type="checkbox"
              name="travelStyle"
              value={style}
              onChange={handleChange}
            />
            {style}
          </label>
        ))}
      </div>

      <label className={styles.label}>선호하는 여행 일정은?
        <small className={styles.small}> (선택해주신 스타일로 일정을 만들어드려요.)</small>
      </label>
      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="schedulePreference"
            value="빼곡한 일정 선호"
            onChange={handleChange}
          />
          빼곡한 일정 선호
        </label>
        <label>
          <input
            type="radio"
            name="schedulePreference"
            value="널널한 일정 선호"
            onChange={handleChange}
          />
          널널한 일정 선호
        </label>
      </div>

      <label className={styles.label}>예산(1인 기준)</label>
      <input
        type="number"
        name="budget"
        placeholder="예산을 입력해주세요."
        onChange={handleChange}
        className={styles.input}
      />

      <button type="submit" className={styles.submitButton}>여행 생성하기</button>
    </form>
  );
};

export default TripInputForm;
