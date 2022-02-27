import React, { lazy } from "react";

// App Pages
const HomePage = lazy(() => import("./views/home/home-page"));

export enum Routes {
  HOME = "/",
}

interface Route {
  title: string;
  path: string;
  component: React.FC;
}

export const routes: {
  app: Route[];
} = {
  app: [
    {
      path: Routes.HOME,
      title: "Home",
      component: HomePage,
    },
  ],
};
