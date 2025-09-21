import HeaderNavbar from "./../../moloculse/HeaderNavbar/HeaderNavbar";
import Headericon from "./../../moloculse/Headericon/Headericon";
import HeaderLogo from "./../../moloculse/HeaderLogo/HeaderLogo";
import { motion } from "framer-motion";
import HeaderNavbarList from "../../moloculse/HeaderNavbarList/HeaderNavbarList";

function Header() {
  return (
    <motion.div
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="w-full md:h-[5.99vw] h-[10vh] bg-[#ffff] flex items-center justify-between px-[6vw]  "
    >
      <Headericon />
      <div className="w-[47%] hidden md:flex ">
        <HeaderNavbar />
      </div>
      <HeaderLogo />
      <div className="flex md:hidden">
        <HeaderNavbarList />
      </div>
    </motion.div>
  );
}

export default Header;
