import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface IRoutes {
  to: string
  path: string
  Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
  name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"))

export const routes: IRoutes[] = [
  {
    to: "/dashboard/",
    path: "/dashboard/*",
    Component: LazyLayout,
    name: "LazyLayout - Dashboard"
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy"
  }
]