import React from "react";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";

function RepresentationPageInformation() {
  const ArayIcon = [
    { id: 1, icon: "dastorart", text: "اعطای دستورالعمل پخت غذاها" },
    { id: 2, icon: "amarbank", text: "طرح‌های تشویقی ارتقای فروش" },
    { id: 3, icon: "keper", text: "تسهیلات راه‌اندازی رستوران و تجهیز آن" },
    { id: 4, icon: "bank", text: "بیش از 20 شعبه فعال در سراسر کشور" },
  ];
  return (
    <div className="w-[85%] mx-auto flex items-center justify-center    border-b-[1px] border-[#CBCBCB] ">
      <div className="w-[80%]  flex  items-center justify-between py-14 ">
        {ArayIcon.map((item) => (
          <div className="w-1/5 flex flex-col items-center justify-center gap-4 text-center text-[1.35vw] text-[] ">
            <Icon name={item.icon} />
            <P>{item.text}</P>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepresentationPageInformation;
