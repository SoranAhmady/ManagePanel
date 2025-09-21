import HeaderNavbar from './../../moloculse/HeaderNavbar/HeaderNavbar';
import Headericon from './../../moloculse/Headericon/Headericon';
import HeaderLogo from './../../moloculse/HeaderLogo/HeaderLogo';
import { motion } from 'framer-motion';

function Header() {
    
    return (
        <motion.div initial={{translateY:-100}} animate={{translateY:0}} transition={{duration:1,delay:0.1}} className="w-full h-[5.99vw] bg-[#ffff] flex items-center justify-between px-[6vw]  " >
            <Headericon/>
            <HeaderNavbar/>
            <HeaderLogo/>
        </motion.div>
    )
}

export default Header
