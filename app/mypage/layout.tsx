import React from "react";
import style from "./myPage.module.css";
import MyPageNav from "../components/MyPage/MyPageNav";

interface Props {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: Props) => {
  return (
    <div className={style.myPageContainer}>
      <MyPageNav />
      <div className={style.childrenContainer}>{children}</div>
    </div>
  );
};

export default MyPageLayout;
