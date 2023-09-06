import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Register from "../pages/Register";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Detail from "../components/Detail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/about"  element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
