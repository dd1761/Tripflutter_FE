import style from "../styles/myPage.module.css";
import Link from "next/link";

/**
 작성자 : 정승민
 작성일 : 2024.06.12
 TODO : 마이페이지 레이아웃 분리 예정
*/

const MyPageMain: React.FC = () => {
  return (
    <div className={style.myPageContainer}>
      <div className={style.myPageMenu}>
        <div className={style.profileContainer}>
          <div className={style.dummyProfileImage} />
          <p>김여행</p>
        </div>
        {/* 작성자 : 정승민
        작성일 : 2024. 06. 08
        설명 : 각 메뉴에 대해서 별도의 컴포넌트로 분리하여 리스트 렌더링 고민중 */}
        <div className={style.menuList}>
          <div className={style.eachMenu}>
            <p className={style.eachMenuTitle}>나의 여정 &gt;</p>
            <div className={style.horizontalLineWhite} />
            <ul className={style.eachMenuList}>
              <Link href={"/mypage/recentTrip"}>
                <li>최근 여정 관리</li>
              </Link>
              <Link href={"/mypage/reservation"}>
                <li>나의 예약 관리</li>
              </Link>
              <Link href={"/mypage/allTrip"}>
                <li>나의 전체 여정 관리</li>
              </Link>
              <Link href={"/mypage/reviews"}>
                <li>나의 리뷰 관리</li>
              </Link>
            </ul>
          </div>

          <div className={style.eachMenu}>
            <p className={style.eachMenuTitle}>나의 친구 &gt;</p>
            <div className={style.horizontalLineWhite} />
            <ul className={style.eachMenuList}>
              <Link href={"/mypage/myFriends"}>
                <li>친구 목록 / 관리</li>
              </Link>
            </ul>
          </div>

          <div className={style.eachMenu}>
            <p className={style.eachMenuTitle}>나의 프로필 &gt;</p>
            <div className={style.horizontalLineWhite} />
            <ul className={style.eachMenuList}>
              <Link href={"/mypage/setting/profile"}>
                <li>프로필 관리</li>
              </Link>
            </ul>
          </div>

          <div className={style.eachMenu}>
            <p className={style.eachMenuTitle}>개인정보 설정 &gt;</p>
            <div className={style.horizontalLineWhite} />
            <ul className={style.eachMenuList}>
              <Link href={"/mypage/setting/account"}>
                <li>계정 설정</li>
              </Link>
              <Link href={"/mypage/setting/notifications"}>
                <li>알림 설정</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.myPageContents}>
        <div className={style.myPageContentsTitle}>
          <p>최근 여정 관리</p>
          <div className={style.horizontalLineBlack} />
        </div>

        <div className={style.recentTripBanner}></div>

        <div className={style.myPageContentsTitle}>
          <p>여정의 예약 정보</p>
          <div className={style.horizontalLineBlack} />
        </div>

        <div className={style.reservationInfoContainer}>
          {/*항공권 예약 정보 */}
          <div className={style.reservation}>
            <div className={style.reservationSubject}>
              <p>항공권</p>
              <p>
                <span>전체보기</span>
              </p>
            </div>
            <div className={style.infoListContainer}>
              <div className={style.eachReservationInfo}>
                <div className={style.airlineLeft}>
                  <p className={style.airlineName}>에어서울</p>
                  <p className={style.airlineId}>OZ123</p>
                </div>

                <div className={style.airlineRight}>
                  <p className={style.airlineName}>2024.06.12 - 07:30</p>
                  <p className={style.airlineId}>인천국제공항(ICN) 1터미널</p>
                </div>
              </div>
              <div className={style.eachReservationInfo}>
                <div className={style.airlineLeft}>
                  <p className={style.airlineName}>에어서울</p>
                  <p className={style.airlineId}>OZ321</p>
                </div>

                <div className={style.airlineRight}>
                  <p className={style.airlineName}>2024.06.13 - 13:30</p>
                  <p className={style.airlineId}>나리타국제공항(NRT)</p>
                </div>
              </div>
            </div>
          </div>

          {/*숙박 예약 정보 */}
          <div className={style.reservation}>
            <div className={style.reservationSubject}>
              <p>숙박</p>
              <p>
                <span>전체보기</span>
              </p>
            </div>

            <div className={style.infoListContainer}>
              <div className={style.eachReservationInfo}>
                <div className={style.airlineLeft}>
                  <p className={style.airlineName}>도쿄도 신주쿠구</p>
                  <p className={style.airlineId}>토요코인 호텔 신주쿠</p>
                </div>

                <div className={style.airlineRight}>
                  <p className={style.airlineName}>
                    2024. 06. 12 ~ 2024. 06. 13
                  </p>
                  <p className={style.airlineId}>금연실 / 2인</p>
                </div>
              </div>
            </div>
          </div>

          {/*입장권 예약 정보 */}
          <div className={style.reservation}>
            <div className={style.reservationSubject}>
              <p>입장권</p>
              <p>
                <span>전체보기</span>
              </p>
            </div>

            <div className={style.infoListContainer}>
              <div className={style.eachReservationInfo}>
                <div className={style.airlineLeft}>
                  <p className={style.airlineName}>도쿄타워</p>
                  <p className={style.airlineId}>도쿄타워 입장권</p>
                </div>

                <div className={style.airlineRight}>
                  <p className={style.airlineName}>2024. 06. 12</p>
                  <p className={style.airlineId}>2인</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageMain;
