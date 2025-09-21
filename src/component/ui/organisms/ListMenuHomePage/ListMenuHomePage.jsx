import React from 'react'
import P from '../../atoms/P/P'
import { ArayMenu } from './../../../../core/constans/Home';
import Img from '../../atoms/Img/Img';
import Button from './../../atoms/Button/Button';

function ListMenuHomePage() {
    return (
        <div className="w-full flex flex-col items-center gap-[8vw] ">
            <P className="text-[#353535] font-semibold text-[1.9vw]  ">منوی رستوران</P>
            <div className="w-[87%] flex items-center justify-center gap-5">
                {ArayMenu.map((item)=>(
                    <div className="w-1/4 h-[11vw] bg-[#417F56] rounded-lg relative flex flex-col items-center  ">
                        <Img src={item.img} className="w-[90%] h-[15vw] absolute bottom-10 object-contain  " />
                        <Button className="bg-white text-[#353535] text-[1.1vw] font-semibold w-[10vw] py-[0.7vw] rounded-md shadow-[0px_5px_8px_0px_#00000040] absolute top-36 ">
                            {item.text}
                        </Button>

                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default ListMenuHomePage
