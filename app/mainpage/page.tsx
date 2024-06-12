import React from "react";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import TripInputForm from "../components/TripInputForm/TripInputForm";

const MainPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div>
      <WelcomeMessage />
      <TripInputForm onSubmit={handleSubmit} />
    </div>
  );
};

export default MainPage;
