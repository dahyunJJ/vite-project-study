import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../layout/MainLayout";
import MainPage from "../../screen/main/MainPage";
import OperationPage from "../../screen/operation/OperationPage";
import InfoPage from "../../screen/info/InfoPage";
import HistoryPage from "../../screen/history/HistoryPage";

interface hookFace {
  routers: ReturnType<typeof createBrowserRouter>;
}

const useRouter = (): hookFace => {
  const routers = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { path: "/", element: <MainPage /> },
          { path: "/operation", element: <OperationPage /> },
          { path: "/info", element: <InfoPage /> },
          { path: "/history", element: <HistoryPage /> },
        ],
      },
    ],
    { basename: "/react-test" }
  );

  return { routers };
};

export default useRouter;
