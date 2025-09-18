import { useContext } from "react";
import "./App.css";
import Layout from "./component/partial/Layout";
import Login from "./page/Login/Login";
import { LoginContaxt } from "./context/LoginWindow";

function App() {
  
  const { openLogin } = useContext(LoginContaxt);

  return (
    <Layout>
      {openLogin && <Login />}
    </Layout>
  );
}

export default App;
