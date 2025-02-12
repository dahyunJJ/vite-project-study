import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuNameType } from "../../utils/type";
import { useAppDispatch, useAppSelector } from "../../utils/store";
import { setSelectMenuName } from "../../data/menuSlice";

interface hookType {}
const useMainLayout = (): hookType => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const path = location.pathname;

  const menuMapping: Record<string, MenuNameType> = {
    "/": "MAIN",
    "/operation": "운용관리",
    "/info": "정보관리",
    "/history": "이력관리",
  };

  useEffect(() => {
    if (path !== "/") {
      const tempPath = menuMapping[path] || "MAIN"; // 한글 메뉴 이름 반환
      dispatch(setSelectMenuName(tempPath));
    } else {
      dispatch(setSelectMenuName("MAIN"));
    }
  }, [path]);

  return {};
};

export default useMainLayout;
