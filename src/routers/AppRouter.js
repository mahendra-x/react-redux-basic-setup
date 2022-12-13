import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}
