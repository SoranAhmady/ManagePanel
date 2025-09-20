import HeaderNavbar from './../../moloculse/HeaderNavbar/HeaderNavbar';
import Headericon from './../../moloculse/Headericon/Headericon';
import HeaderLogo from './../../moloculse/HeaderLogo/HeaderLogo';
import { motion } from 'framer-motion';

function Header() {
    
    return (
        <motion.div initial={{translateX:-700}} animate={{translateX:0}} transition={{duration:2}} className="w-full h-[5.99vw] bg-[#ffff] flex items-center justify-between px-[6vw]  " >
            <Headericon/>
            <HeaderNavbar/>
            <HeaderLogo/>
        </motion.div>
    )
}

export default Header
