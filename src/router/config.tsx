import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import TrendingScams from "../pages/trending-scams/page";
import Scanner from "../pages/scanner/page";
import ScanResult from "../pages/scan-result/page";
import Resources from "../pages/resources/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/trending-scams",
    element: <TrendingScams />,
  },
  {
    path: "/scanner",
    element: <Scanner />,
  },
  {
    path: "/scan-result",
    element: <ScanResult />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
