import { useContext, useEffect } from "react";
import "./App.css";
import Layout from "./component/partial/Layout";
import Login from "./page/Login/Login";
import { useDispatch } from "react-redux";
import { UserAxios } from "./core/Redux/GetAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuPage } from "./page/MenuPage/MenuPage";
import HomePage from "./page/HomePage/HomePage";
import AboutPage from "./page/AboutPage/AboutPage";
import ContactPage from "./page/ContactPage/ContactPage";
import RepresentationPage from "./page/RepresentationPage/RepresentationPage";
import { LoginContaxt } from "./context/LoginWindow";

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
  const { openLogin } = useContext(LoginContaxt);

      
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/menu" element={<MenuPage />}/> 
          <Route path="/branchpage" element={<MenuPage />}/> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/representation" element={<RepresentationPage/>} />
        </Routes>
        {openLogin && <Login />}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
