import { useEffect } from "react";
import "./App.css";
import Layout from "./component/partial/Layout";
import Login from "./page/Login/Login";
import { LoginContaxt } from "./context/LoginWindow";
import { useDispatch } from "react-redux";
import { UserAxios } from "./core/Redux/GetAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Data = async () => {
      try {
        const result = await dispatch(UserAxios("/users")).unwrap();
        console.log(result.response);
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
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
