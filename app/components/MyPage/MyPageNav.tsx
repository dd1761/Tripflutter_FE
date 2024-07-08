"use client";
import style from "../../mypage/myPage.module.css";

const MENU_LIST = [
  {
    menuId: 1,
    menuTitle: "여정 관리",
    menuList: [
      {
        id: "a1",
        title: "최근에 생성한 여정",
        link: "/",
      },
      {
        id: "a2",
        title: "지나간 여정 (전체 여정)",
        link: "/",
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
        link: "/",
      },
      {
        id: "b2",
        title: "전체 여행지 / 식당 리뷰",
        link: "/",
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
        link: "/",
      },
      {
        id: "c2",
        title: "친구 추가 / 삭제",
        link: "/",
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
        link: "/",
      },
      {
        id: "d2",
        title: "알림 설정",
        link: "/",
      },
      {
        id: "d3",
        title: "프로필 변경",
        link: "/",
      },
    ],
  },
];

const MyPageNav: React.FC = () => {
  return (
    <div className={style.navContainer}>
      <div className={style.profileContainer}>
        <div className={style.circle} />
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
                  <li className={style.menuList} key={index}>
                    {eachMenu.title}
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
