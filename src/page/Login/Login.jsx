import { useContext, useEffect, useState } from "react";
import Loginform from "../../component/ui/organisms/Loginform/Loginform"
import { LoginContaxt } from "../../context/LoginWindow";
import LoginPassword from "../../component/ui/organisms/LoginPassword/LoginPassword";
import { useDispatch } from "react-redux";
import { Checkuser } from "../../core/Redux/GetAPI";

function Login() {
    const { NextWindow} = useContext(LoginContaxt);
    const [Numbers,setNumbers]=useState()
    const [Password,setPassword]=useState()
    const dispacht=useDispatch()
  
   useEffect(() => {
  if (Password && Numbers) {
    localStorage.setItem("user", JSON.stringify({ number: Numbers, password: Password }));
    dispacht(Checkuser({ number: Numbers, password: Password }));
  }
}, [Password, Numbers]);

    

    return (
        <div className="w-screen h-screen  flex items-center justify-center fixed top-0 left-0 z-50  ">
  <div className="absolute inset-0 backdrop-blur-sm bg-[#00000099]"></div>
            <div className="w-[30vw] relative z-10 h-[25vw] rounded-lg  border-[#CBCBCB] border-[1px]  bg-[#FFFFFF] ">
               {NextWindow=="1"&&<Loginform setNumbers={setNumbers}/>}
               {NextWindow=="2"&&<LoginPassword Numbers={Numbers} setPassword={setPassword}  />}
            </div>
        </div>
    )
}

export default Login
