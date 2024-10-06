import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../../mypage/myPage.module.css";

const EmptyTripCard: React.FC = () => {
  return (
    <div className={style.none_data_card}>
      <Image
        src={"/images/none_data_airplane.png"}
        width={150}
        height={158}
        alt={"none data"}
      />
      <div className={style.card_description}>
        <p id={style.none_data_title}>아직 생성된 여정이 없습니다.</p>
        <p id={style.none_data_description}>
          트리플러터에서 새로운 여행을 계획해보세요!
        </p>
        <Link href={"/trip-planning"}>여행 계획하러 가기 &gt;</Link>
      </div>
    </div>
  );
};

export default EmptyTripCard;
