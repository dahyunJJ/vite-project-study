import { NavigateOptions, useNavigate } from "react-router-dom";

interface hookNavi {
  back: () => void;
  naviToMain: (options?: NavigateOptions | undefined) => void;
  naviToOperation: (options?: NavigateOptions | undefined) => void;
  naviToInfo: (options?: NavigateOptions | undefined) => void;
  naviToHistory: (options?: NavigateOptions | undefined) => void;
  naviToIntegration: (
    pathName: string,
    options?: NavigateOptions | undefined
  ) => void;
}

const useNavigation = (): hookNavi => {
  const navigate = useNavigate();
  // 뒤로가기
  const back = () => {
    navigate(-1);
  };
  // 메인페이지
  const naviToMain = (options?: NavigateOptions | undefined) => {
    navigate("/");
  };
  // 운용관리페이지
  const naviToOperation = (options?: NavigateOptions | undefined) => {
    navigate("/operation");
  };
  // 정보관리페이지
  const naviToInfo = (options?: NavigateOptions | undefined) => {
    navigate("/info");
  };
  // 이력관리페이지
  const naviToHistory = (options?: NavigateOptions | undefined) => {
    navigate("/history");
  };
  const naviToIntegration = (
    pathName: string,
    options?: NavigateOptions | undefined
  ) => {
    navigate(`${pathName}`);
  };
  return {
    back,
    naviToMain,
    naviToOperation,
    naviToInfo,
    naviToHistory,
    naviToIntegration,
  };
};

export default useNavigation;
