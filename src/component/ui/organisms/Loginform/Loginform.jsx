import React from 'react'
import LoginButton from '../../moloculse/LoginButton/LoginButton'
import Loginheder from '../../moloculse/Loginheder/Loginheder'

function Loginform({setNumbers}) {
    return (
     <div className="w-full h-full flex flex-col px-[1.5vw] py-[1.2vw]  ">
        <Loginheder/>
        <LoginButton setNumbers={setNumbers} />
     </div>   
    )
}

export default Loginform
