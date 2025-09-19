import { useContext, useEffect } from "react";
import { LoginContaxt } from "../../../../context/LoginWindow";
import P from "../../atoms/P/P";
import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";
import Span from "../../atoms/Span/Span";
import { useSelector } from "react-redux";

function LoginPasswordHeader() {
    const { setopenLogin,setNextWindow } = useContext(LoginContaxt);
    const store =useSelector(item=>item.User.users)
    console.log(store);
    
    
        
    return (
     <div >
        <div className="w-full flex items-center justify-between ">
            <Button onClick={()=>(setopenLogin(false),setNextWindow("1"))}>
                <Icon name="back" />
            </Button>
            <Icon name="logoSm" />
            <Button onClick={()=>setNextWindow("1")}>
            <Icon name="backRight" />
            </Button>
        </div>
        <div className="w-full flex justify-center flex-col items-center [direction:rtl] my-[1.4vw] gap-[0.5vw] ">
            <P className="text-[#353535] font-medium text-[1.5vw] " >کد تایید</P>
            <P className="text-[#717171] font-medium text-[1vw] flex gap-2 ">کد تایید پنج‌رقمی به شماره <Span>{store.number}</Span>  ارسال شد.</P>
        </div>
     </div>   
    )
}

export default LoginPasswordHeader
