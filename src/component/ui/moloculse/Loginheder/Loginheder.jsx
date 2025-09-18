import { useContext } from "react";
import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/Icon/Icon"
import P from "../../atoms/P/P"
import { LoginContaxt } from "../../../../context/LoginWindow";

function Loginheder() {
      const { setopenLogin } = useContext(LoginContaxt);
    
    return (
     <div >
        <div className="w-full flex items-center justify-start gap-[9vw] ">
            <Button onClick={()=>setopenLogin(false)}>
                <Icon name="back" />
            </Button>
            <Icon name="logoSm" />
        </div>
        <div className="w-full flex justify-center flex-col items-center [direction:rtl] my-[1.2vw] gap-[0.5vw] ">
            <P className="text-[#353535] font-medium text-[1.5vw] " >ورود / ثبت ‌نام</P>
            <P className="text-[#717171] font-medium text-[1vw] ">با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</P>
        </div>
     </div>   
    )
}

export default Loginheder
