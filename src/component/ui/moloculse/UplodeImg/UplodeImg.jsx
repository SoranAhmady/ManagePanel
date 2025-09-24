import { useRef, useState } from "react";
import Button from "../../atoms/Button/Button";
import Img from "../../atoms/Img/Img";
import Icon from "../../atoms/Icon/Icon";
import Input from "./../../atoms/Input/Input";
import P from "../../atoms/P/P";

function UploadImg() {
  const Inputref = useRef();
  const [select, setselect] = useState(null);
  function File(event) {
    if (event.target.files && event.target.files.length > 0) {
      setselect(URL.createObjectURL(event.target.files[0]));
    }
  }

  const Location = select;

  let previousLocations = JSON.parse(localStorage.getItem("Location7"));
  if (!Array.isArray(previousLocations)) {
    previousLocations = [];
  }
  if (!previousLocations.includes(Location)) {
    previousLocations.push(Location);
  }
  localStorage.setItem("Location7", JSON.stringify(previousLocations));

  const Choose = () => {
    Inputref.current.click();
  };

  return (
    <div
      className={`w-[580px] rounded-lg h-[192px]  flex items-center justify-center ${
        select ? "" : "border-[2px]  border-[#CBCBCB]"
      }  `}
    >
      <Input
        type="file"
        ref={Inputref}
        onChange={File}
        style={{ display: "none" }}
      />
      {!select && (
        <Button
          className="w-full h-full flex items-center justify-center"
          onClick={Choose}
        >
          <div className="w-full flex flex-col items-center justify-center gap-3 text-[#717171] ">
            <Icon name="uploade" />
            <P className="[direction:rtl]">
              تصاویری از ملک را بارگذاری کنید...
            </P>
          </div>
        </Button>
      )}
      {select && (
        <div className="w-full h-full  rounded-lg">
          <Img
            src={select}
            className="w-full h-full flex items-center justify-center rounded-lg object-cover "
          />
        </div>
      )}
    </div>
  );
}

export default UploadImg;
