import { Routes, Route } from "react-router-dom";
import "./globals.css";
import React from "react";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./root/pages";
import AuthLayout from "../src/_auth/AuthLayout";
import RootLayout from "../src/root/RootLayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
