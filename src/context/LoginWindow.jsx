import { createContext, useState } from "react";

export const LoginContaxt = createContext();

function LoginWindow({ children }) {
  const [openLogin, setopenLogin] = useState(false);
  const [NextWindow, setNextWindow] = useState("1");

  return (
    <LoginContaxt.Provider value={{ openLogin, setopenLogin ,NextWindow, setNextWindow }}>
      {children}
    </LoginContaxt.Provider>
  );
}

export default LoginWindow;
