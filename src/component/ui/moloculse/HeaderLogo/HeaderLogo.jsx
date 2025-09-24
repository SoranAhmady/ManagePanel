import React from "react";
import Icon from "../../atoms/Icon/Icon";
import { NavLink } from "react-router-dom";

function HeaderLogo() {
  return (
    <NavLink to={"/"} className=" w-1/4 flex items-center justify-end mr-10 md:mr-0 ">
        <Icon name="logo" />
    </NavLink>
  );
}

export default HeaderLogo;
