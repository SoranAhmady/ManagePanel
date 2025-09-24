import React from 'react'
import P from '../../atoms/P/P'
import RepresentationPageFormApplicant from './../../moloculse/RepresentationPageFormApplicant/RepresentationPageFormApplicant';
import RepresentationPageFormAddress from './../../moloculse/RepresentationPageFormAddress/RepresentationPageFormAddress';
import RepresentationPageFormProperty from './../../moloculse/RepresentationPageFormProperty/RepresentationPageFormProperty';
import RepresentationPageFormFeatures from './../../moloculse/RepresentationPageFormFeatures/RepresentationPageFormFeatures';

function RepresentationPageForm() {
    return (
        <div className="w-[85%] mx-auto my-10 py-10 flex flex-col items-center  px-8  border-[1px] rounded-lg  border-[#CBCBCB]">
            <P className="text-[#353535] text-[1.5vw] font-bold ">فرم درخواست نمایندگی</P>
            <RepresentationPageFormApplicant/>
            <RepresentationPageFormAddress/>
            <RepresentationPageFormProperty/>
            <RepresentationPageFormFeatures />
        </div>
    )
}

export default RepresentationPageForm
