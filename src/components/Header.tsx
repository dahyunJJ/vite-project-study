import { useState, useEffect } from "react";
import { MenuNameType } from "../utils/type";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../utils/store";
import { setSelectMenuName } from "../data/menuSlice";
import useNavigation from "../router/hooks/useNavigation";

import "../styles/Header.css";

const Header = () => {
  const navList: { name: MenuNameType; path: string }[] = [
    { name: "MAIN", path: "/" },
    { name: "운용관리", path: "/operation" },
    { name: "정보관리", path: "/info" },
    { name: "이력관리", path: "/history" },
  ];

  const dispatch = useAppDispatch();
  const navi = useNavigation();
  const selectMenu = useSelector(
    (state: RootState) => state.menu.selectMenuName
  );

  const handleSelectMenu = (menuName: MenuNameType, path: string) => {
    // console.log(`메뉴 클릭됨: ${menuName}`);
    dispatch(setSelectMenuName(menuName));
    navi.naviToIntegration(path);
  };

  return (
    <div className="header">
      <h1>Logo</h1>
      <nav>
        <ul>
          {navList.map((nav) => (
            <li
              key={nav.name}
              className={selectMenu === nav.name ? "active" : ""}
              onClick={() => handleSelectMenu(nav.name, nav.path)}
            >
              {nav.name}
            </li>
          ))}
        </ul>
        <div className="profile-area">
          <span>
            <strong>유저네임</strong> 접속
          </span>
        </div>
        <div className="logout-area">
          <button>로그아웃</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
