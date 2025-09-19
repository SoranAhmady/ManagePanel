import LoginPasswordform from "../../moloculse/LoginPasswordform/LoginPasswordform"
import LoginPasswordHeader from "../../moloculse/LoginPasswordHeader/LoginPasswordHeader"

function LoginPassword({setPassword,Numbers}) {
    return (
     <div className="w-full h-full flex flex-col px-[1.5vw] py-[1.2vw]  ">
        <LoginPasswordHeader/>
        <LoginPasswordform Numbers={Numbers} setPassword={setPassword}/>
     </div>   
    )
}

export default LoginPassword
