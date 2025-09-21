import { useContext, useEffect } from "react";
import "./App.css";
import Layout from "./component/partial/Layout";
import Login from "./page/Login/Login";
import { LoginContaxt } from "./context/LoginWindow";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./core/servises/Servises";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserAxios } from "./core/Redux/GetAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuPage } from "./page/MenuPage/MenuPage";

function App() {
  const { openLogin } = useContext(LoginContaxt);
  const dispatch = useDispatch();
  useEffect(() => {
    const Data = async () => {
      try {
        await dispatch(UserAxios("/users")).unwrap();
        await dispatch(UserAxios("/product")).unwrap()
      } catch (error) {
        error
      }
    };
    Data();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Login" element={openLogin && <Login />} />
          <Route path="/" element={<p>Home</p>} />
          <Route path="/menu" element={<MenuPage />}/> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
