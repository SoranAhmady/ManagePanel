import { useContext } from "react";
import Loginform from "../../component/ui/organisms/Loginform/Loginform"
import { LoginContaxt } from "../../context/LoginWindow";
import LoginPassword from "../../component/ui/organisms/LoginPassword/LoginPassword";

function Login() {
          const { NextWindow ,setNextWindow } = useContext(LoginContaxt);
    
    return (
        <div className="w-screen h-screen bg-[#00000099] flex items-center justify-center fixed blur-[6] top-0 z-50   ">
            <div className="w-[30vw] h-[25vw] rounded-lg  border-[#CBCBCB] border-[1px]  bg-[#FFFFFF] ">
               {NextWindow=="1"&&<Loginform/>}
               {NextWindow=="2"&&<LoginPassword/>}
            </div>
        </div>
    )
}

export default Login
