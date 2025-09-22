import {
  ArayDropDown1,
  ArayDropDown2,
} from "../../../../core/constans/ArayDrop";
import DropDownHeader from "../DropDownHeader/DropDownHeader";
import P from "../../atoms/P/P";
import { NavLink } from "react-router-dom";

function HeaderNavbar() {
  return (
    <div className="w-full text-[#717171] flex items-center justify-between  ">
      <NavLink
        to={"/contact"}
        style={({ isActive }) => ({
          color: isActive ? "#417F56" : "#717171",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom:isActive ?  "2px solid #417F56":"none",
        })}
      >
        تماس با ما
      </NavLink>
      <NavLink
        to={"/about"}
        style={({ isActive }) => ({
          color: isActive ? "#417F56" : "#717171",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom:isActive ?  "2px solid #417F56":"none",
        })}
      >
        درباره ما
      </NavLink>
      <NavLink
        to={"/representation"}
        style={({ isActive }) => ({
          color: isActive ? "#417F56" : "#717171",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom:isActive ?  "2px solid #417F56":"none",
        })}
      >
        اعطای نمایندگی
      </NavLink>
      <DropDownHeader
        Option={ArayDropDown2}
        defultText="منو"
        classDirections="top-10 right-2 z-10 "
      />
      <DropDownHeader
        Option={ArayDropDown1}
        defultText="شعبه"
        classDirections="top-10 left-2  z-10"
      />
      <NavLink
        to={"/"}
        style={({ isActive }) => ({
          color: isActive ? "#417F56" : "#717171",
          fontWeight: isActive ? "bold" : "normal",
          borderBottom:isActive ?  "2px solid #417F56":"none",
        })}
      >
        صفحه اصلی
      </NavLink>
    </div>
  );
}

export default HeaderNavbar;
