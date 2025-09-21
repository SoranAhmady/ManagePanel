import { ArayShabe } from "../../../../core/constans/Home";
import Button from "../../atoms/Button/Button";
import P from "../../atoms/P/P";
import Icon from "./../../atoms/Icon/Icon";
import { motion } from "framer-motion";
function WindowBranchSelection({ setOpenpage }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 "
    >
  <div className="absolute inset-0 backdrop-blur-sm bg-[#00000099]"></div>

      <div className="bg-white relative z-10  w-[50vw] h-[25vw] flex flex-col  rounded-lg items-center justify-between px-5 py-5 ">
        <div className="w-full gap-[17.5vw] text-[1.3vw] text-[#353535] font-semibold flex items-center justify-start ">
          <Button onClick={() => setOpenpage(false)}>
            <Icon name="backWin" />
          </Button>
          <P>انتخاب شعبه</P>
        </div>
        <P className="w-full flex [direction:rtl] items-center justify-center text-[#353535] ">
          برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
        </P>
        <div className="w-full flex items-center justify-between gap-4 ">
          {ArayShabe.slice(0,4).map((item) => (
            <div
              className="w-1/4 h-[15vw] shadow-[0px_0px_0px_0px_#0000001A,0px_1px_2px_0px_#0000001A,0px_4px_4px_0px_#00000017,0px_9px_5px_0px_#0000000D,0px_16px_6px_0px_#00000003,0px_25px_7px_0px_#00000000] hover:shadow-none hover:border-[#417F56]  bg-white rounded-md flex flex-col items-center border-[#CBCBCB] border-[1px]  "
            >
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                className="w-full h-[65%]   rounded-t-md bg-center bg-no-repeat bg-cover object-contain flex items-center justify-center "
              ></div>
              <div className="flex flex-col gap-2">
                <P className="w-full text-center text-[#353535] text-[1vw] font-semibold ">
                  {item.name}
                </P>
                <P className="w-full text-center text-[0.73vw] text-[#717171] ">
                  {item.text}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default WindowBranchSelection;

// box-shadow: ;

// box-shadow: ;

// box-shadow: ;

// box-shadow: ;

// box-shadow: ;

// box-shadow: ;
