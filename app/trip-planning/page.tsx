"use client";

import React from "react";
import TripInputForm from "../components/TripInputForm/TripInputForm";

const TripPlanningPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>여행 일정 생성</h1>
      <TripInputForm onSubmit={handleSubmit} />
    </div>
  );
};

export default TripPlanningPage;
