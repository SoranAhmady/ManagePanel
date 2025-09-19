import React from "react";
import Icon from "../../atoms/Icon/Icon";
import { NavLink } from "react-router-dom";

function HeaderLogo() {
  return (
    <div className=" w-1/4 flex items-center justify-end ">
        <Icon name="logo" />
    </div>
  );
}

export default HeaderLogo;
