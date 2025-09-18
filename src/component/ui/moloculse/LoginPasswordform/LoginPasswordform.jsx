import { useContext, useState } from "react";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import { LoginContaxt } from "../../../../context/LoginWindow";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import useTimer from "./../Timer/Timer";
import OtpInput from 'react-otp-input';



function LoginPasswordform() {
  const { setNextWindow } = useContext(LoginContaxt);
 const [otp, setOtp] = useState('');
 
 

  const handelNext = () => {
    if (otp == "") {
      toast.error("کد تایید را پر کنید  ");
    } else if (otp!=="11111") {
      toast.error("کد تایید نادرست است  ");
    }
    if(otp=="11111"){
      toast("درحال برسی کد تایید... ",{className:"bg-[#ffff] [direction:rtl] px-10 text-[#417F56] text-[1.5vw] ",hideProgressBar:true,});
      
    }
  };
  const { min, sec } = useTimer(1.5);

  return (
    <div className="">
      <div className="w-full flex items-center justify-center gap-7 ">
        
       <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={5}
      containerStyle="w-full flex items-center justify-center gap-7 "
      skipDefaultStyles
      inputStyle="w-1/5 h-[3.5vw] border-[#717171] focus:shadow-[0px_0px_5px_1px_#417F56] border-[1px] rounded-md flex items-center justify-center text-center text-[1.6vw] text-[#717171] outline-none  "
      renderInput={(props) => <input {...props} />}
    />

      </div>
      <div className=" w-full flex items-center justify-between my-5 ">
        <Button onClick={() => setNextWindow("1")} className="text-[#417F56] ">
          ویرایش شماره
        </Button>
        <div className=" [direction:rtl] flex items-center justify-center text-[#717171] ">
          {min == 0 && sec==0 ?"": <Icon name="timer" />}
          {min == 0 && sec==0 ?"": <P>{`${min && min}:${sec && sec}`}</P>}
          <P>تا دریافت مجدد کد</P>
        </div>
      </div>
      <Button
        onClick={handelNext}
        className={` w-full h-[3vw]  flex items-center justify-center ${
          otp.length == 5
            ? "bg-[#417F56] text-[#353535] "
            : "bg-[#EDEDED] text-[#CBCBCB] "
        } my-[2vw] rounded-lg text-[1.5vw] `}
      >
        ثبت کد
      </Button>
      <ToastContainer
        stacked
        toastClassName={
          `bg-[#ffff] [direction:rtl] px-10 text-[#d35d4d] text-[1.5vw] `
        }
      />
    </div>
  );
}

export default LoginPasswordform;

//https://deadsimplechat.com/blog/react-toastify-the-complete-guide/
