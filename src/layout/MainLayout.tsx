import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useMainLayout from "./hooks/useMainLayout";

const MainLayout = () => {
  // const hook = useMainLayout();
  // useMainLayout()을 호출하는 이유는 useEffect 실행 때문이므로,
  // 굳이 변수에 할당할 필요가 없음.
  useMainLayout();

  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
