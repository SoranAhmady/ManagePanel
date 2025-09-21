import { useEffect } from "react";
import "./App.css";
import Layout from "./component/partial/Layout";
import Login from "./page/Login/Login";
import { useDispatch } from "react-redux";
import { UserAxios } from "./core/Redux/GetAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuPage } from "./page/MenuPage/MenuPage";
import HomePage from "./page/HomePage/HomePage";

function App() {
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
          <Route path="/Login" element={<Login />} />
          <Route path="/menu" element={<MenuPage />}/> 
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
