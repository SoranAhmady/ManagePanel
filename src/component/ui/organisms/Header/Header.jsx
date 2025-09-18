import HeaderNavbar from './../../moloculse/HeaderNavbar/HeaderNavbar';
import Headericon from './../../moloculse/Headericon/Headericon';
import HeaderLogo from './../../moloculse/HeaderLogo/HeaderLogo';

function Header() {
    
    return (
        <div className="w-full h-[5.99vw] bg-[#ffff] flex items-center justify-between px-[6vw]  " >
            <Headericon/>
            <HeaderNavbar/>
            <HeaderLogo/>
        </div>
    )
}

export default Header
