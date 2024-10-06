import style from "../myPage.module.css";

const MyTrip: React.FC = () => {
  return (
    <div className={style.myPageContentsContainer}>
      <div className={style.myPageContentsTitle}>
        <p className={style.topic}>여정 관리</p>
        <p className={style.title}>지나간 여정(전체 여정)</p>
      </div>

      <div className={style.myPageContents}></div>
    </div>
  );
};

export default MyTrip;
