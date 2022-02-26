import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "../routes";

const UnAuthenticatedRouter = () => <h1>UnAuthenticatedApp</h1>;

const AuthenticatedRouter = () => (
  <Routes>
    {routes.app.map((route) => (
      <Route key={route.path} path={route.path} element={<route.component />} />
    ))}
    <Route path="*" element={<h1>Not found Page 404</h1>} />

    <Route path="/" element={<Navigate to="/" />} />
  </Routes>
);

const Views = () => {
  const user = true;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {user ? <AuthenticatedRouter /> : <UnAuthenticatedRouter />}
    </Suspense>
  );
};

export default Views;
