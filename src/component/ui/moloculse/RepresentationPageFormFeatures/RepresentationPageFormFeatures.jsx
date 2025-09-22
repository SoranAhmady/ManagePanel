import Button from "../../atoms/Button/Button";
import P from "../../atoms/P/P";
import RepresentationPageFormFeaturesImage from "../RepresentationPageFormFeaturesImage/RepresentationPageFormFeaturesImage";
import RepresentationPageFormFeaturesInput from "../RepresentationPageFormFeaturesInput/RepresentationPageFormFeaturesInput";

function RepresentationPageFormFeatures() {
  return (
    <div className="w-full flex flex-col items-end">
      <P className="text-[#353535] text-[1.3vw] font-medium ">
        امکانات ملک متقاضی
      </P>

      <div className="w-full flex items-center justify-between my-4">
        <RepresentationPageFormFeaturesImage />
        <RepresentationPageFormFeaturesInput />
      </div>

      <div className="w-full flex items-center justify-center">
        <Button className=" bg-[#417F56] py-2 px-10 rounded text-white  ">
          ثبت اطلاعات
        </Button>
      </div>
    </div>
  );
}

export default RepresentationPageFormFeatures;
