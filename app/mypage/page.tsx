import MyPageLayout from "./layout";
import style from "./myPage.module.css";
import Link from "next/link";

/**
 작성자 : 정승민
 작성일 : 2024.07.11
 DESC : 마이페이지 메인은 최근 여정 관리를 기본으로 보여줍니다.
*/

const MyPageMain: React.FC = () => {
  return (
    <div className={style.myPageContentsContainer}>
      <div className={style.myPageContentsTitle}>
        <p className={style.topic}>여정 관리</p>
        <p className={style.title}>최근에 생성한 여정</p>
      </div>

      <div className={style.myPageContents}>
        <h1>최근 생성한 여정 페이지</h1>
      </div>
    </div>
  );
};

export default MyPageMain;
