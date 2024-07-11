"use client";
import { useState } from "react";
import style from "../../mypage/myPage.module.css";
import Link from "next/link";
import Image from "next/image";

const MENU_LIST = [
  {
    menuId: 1,
    menuTitle: "여정 관리",
    menuList: [
      {
        id: "a1",
        title: "최근에 생성한 여정",
        link: "/mypage",
      },
      {
        id: "a2",
        title: "지나간 여정 (전체 여정)",
        link: "/mypage/myTrip",
      },
    ],
  },
  {
    menuId: 2,
    menuTitle: "여행 기록 관리",
    menuList: [
      {
        id: "b1",
        title: "전체 여행 기록",
        link: "/mypage/",
      },
      {
        id: "b2",
        title: "전체 여행지 / 식당 리뷰",
        link: "/mypage/myReviews",
      },
    ],
  },
  {
    menuId: 3,
    menuTitle: "여행 친구 관리",
    menuList: [
      {
        id: "c1",
        title: "전체 친구 목록",
        link: "/mypage/friends",
      },
      {
        id: "c2",
        title: "친구 추가 / 삭제",
        link: "/mypage/friends",
      },
    ],
  },
  {
    menuId: 4,
    menuTitle: "설정",
    menuList: [
      {
        id: "d1",
        title: "계정 설정",
        link: "/mypage/settings/account",
      },
      {
        id: "d2",
        title: "알림 설정",
        link: "/mypage/settings/notifications",
      },
      {
        id: "d3",
        title: "프로필 변경",
        link: "/mypage/settings/profile",
      },
    ],
  },
];

const MyPageNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("a1");

  return (
    <div className={style.navContainer}>
      <div className={style.profileContainer}>
        <div className={style.circle}>
          <Image
            src={"/images/person_1.jpg"}
            width={150}
            height={150}
            alt={"profile image"}
          />
        </div>
        <p className={style.userName}>김여행</p>
      </div>

      <div className={style.menuContainer}>
        {MENU_LIST.map((menu, index) => {
          return (
            <div className={style.eachNavMenu} key={index}>
              <p className={style.eachMenuTitle}>{menu.menuTitle}</p>
              <div className={style.menuLine} />
              {menu.menuList.map((eachMenu, index) => {
                return (
                  <li
                    className={
                      activeMenu === eachMenu.id
                        ? style.menuList_active
                        : style.menuList
                    }
                    key={index}
                  >
                    <Link
                      href={eachMenu.link}
                      onClick={() => {
                        setActiveMenu(eachMenu.id);
                      }}
                    >
                      {eachMenu.title}
                    </Link>
                  </li>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyPageNav;
