import type { RouteProps } from "react-router";
import { appRouter, routerPath } from "./routerPath";
import HomePage from '../../pages/Home/Home'
import Login from "../../pages/Login/Login";



export const routerConfig: RouteProps[] = [
   {
      path: routerPath[appRouter.HOME],
      element: <HomePage />
   },
   {
      path: routerPath[appRouter.LOGIN],
      element: <Login />
   }
]