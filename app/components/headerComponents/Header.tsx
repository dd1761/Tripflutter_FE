import style from "../../styles/mainLayout.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <div className={style.tmpLogo} />
          <p>Trip-Flutter</p>
        </div>
        <div className={style.tmpMyPageContainer}>
          {/* 
          작성자 : 정승민
          작성일: 2024.06.07
          설명 : 임시 로그인 및 회원가입 컨테이너
          TODO : 로그인 페이지 및 회원가입 페이지 구현 후 링크 연결
           */}

          <p>로그인</p>
          <p>|</p>
          <p>회원가입</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
