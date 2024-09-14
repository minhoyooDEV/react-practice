import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenusPage from "./pages/MenusPage";
import ProfilePage from "./pages/ProfilePage";
import { AppLayout } from "./components/_layout/AppLayout";
export const routes = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/menus",
    element: <MenusPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      ...routes.map((route) => ({
        ...route,
        path: route.path.replace(/^\//, ""),
      })),
    ],
  },
]);

export default router;
